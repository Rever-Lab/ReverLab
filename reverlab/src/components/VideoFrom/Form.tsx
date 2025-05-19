import './Form.css';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';

const Form = () => {
	const [form, setForm] = useState({ name: '', email: '', message: '' });

	const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		try {
			const res = await fetch('/api/sendEmail', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(form),
			});
			const data = await res.json();
			alert(data.message);
		} catch (error) {
			alert('Error al enviar el mensaje');
		}
	};
	return (
		<form className="formulario-contacto" onSubmit={handleSubmit}>
			<h2>Contact Us</h2>
			<div className="mb-3">
				<input type="text" name="name" className="form-control " placeholder="Name" value={form.name} onChange={handleChange} required />
			</div>
			<div className="mb-3">
				<input type="email" name="email" className="form-control" placeholder="Email" value={form.email} onChange={handleChange} required />
			</div>
			<div className="mb-3">
				<textarea name="message" className="form-control  message" placeholder="Message" value={form.message} onChange={handleChange} required />
			</div>
			<button type="submit" className="btn-enviar">SEND</button>
		</form>
	);
};
export default Form;
