import React from 'react';
import config from '../../config';
import './Post.scss';
import PostLike from './PostLike/PostLike';
import PostDate from './PostDate/PostDate';
import Avatar from '../Avatar/Avatar';
import { Link } from 'react-router-dom';

function Post(props) {

	const buildImageUrl = (imageName) => {
		return config.apiUrl + '/posts/' + imageName;
	};

	return (
		<div className="col-12 col-md-4">
			<article className="Post">
				<header>
					<div className="Post__user">
						<Link to={`/profile/${props.data.user._id}`}>
							<Avatar size="md" image={props.data.user.avatar} />
						</Link>
					</div>
					<div className="Post__date">
						<PostDate date={props.data.createdAt} />
					</div>
				</header>
				<div className="Post__image">
					<Link to={`/post/${props.data._id}`}>
						<img src={buildImageUrl(props.data.image)} title={props.data.description} />
					</Link>
				</div>
				<div className="Post__actions">
					<PostLike postId={props.data._id} likes={props.data.likes} />
				</div>
				<div className="Post__content">
					<h1 className="Post__description">{props.data.description}</h1>
				</div>
			</article>
		</div>
	);
}

export default Post;
