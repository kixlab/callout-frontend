const QuotePost = (props) => {
	let data = props.data;

	return (
		<div className="post-item">
			<div className="post-profile-image"></div>
			<div className="post-content">
				<div className="post-profile">
					<div className="post-name">{data.author_name}</div>
					<div className="post-username">{data.author_id}</div>
				</div>
				<div className="post-message">{data.content}</div>
				<div className="post-interactions">
					<div className="reply interaction-button">
						<div className="icon">
							<i className="fa-regular fa-comment"></i>
						</div>
						14
					</div>
					<div className="repost interaction-button">
						<div className="icon">
							<i className="fa-solid fa-retweet"></i>
						</div>
						20
					</div>
					<div className="quote interaction-button">
						<div className="icon">
							<i className="fa-solid fa-quote-left"></i>
						</div>
						1000
					</div>
					<div className="like interaction-button">
						<div className="icon">
							<i className="fa-regular fa-heart"></i>
						</div>
						36
					</div>
				</div>
			</div>
		</div>
	);
};

export default QuotePost;
