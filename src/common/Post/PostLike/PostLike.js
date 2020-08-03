import React, { useContext, useState } from 'react';
import './PostLike.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { UserContext } from '../../../user-context';
import config from '../../../config/index';

function PostLike(props) {

	const { user } = useContext(UserContext);
	const [ likes, setLikes ] = useState(props.likes);
	const [ hasLiked, setHasLiked ] = useState(hasUserLiked());

	function hasUserLiked() {
		return props.likes.includes(user._id);
	}

	async function like() {
		const url = `${config.apiUrl}/posts/${props.postId}/likes`;
		const response = await fetch(url, {
			method: 'POST',
			credentials: 'include'
		});
		return await response.json();
	}

	async function unlike() {
		const url = `${config.apiUrl}/posts/${props.postId}/likes/${user._id}`;
		const response = await fetch(url, {
			method: 'DELETE',
			credentials: 'include'
		});
		return await response.json();
	}

	async function setLikeStatus(status) {
		setHasLiked(status);
		try {
			const post = status ? await like() : await unlike();
			setLikes(post.likes);
		} catch(err) {
			console.log(err);
		}
	}

	const likedClass = hasLiked ? 'PostLike__heart--liked' : '';

	return (
		<div>
			{likes.length}
			<span className={`PostLike__heart ${likedClass}`} onClick={() => setLikeStatus(!hasLiked)}>
				<FontAwesomeIcon icon={faHeart} />
			</span>
		</div>
	);
}

export default PostLike;
