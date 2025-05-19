import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/send-email', async (req, res) => {
	const { name, email, message } = req.body;

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'reverlab0@gmail.com',
			pass: 'viwe dxxv kkhu tblw',
		},
	});

	const mailOptions = {
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

	try {
		await transporter.sendMail(mailOptions);
		res.json({ message: 'Correo enviado correctamente' });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Error al enviar el correo' });
	}
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
