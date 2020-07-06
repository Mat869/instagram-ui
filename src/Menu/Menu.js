import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import './Menu.scss';
import MenuAvatar from './MenuAvatar/MenuAvatar';


function Menu() {

	return (
            <div className="Menu">
                <nav className="navbar navbar-dark bg-dark d-flex align-items-center">
                    <Link className="Menu__Logo navbar-brand d-none d-sm-block" to="/">Instagram</Link>
                    <form className="Menu__search text-white ml-auto">
                        <input class="form-control mr-sm-2" type="search" placeholder="Search" />
                    </form>
                    <div className="Menu__home nav-link ml-auto" >
                        <Link className="navbar-brand" to="/post/create">
                            <FontAwesomeIcon icon={faPlusSquare} />
                        </Link>
                    </div> 
                    <div className="Menu__messages nav-link text-white">
                        <Link className="navbar-brand" to="#">
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </Link>
                        
                    </div>
                    <div>
                        <Link className="nav-link navbar-brand">
                            <MenuAvatar />
                        </Link>
                    </div>
                </nav>
            </div>
	);
}

export default Menu;