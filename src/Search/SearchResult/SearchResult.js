import React from 'react';
import Avatar from '../../common/Avatar/Avatar';
import './SearchResult.scss';
import { Link } from 'react-router-dom';

function SearchResult(props) {
	return (
		<div className="col-lg-4" key={props.user._id}>
			<div className="SearchResult d-flex">
				<Link to={`/profile/${props.user._id}`}>
					<div className="SearchResult__avatar">
						<Avatar size="md" image={props.user.avatar} />
					</div>
					<div>
						<strong>{ props.user.username }</strong>
						<p className="SearchResult__bio">{ props.user.bio }</p>
					</div>
				</Link>
			</div>
		</div>
	);
}

export default SearchResult;
