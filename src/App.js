import logo from "./logo.svg";
import "./App.scss";
import Timeline from "./Pages/Timeline/Timeline";
import Profile from "./Pages/Profile/Profile";
import PostView from "./Pages/PostView/PostView";
import QuotePost from "./Components/QuotePost/QuotePost";
import QuotePostView from "./Pages/QuotePostView/QuotePostView";

// Routing
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<div id="sidebar">
				<div id="navigation">
					<div className="nav-button home-button">
						<div className="icon">😎</div>
					</div>
					<div className="nav-button">
						<div className="icon">
							<i className="fa-solid fa-house-chimney"></i>
						</div>
						<div className="text">홈</div>
					</div>
					<div className="nav-button">
						<div className="icon">
							<i className="fa-solid fa-bell"></i>
						</div>
						<div className="text">알림</div>
					</div>
					<div className="nav-button">
						<div className="icon">
							<i className="fa-solid fa-user"></i>
						</div>
						<div className="text">프로필</div>
					</div>
					<div className="nav-button new">
						<div className="icon">
							<i className="fa-solid fa-plus"></i>
						</div>
						<div className="text">새 글</div>
					</div>
				</div>
			</div>
			<BrowserRouter>
				<Routes>
					{/* <Timeline></Timeline> */}
					{/* <Profile></Profile> */}
					{/* <PostView></PostView> */}
					<Route path="/:id" element={<PostView />} />
					{/* <QuotePostView></QuotePostView> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
