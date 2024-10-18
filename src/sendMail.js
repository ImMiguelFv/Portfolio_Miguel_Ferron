const nodemailer = require('nodemailer');

export default async function (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ message: 'Faltan parámetros' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `[Contacto Portafolio] ${subject}`,
      text: `Mensaje de: ${email}\n\n${message}`,
    });

    res.status(200).json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al enviar el correo', error: error.message });
  }
}
