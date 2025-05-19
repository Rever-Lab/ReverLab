import './Form.css';

const Form = () => (
	<form className="formulario-contacto">
		<h2>Contact Us</h2>
		<div className="mb-3">
			<input type="text" className="form-control " placeholder="Name" />
		</div>
		<div className="mb-3">
			<input type="email" className="form-control" placeholder="Email" />
		</div>
		<div className="mb-3">
			<textarea className="form-control  message" placeholder="Message" />
		</div>
		<button type="submit" className="btn-enviar">SEND</button>
	</form>
);
export default Form;
