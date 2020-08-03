import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../user-context';
import Avatar from '../../common/Avatar/Avatar';
import './MenuAvatar.scss';
function MenuAvatar() {
    const { user } = useContext(UserContext);
    return (
        <div className="MenuAvatar">
        <Link to={`/profile/${user._id}`}>
            <Avatar size="sm" image={user.avatar} />
        </Link>
        </div>
    );
}
export default MenuAvatar;