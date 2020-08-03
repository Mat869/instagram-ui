import React from 'react';
import './AppLoader.scss';

function AppLoader(props) {
	let classes = 'AppLoader';
	if (props.show) {
		classes += ' AppLoader--visible';
	}
	return (
		<div className={classes}>
			Loading...
		</div>
	);
}

export default AppLoader;