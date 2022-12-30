import "./App.scss";

import RePostView from "./Pages/PostView/PostView_reactive";
import PrePostView from "./Pages/PostView/PostView_preemptive";
import PostView_EX from "./Pages/PostView/PostView_Ex";

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
					<Route path="/cond_1" element={<RePostView />} />
					<Route path="/cond_2" element={<PrePostView />} />
					<Route path="/sample" element={<PostView_EX />} />
					{/* <QuotePostView></QuotePostView> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
