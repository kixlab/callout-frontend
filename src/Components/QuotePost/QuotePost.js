import "./QuotePost.scss";
import Post from "../Post/Post";

const QuotePost = (props) => {
	let data = props.data;
	let quoted = props.quoted;

	return (
		<div className="quote-post-item">
			<div
				className="post-profile-image"
				style={{ backgroundImage: `url(${data.profile_image_url})` }}></div>
			<div className="post-content">
				<div className="post-profile">
					<div className="post-name">{data.author_name}</div>
					<div className="post-username">@{data.author_id}</div>
				</div>
				<div className="post-message" dangerouslySetInnerHTML={{ __html: data.content }}></div>
				<div className="quoted-post">
					<div
						className="post-profile-image"
						style={{ backgroundImage: `url(${quoted.profile_image_url})` }}></div>
					<div className="post-content">
						<div className="post-profile">
							<div className="post-name">{quoted.author_name}</div>
							<div className="post-username">@{quoted.author_id}</div>
						</div>
						<div
							className="post-message"
							dangerouslySetInnerHTML={{ __html: quoted.content }}></div>
					</div>
				</div>

				{/* <div className="post-flag">Additional Context Added</div> */}
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

export default QuotePost;
