import nodemailer, { Transporter, SendMailOptions } from 'nodemailer';
import { NextApiRequest, NextApiResponse } from 'next';
import 'dotenv/config';

async function SendEmail(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método não permitido' });
  }

  const { email, subject, html, name } = req.body;

  // Verifica se as variáveis de ambiente estão definidas
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.error('Erro: Variáveis de ambiente SMTP não estão definidas');
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }

  // Cria uma instância do transportador SMTP
  const transporter: Transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.SMTP_USER, // Seu endereço de e-mail do Gmail
      pass: process.env.SMTP_PASS, // Sua senha do Gmail
    },
  });

  // Configuração do e-mail
  const mailOptions: SendMailOptions = {
    from: process.env.SMTP_USER,
    to: email,
    subject: subject,
    html: `${name} - ${html}`,
  };

  // Envia o e-mail
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email enviado:', info.messageId);
    res.status(200).json({ success: true, messageId: info.messageId });
  } catch (error: any) {
    console.error('Erro ao enviar e-mail:', error);
    res.status(500).json({ error: error });
  }
}

export default SendEmail;
