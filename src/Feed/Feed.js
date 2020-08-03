import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Post from '../common/Post/Post';
import config from '../config/index';
import './Feed.scss';

function Feed() {
	const [isLoading, setLoading] = useState(true);
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function getPosts() {
			try {
				const response = await fetch(config.apiUrl + '/posts?sort=-1', {
					credentials: 'include'
				});
				const fetchedPosts = await response.json();
				setLoading(false);
				setPosts(fetchedPosts);
			} catch(err) {
				console.log(posts);
			}
		}
		getPosts();
	}, []);

	return (
		<div className="Feed d-flex flex-wrap">
			{ isLoading && <div className="loader">
				<FontAwesomeIcon icon={faSpinner} size="lg" spin />
			</div> }

			{ posts.map(post => <Post key={post._id} data={post} />) }
		</div>
	);
}

export default Feed;