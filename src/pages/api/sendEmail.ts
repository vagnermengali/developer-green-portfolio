import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { from, to, subject, text } = req.body;

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'contatovagnermengali@gmail.com',
      pass: '*1234'
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
    console.error('Erro ao enviar e-mail:', error.message);
    res.status(500).json({ error: 'Erro interno ao enviar e-mail' });
  }
}
