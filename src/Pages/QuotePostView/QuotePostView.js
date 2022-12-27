import "./QuotePostView.scss";
import Post from "../../Components/Post/Post";
import QuotePost from "../../Components/QuotePost/QuotePost";
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
						<div className="post-name">{data.author_name}</div>
						<div className="post-username">{data.author_id}</div>
					</div>
				</div>
				<div className="post-content">
					<div className="post-message">
						I suppose if you've lived all your life in a supportive family this is the perspective
						that you get. I understand where they're coming from, honestly. But that doesn't mean
						that this isn't a prilvilege.
					</div>
					{/* <div className="post-flag">Point Refuted</div> */}
					<QuotePost data={anon_data}></QuotePost>
					<div className="post-date">November 16, 2022 02:19 AM</div>
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
			<div id="replies">
				<Post data={data}></Post>
			</div>

			{dashboardState && <Dashboard setState={setDashboardState} />}
		</main>
	);
};

export default QuotePostView;
