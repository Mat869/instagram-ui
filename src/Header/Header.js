import React from 'react';
import Menu from './Menu/Menu';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
	return (
		<header className="Header">
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link className="navbar-brand" to="/">Instagram</Link>
				<button className="navbar-toggler" type="button" data-toggle="collapse"
				        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
				        aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<Menu />
					<div className="form-inline my-2 my-lg-0">
						<Link to="/register" className="nav-link">Register</Link>
						<Link to="/login" className="nav-link">Login</Link>
					</div>
				</div>
			</nav>
		</header>
	);
}

export default Header;