import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUserCircle} from '@fortawesome/free-solid-svg-icons'; 
import { UserContext } from '../../user-context';
import './MenuAvatar.scss';

function MenuAvatar() {

    const { user } = useContext(UserContext);

    

	return (
            <div className="MenuAvatar">
                {user.avatar ? <img /> : <FontAwesomeIcon icon={faUserCircle} />}
                
            </div>
	);
}
/*
<img src={user && user.avatar ? user.avatar : avatarDefault }
                    alt={user && user.username}
/>
*/
export default MenuAvatar;