import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import { UserContext } from '../user-context';

function Header() {

	const { user } = useContext(UserContext);

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
				<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
						<Link className="nav-link" to="/">
							Home
							<span className="sr-only">(current)</span>
						</Link>
					</li>
					<li>
						<Link className="nav-link" to="/post/create">
							Create Post
							<span className="sr-only">(current)</span>
						</Link>
					</li>
				</ul>
					{ !user && <div className="form-inline my-2 my-lg-0">
						<Link to="/register" className="nav-link">Register</Link>
						<Link to="/login" className="nav-link">Login</Link>
					</div> }
				</div>
			</nav>
		</header>
	);
}

export default Header;