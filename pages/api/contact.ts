import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

type FormData = {
    name: string;
    email: string;
    message: string;
};

type ApiResponse = {
    message?: string;
    error?: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ApiResponse>
) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body as FormData;

        // Basic validation
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Create a transporter object using Gmail SMTP
        // IMPORTANT: For Gmail, you'll likely need to use an "App Password"
        // if you have 2-Step Verification enabled.
        // See: https://support.google.com/accounts/answer/185833
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_SERVER_HOST, // smtp.gmail.com
            port: parseInt(process.env.EMAIL_SERVER_PORT || '465'), // 465 (SSL) or 587 (TLS)
            secure: parseInt(process.env.EMAIL_SERVER_PORT || '465') === 465, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_SERVER_USER,       // your gmail address
                pass: process.env.EMAIL_SERVER_PASSWORD,   // your gmail app password (NOT your regular password)
            },
            // Optional: If you have issues with self-signed certificates on a local SMTP server (not Gmail)
            // tls: {
            //   rejectUnauthorized: false
            // }
        });

        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_FROM}>`, // sender address (shows your configured email)
            replyTo: email, // So you can reply directly to the user's email
            to: process.env.EMAIL_FROM, // list of receivers (send it to yourself)
            subject: `New Contact Form Submission from ${name}`, // Subject line
            text: `You have a new message from your website contact form:\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`, // plain text body
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          <p>You have received a new message from your website's contact form.</p>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Message:</strong></p>
          <div style="padding: 10px; border: 1px solid #ddd; background-color: #f9f9f9;">
            <p style="white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #eee;">
          <p style="font-size: 0.9em; color: #777;">This email was sent from your website contact form.</p>
        </div>
      `, // html body
        };

        try {
            await transporter.sendMail(mailOptions);
            console.log('Email sent successfully');
            return res.status(200).json({ message: 'Message sent successfully!' });
        } catch (error) {
            console.error('Error sending email:', error);
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            return res.status(500).json({ error: `Failed to send message: ${errorMessage}` });
        }
    } else {
        // Handle any other HTTP method
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}