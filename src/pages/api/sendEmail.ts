import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { from, to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || '',
    port: parseInt(process.env.SMTP_PORT || '465', 10),
    secure: true,
    auth: {
      user: process.env.SMTP_USER || '',
      pass: process.env.SMTP_PASS || '',
    },
  });

  try {
    const info = await transporter.sendMail({
      from,
      to,
      subject,
      text,
    });

    console.log('E-mail enviado:', info.messageId);

    res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error('Erro ao enviar e-mail:', (error as Error).message);
    res.status(500).json({ error: 'Erro interno ao enviar e-mail' });
  }
}
