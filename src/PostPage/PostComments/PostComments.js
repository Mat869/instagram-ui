import React, { useContext, useEffect, useState } from 'react';
import CommentCreate from './CommentCreate/CommentCreate';
import config from '../../config/index';

function PostComments({postId}) {
    const [comments, setComments] = useState([]);
        useEffect(() => {
            if(!postId) {
                return;
            }
            getComments(postId);
        }, [postId]);
        async function getComments(postId) {
            const fetchedComments = await ( await fetch(`${config.apiUrl}/posts/${postId}/comment`, {
                credentials: "include"
            })).json();
            setComments();
        }
        function onAddedComment(comment) {
            setComments([...comments, comment])
        }
    return (
        <div>
            {comments.map(comment => {
                return (<div key={comment._id}>{comment.content}</div>)
            })}
            <CommentCreate postId={postId} onAdd={onAddedComment} />
        </div>
    );
}
export default PostComments;