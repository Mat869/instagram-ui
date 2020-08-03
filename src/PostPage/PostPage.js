import React, {useEffect, useState} from 'react';
import PostComments from './PostComments/PostComments';
import { Link } from 'react-router-dom';
import Avatar from '../common/Avatar/Avatar';
import PostDate from '../common/Post/PostDate/PostDate';
import PostLike from '../common/Post/PostLike/PostLike';
import config from '../config/index';

function PostPage(props) {


	const buildImageUrl = (imageName) => {
		return config.apiUrl + '/posts/' + imageName;
	};

    return (
        <div className="col-12 col-md-4">
            <article className="Post">
                <header>
                    <div className="Post__user">
                    <Link to={`/profile/${props.data.user._id}`}>
                        <Avatar size="md" image={props.data.user.image}/>
                    </Link>
                    </div>
                    <div className="Post__date">
                        <PostDate date={props.data.createdAt} />
                    </div>
                </header>
                <div className="Post__image">
                    <img src={buildImageUrl(props.data.image)} title={props.data.description} />
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
export default PostPage;