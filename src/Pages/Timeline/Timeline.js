import "./Timeline.scss";
import Post from "../../Components/Post/Post";

const Timeline = (props) => {
	let posts = [
		{
			id: 1,
			author_name: "user1",
			author_id: "@username",
			content: "lorem ipsum dolor si amet...",
			likes: 10,
		},
	];

	const returnToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // for smoothly scrolling
		});
	};

	return (
		<main id="timeline">
			<div
				className="header"
				id="timeline-header"
				onClick={() => {
					returnToTop();
				}}>
				최신 글 보기
			</div>
			<div id="compose-tweet">
				<div id="compose-profile"></div>
				<div id="compose-area">
					<textarea placeholder="무슨 일이 일어나고 있나요?"></textarea>
					<div id="compose-button" onClick={() => {}}>
						올리기
					</div>
				</div>
			</div>
			<div id="post-timeline">
				{posts.map((item) => {
					return <Post data={item} key={item.id} />;
				})}
			</div>
		</main>
	);
};

export default Timeline;
