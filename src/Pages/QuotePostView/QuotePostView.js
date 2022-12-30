import "./QuotePostView.scss";
import Post from "../../Components/Post/Post";
// import QuotePost from "../../Components/QuotePost/QuotePost";
import Dashboard from "../../Components/Dashboard/Dashboard";

import { useState } from "react";

const QuotePostView = (props) => {
	// let data = props.data;

	const [dashboardState, setDashboardState] = useState(false);

	let data = {
		id: 1,
		author_name: "Llian (is busy with finals)",
		author_id: "@prime_value",
		content: "lorem ipsum dolor si amㄴet...",
		likes: 10,
	};

	let anon_data = {
		id: 1,
		author_name: "IF",
		author_id: "@alt_iffff",
		content:
			"I honestly don't understand why people are fussing so much about savings. You just save up enough money and cut costs where you can with whatever help you've got. You need to be resourceful.",
		likes: 10,
	};

	// let anon_data = {
	// 	id: 1,
	// 	author_name: "Anonymous user",
	// 	author_id: "",
	// 	content:
	// 		"I honestly don't understand why people are fussing so much about savings. You just save up enough money and cut costs where you can with whatever help you've got. You need to be resourceful.",
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

	return (
		<main id="post-wrapper">
			<div
				className="header"
				id="timeline-header"
				onClick={() => {
					returnToTop();
				}}>
				사용자 아이디
			</div>
			<div id="post">
				<div className="post-profile">
					<div className="post-profile-image"></div>
					<div className="post-name-wrapper">
						<div className="post-name">예시 팔로워</div>
						<div className="post-username">@sample_user</div>
					</div>
				</div>
				<div className="post-content">
					<div className="post-message">예시 인용한 트윗</div>
					{/* <div className="post-flag">Point Refuted</div> */}
					<div className="quoted-post">
						<div className="post-profile-image" style={{ backgroundColor: "gray" }}></div>
						<div className="post-content">
							<div className="post-profile">
								<div className="post-name">익명의 사용자</div>
							</div>
							<div className="post-message">예시 인용된 트윗</div>
							{props.context && <div className="context-flag">맥락 추가됨</div>}
						</div>
					</div>

					<div className="post-date">2022년 12월 30일 02:19 AM</div>
					{/* <div
						className="post-responses"
						onClick={() => {
							openDashBoard();
						}}>
						반응 모아보기
						<i className="fa-solid fa-arrow-right"></i>
					</div> */}
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
							10
						</div>
						<div className="quote interaction-button">
							<div className="icon">
								<i className="fa-solid fa-quote-left"></i>
							</div>
							1,000
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
			<div id="reply">
				<div id="compose-profile"></div>

				<textarea placeholder="답글을 적어 주세요"></textarea>
				<div id="compose-button" onClick={() => {}}>
					답글 달기
				</div>
			</div>
			{/* <div id="replies">
				<Post data={data}></Post>
			</div> */}

			{dashboardState && <Dashboard setState={setDashboardState} />}
		</main>
	);
};

export default QuotePostView;
