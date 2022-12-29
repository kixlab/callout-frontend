import "./Post.scss";
import Post from "../../Components/Post/Post";
import Dashboard from "../../Components/Dashboard/Dashboard";

import { useState } from "react";

const PostView = (props) => {
	// let data = props.data;

	const [dashboardState, setDashboardState] = useState(false);

	const [contextFlag, setContextFlag] = useState(false);
	const [rebuttalFlag, setRebuttalFlag] = useState(false);

	const [postData, setPostData] = useState({
		id: 1,
		author_name: "Mycutegallery",
		author_id: "@main_user",
		content: "lorem ipsum",
		likes: 10,
		replies: require('../../Data/ji.json'),
		quotes: [],
		boosts: 40,
	});

	if (props.data) {
		setPostData = props.data;
	}

	// let data = {
	// 	id: 1,
	// 	author_name: "user1",
	// 	author_id: "@username",
	// 	content: "lorem ipsum dolor si amㄴet...",
	// 	likes: 10,
	// };

	const returnToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // for smoothly scrolling
		});
	};

	const openDashBoard = () => {
		setDashboardState(true);
	};

	const addReply = () => {
		let area = document.getElementById("reply-input");

		if (area.value === "") {
			return;
		}
		let replyObject = {
			id: "1_" + (postData.replies.length + 1),
			author_name: "User",
			author_id: "@main_user",
			content: area.value.replace("\n", "<br />"),
			likes: 0,
			replies: [],
			quotes: [],
			boosts: 0,
		};

		let temp = { ...postData };
		temp.replies.push(replyObject);
		setPostData(temp);

		console.log(postData);

		area.value = "";
	};

	let replies = postData.replies.map((item) => {
		return <Post data={item}></Post>;
	});

	return (
		<main id="post-wrapper">
			<div
				className="header"
				id="timeline-header"
				onClick={() => {
					returnToTop();
				}}>
				트윗
			</div>
			<div id="post">
				<div className="post-profile">
					<div className="post-profile-image"></div>
					<div className="post-name-wrapper">
						<div className="post-name">{postData.author_name}</div>
						<div className="post-username">{postData.author_id}</div>
					</div>
				</div>
				<div className="post-content">
					<div className="post-message">{postData.content}</div>
					<div className="post-date">November 16th, 2022 02:19 AM</div>
					<div
						className="post-responses"
						onClick={() => {
							openDashBoard();
						}}>
						반응 모아보기
						<i className="fa-solid fa-arrow-right"></i>
					</div>
					<div className="post-interactions">
						<div className="reply interaction-button">
							<div className="icon">
								<i className="fa-regular fa-comment"></i>
							</div>
							{postData.replies.length}
						</div>
						<div className="repost interaction-button">
							<div className="icon">
								<i className="fa-solid fa-retweet"></i>
							</div>
							{postData.boosts}
						</div>
						<div className="quote interaction-button">
							<div className="icon">
								<i className="fa-solid fa-quote-left"></i>
							</div>
							{postData.quotes.length}
						</div>
						<div className="like interaction-button">
							<div className="icon">
								<i className="fa-regular fa-heart"></i>
							</div>
							{postData.likes}
						</div>
					</div>
				</div>
			</div>
			<div id="reply">
				<div id="compose-profile"></div>

				<textarea placeholder="답글을 적어 주세요" id="reply-input"></textarea>
				<div id="compose-button" onClick={() => addReply()}>
					답글 달기
				</div>
			</div>
			<div id="replies">
				{postData.replies.map((item) => {
					return <Post data={item} key={item.id}></Post>;
				})}
			</div>

			{dashboardState && <Dashboard setState={setDashboardState} />}
		</main>
	);
};

export default PostView;
