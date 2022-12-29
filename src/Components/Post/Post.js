import "./Post.scss";

const Post = (props) => {
	let data = props.data;

	return (
		<div className="post-item">
			<div
				className="post-profile-image"
				style={{ backgroundImage: `url(${data.profile_image_url})` }}></div>
			<div className="post-content">
				<div className="post-profile">
					<div className="post-name">{data.author_name}</div>
					<div className="post-username">@{data.author_id}</div>
				</div>
				<div className="post-message" dangerouslySetInnerHTML={{ __html: data.content }}></div>
				<div className="post-interactions">
					<div className="reply interaction-button">
						<div className="icon">
							<i className="fa-regular fa-comment"></i>
						</div>
						{data.reply_count}
					</div>
					<div className="repost interaction-button">
						<div className="icon">
							<i className="fa-solid fa-retweet"></i>
						</div>
						{data.retweet_count}
					</div>
					<div className="quote interaction-button">
						<div className="icon">
							<i className="fa-solid fa-quote-left"></i>
						</div>
						{data.quotes.length}
					</div>
					<div className="like interaction-button">
						<div className="icon">
							<i className="fa-regular fa-heart"></i>
						</div>
						{data.likes}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
