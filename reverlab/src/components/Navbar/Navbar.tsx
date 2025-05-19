import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './Navbar.css';

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark custom-navbar">
			<a className="navbar-brand img-logo" href="#">REVER LAB</a>

			<div className="collapse navbar-collapse justify-content-end" id="navbarNav">
				<ul className="navbar-nav ">
					<li className="nav-item size">
						<a className="nav-link active" href="#">VR GAMES</a>
					</li>
					<li className="nav-item size">
						<a className="nav-link" href="#">VIRTUAL TRAVEL</a>
					</li>
					<li className="nav-item size">
						<a className="nav-link" href="#">ABOUT</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;