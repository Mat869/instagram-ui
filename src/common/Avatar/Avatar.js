import React from 'react';
import PropTypes from 'prop-types';
import avatarDefault from './avatar-default.jpg';
import './Avatar.scss';

function Avatar(props) {
	const size = props.size || 'sm';
	const image = props.image || avatarDefault;
	const className = 'Avatar--' + size;

	return (
		<img src={image} className={'Avatar ' + className} />
	);
}

Avatar.propTypes = {
	size: PropTypes.oneOf(['sm', 'md', 'lg'])
};

export default Avatar;
 