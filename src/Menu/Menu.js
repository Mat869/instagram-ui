import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';
import { UserContext } from '../user-context';

function Header() {

	const { user } = useContext(UserContext);

	return (
            <div className="Header">
                <nav className="navbar navbar-dark bg-dark d-md-flex">
                    <Link className="navbar-brand Menu__Logo d-none d-sm-block" to="/">Instagram</Link>
                    <ul className="nav mr-auto d-flex flex-row">
                        <li className="Menu__home">
                            <Link className="nav-link" to="/">
                                Home
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                        <li className="Menu__post" >
                            <Link className="nav-link" to="/post/create">
                                Create Post
                                <span className="sr-only">(current)</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
	);
}

export default Header;