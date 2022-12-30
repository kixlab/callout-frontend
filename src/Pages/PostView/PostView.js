import "./Post.scss";
import Post from "../../Components/Post/Post";
import QuotePost from "../../Components/QuotePost/QuotePost";
import Dashboard from "../../Components/Dashboard/Dashboard";

import { useState } from "react";

const PostView = (props) => {
	// let data = props.data;

	const [dashboardState, setDashboardState] = useState(false);

	const [quotesView, setQuotesView] = useState(false);

	const [contextFlag, setContextFlag] = useState(false);
	const [rebuttalFlag, setRebuttalFlag] = useState([]);

	const [postData, setPostData] = useState({
		id: 1,
		author_name: "내 트위터 계정",
		author_id: "my_username",
		content:
			"진짜!!!!!! 요즘 밖에서할거너무없지않냐? \n신사 압구정 성수 홍대 강남 어딜 가도 걍 돈 쓰는 것밖에 없어서 서울이 넘 재미없어..",
		likes: 324,
		replies: require("../../Data/case1_replies.json"),
		quotes: require("../../Data/case1_qt_pre.json"),
		boosts: 851,
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

		area.value = "";
	};

	let replies = postData.replies.map((item) => {
		return <Post data={item} key={item.id}></Post>;
	});

	return (
		<main id="post-wrapper">
			{!quotesView && (
				<div>
					<div
						className="header"
						id="timeline-header"
						onClick={() => {
							returnToTop();
						}}>
						게시글
					</div>
					<div id="post">
						<div className="post-profile">
							<div className="post-profile-image"></div>
							<div className="post-name-wrapper">
								<div className="post-name">{postData.author_name}</div>
								<div className="post-username">@{postData.author_id}</div>
							</div>
						</div>
						<div className="post-content">
							<div className="post-message">{postData.content}</div>
							{contextFlag && <div className="post-flag">맥락 추가됨</div>}
							<div className="post-date">2022년 12월 30일 02:19 AM</div>
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
								<div
									className="quote interaction-button"
									onClick={() => {
										setQuotesView(true);
									}}>
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
					<div id="replies">{replies}</div>

					{dashboardState && (
						<Dashboard
							setState={setDashboardState}
							data={postData.quotes}
							setContext={setContextFlag}
							setRebuttal={setRebuttalFlag}
							rebuttal={rebuttalFlag}
							context={contextFlag}
						/>
					)}
				</div>
			)}
			{quotesView && (
				<div id="quotes-view">
					<div
						className="header"
						id="timeline-header"
						onClick={() => {
							setQuotesView(false);
						}}>
						<i className="fa-solid fa-arrow-left"></i> 인용한 게시글
					</div>
					<div id="quotes">
						{postData.quotes.map((item) => {
							let flag =
								rebuttalFlag.indexOf(item.cluster_id[0]) >= 0 ||
								rebuttalFlag.indexOf(item.cluster_id[1]) >= 0;
							return (
								<QuotePost
									data={item}
									key={item.id}
									quoted={postData}
									context={contextFlag}
									rebuttal={flag}
								/>
							);
						})}
					</div>
				</div>
			)}
		</main>
	);
};

export default PostView;
