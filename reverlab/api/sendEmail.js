import nodemailer from 'nodemailer';

export default async function handler(req, res) {
	if (req.method !== 'POST') {
		return res.status(405).send({ message: 'Only POST requests allowed' });
	}

	const { name, email, message } = req.body;

	try {
		let transporter = nodemailer.createTransport({
			service: 'gmail',
			auth: {
				user: 'reverlab0@gmail.com',
				pass: 'viwe dxxv kkhu tblw',
			}
		});

		let mailOptions = {
			from: email,
			to: 'reverlab0@gmail.com',
			subject: `Nuevo mensaje de ${name}`,
			html: `
				<h2>Has recibido un nuevo mensaje de contacto</h2>
				<p><strong>Nombre:</strong> ${name}</p>
				<p><strong>Mensaje:</strong> ${message.replace(/\n/g, '<br>')}</p>
				<hr>
				<p>Para contactar a esta persona responde a este correo: <strong>${email}</strong></p>
				`,
			replyTo: email
		};

		await transporter.sendMail(mailOptions);
		res.status(200).json({ message: 'Email enviado correctamente' });
	} catch (error) {
		res.status(500).json({ message: 'Error enviando el email', error });
	}
}
