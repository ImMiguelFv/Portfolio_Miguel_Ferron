const nodemailer = require('nodemailer');

export default async function (req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { email, subject, message } = req.body;

  if (!email || !subject || !message) {
    return res.status(400).json({ message: 'Faltan parámetros' });
  }

  // Configuración de tu transportador SMTP (puede ser Gmail u otro servicio)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER, // Tu correo de envío
      pass: process.env.EMAIL_PASS, // La contraseña o app password
    },
  });

  try {
    // Envío del correo
    await transporter.sendMail({
      from: email, // El remitente será el correo del usuario que completa el formulario
      to: process.env.EMAIL_USER, // Este es tu correo, donde recibirás los mensajes
      subject: `[Contacto Portafolio] ${subject}`, // Asunto del correo
      text: `Mensaje de: ${email}\n\n${message}`, // Cuerpo del mensaje
    });

    res.status(200).json({ message: 'Correo enviado correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al enviar el correo', error: error.message });
}
}
