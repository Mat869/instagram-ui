import React, { useEffect, useState } from 'react';
import './ProfileUser.scss';
import Avatar from '../../common/Avatar/Avatar';
import config from '../../config/index';

function ProfileUser(props) {

	const [profile, setProfile] = useState({});

	useEffect(() => {
		getUser(props.userId);
	}, [props.userId]);

	async function getUser(id) {
		try {
			const res = await fetch(`${config.apiUrl}/users/${id}`, {
				credentials: 'include'
			});
			const fetchedUser = await res.json();
			setProfile(fetchedUser);
		} catch(err) {
			console.log(err);
		}
	}

	return (
		<header className="d-flex flex-column flex-lg-row mt-2">
			<div className="col-12 col-lg-4 text-center">
				<Avatar size="lg" image={profile.avatar} />
			</div>
			<div className="col-12 col-lg-8 text-center text-lg-left">
				<h2 className="h3 mt-2">{ profile.username }</h2>
				<div className="mt-3">
					<strong className="mr-3 mr-lg-5">{props.postsNum} posts</strong>
					<strong className="mr-3 mr-lg-5">0 followers</strong>
					<strong>0 following</strong>
				</div>
				<p className="mt-3 text-muted">
					A very interesting profile
				</p>
			</div>
		</header>
	);
}

export default ProfileUser;
