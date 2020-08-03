import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import config from '../config';
import './Profile.scss';
import Post from '../common/Post/Post';
import ProfileUser from './ProfileUser/ProfileUser';

function Profile() {

	const { id } = useParams();
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		getPosts();
	}, [id]);

	async function getPosts() {
		try {
			if (!id) {
				return;
			}
			const fetchedPosts = await (await fetch(config.apiUrl + '/users/'+ id + '/posts?sort=-1', {
				credentials: 'include'
			})).json();
			setPosts(fetchedPosts);
		} catch(err) {
			console.log(posts);
		}
	}

	return (
		<div className="Profile">

			<ProfileUser userId={id} postsNum={posts.length} />
			<hr className="mx-3 my-4" />

			<div className="d-flex flex-wrap">
				{ posts.map(post => <Post key={post._id} data={post} />) }
			</div>

		</div>
	);
}

export default Profile;
