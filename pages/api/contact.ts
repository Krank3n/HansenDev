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

// Clean up stale entries every 30 minutes
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

    // Rate limiting
    const clientIp = getClientIp(req);
    if (isRateLimited(clientIp)) {
        return res.status(429).json({ error: 'Too many requests. Please try again later.' });
    }

    const { name, email, message } = req.body ?? {};

    // Type checking
    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
        return res.status(400).json({ error: 'Invalid input.' });
    }

    // Length limits
    if (!name.trim() || name.length > 100) {
        return res.status(400).json({ error: 'Name is required and must be under 100 characters.' });
    }
    if (!email.trim() || email.length > 254) {
        return res.status(400).json({ error: 'A valid email is required.' });
    }
    if (!message.trim() || message.length > 5000) {
        return res.status(400).json({ error: 'Message is required and must be under 5000 characters.' });
    }

    // Email format validation
    if (!EMAIL_REGEX.test(email)) {
        return res.status(400).json({ error: 'A valid email is required.' });
    }

    // Sanitize header-injection vectors
    const safeName = sanitizeHeaderValue(name.trim());
    const safeEmail = sanitizeHeaderValue(email.trim());
    const safeMessage = message.trim();

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
        from: `"${safeName}" <${process.env.EMAIL_FROM}>`,
        replyTo: safeEmail,
        to: process.env.EMAIL_FROM,
        subject: `New Contact Form Submission from ${safeName}`,
        text: `You have a new message from your website contact form:\n\nName: ${safeName}\nEmail: ${safeEmail}\nMessage: ${safeMessage}`,
        html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2 style="color: #333;">New Contact Form Submission</h2>
      <p>You have received a new message from your website's contact form.</p>
      <hr style="border: 0; border-top: 1px solid #eee;">
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
      <p><strong>Message:</strong></p>
      <div style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;">
        <p style="white-space: pre-wrap;">${safeMessage.replace(/\n/g, '<br>')}</p>
      </div>
      <hr style="border: 0; border-top: 1px solid #eee;">
      <p style="font-size: 0.9em; color: #777;">This email was sent from your website contact form.</p>
    </div>
      `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        return res.status(500).json({ error: 'Failed to send message. Please try again later.' });
    }
}
