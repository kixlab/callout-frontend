import "./QuotePost.scss";

const QuotePost = (props) => {
	let data = props.data;

	return (
		<div className="quote-post-item">
			<div className="post-content">
				<div className="post-profile">
					<div className="post-profile-image"></div>
					<div className="post-name">{data.author_name}</div>
					<div className="post-username">{data.author_id}</div>
				</div>
				<div className="post-message">{data.content}</div>

				{/* <div className="post-flag">Additional Context Added</div> */}
			</div>
		</div>
	);
};

export default QuotePost;
