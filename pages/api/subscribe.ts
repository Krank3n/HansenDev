import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type ApiResponse = {
    message?: string;
    error?: string;
};

// ─── Rate Limiting ──────────────────────────────────────────────────────────
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5;

setInterval(() => {
    const now = Date.now();
    rateLimitMap.forEach((value, key) => {
        if (now > value.resetTime) {
            rateLimitMap.delete(key);
        }
    });
}, 30 * 60 * 1000);

function getClientIp(req: NextApiRequest): string {
    const forwarded = req.headers['x-forwarded-for'];
    if (typeof forwarded === 'string') {
        return forwarded.split(',')[0].trim();
    }
    return req.socket.remoteAddress || 'unknown';
}

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (!entry || now > entry.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
        return false;
    }

    entry.count++;
    return entry.count > RATE_LIMIT_MAX;
}

// ─── Validation ─────────────────────────────────────────────────────────────
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeHeaderValue(value: string): string {
    return value.replace(/[\r\n]/g, '');
}

// ─── Handler ────────────────────────────────────────────────────────────────
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiResponse>
) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    const clientIp = getClientIp(req);
    if (isRateLimited(clientIp)) {
        return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    const { email, website } = req.body ?? {};

    // Honeypot check
    if (typeof website === 'string' && website.trim() !== '') {
        return res.status(200).json({ message: 'Subscribed successfully!' });
    }

    if (typeof email !== 'string') {
        return res.status(400).json({ error: 'Invalid input.' });
    }

    if (!email.trim() || email.length > 254) {
        return res.status(400).json({ error: 'A valid email is required.' });
    }

    if (!EMAIL_REGEX.test(email)) {
        return res.status(400).json({ error: 'A valid email is required.' });
    }

    const safeEmail = sanitizeHeaderValue(email.trim());

    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT || '465'),
        secure: parseInt(process.env.EMAIL_SERVER_PORT || '465') === 465,
        auth: {
            user: process.env.EMAIL_SERVER_USER,
            pass: process.env.EMAIL_SERVER_PASSWORD,
        },
    });

    const mailOptions = {
        from: `"HansenDev Newsletter" <${process.env.EMAIL_FROM}>`,
        to: process.env.EMAIL_FROM,
        subject: `New Newsletter Subscriber: ${safeEmail}`,
        text: `New newsletter subscription:\n\nEmail: ${safeEmail}\nTime: ${new Date().toISOString()}`,
        html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="color: #333;">New Newsletter Subscriber</h2>
      <hr style="border: 0; border-top: 1px solid #eee;">
      <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
      <p><strong>Subscribed at:</strong> ${new Date().toISOString()}</p>
      <hr style="border: 0; border-top: 1px solid #eee;">
      <p style="font-size: 0.9em; color: #777;">This notification was sent from your website newsletter form.</p>
    </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Subscribed successfully!' });
    } catch (error) {
        console.error('Error sending subscription email:', error);
        return res.status(500).json({ error: 'Failed to subscribe. Please try again later.' });
    }
}
