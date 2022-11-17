import "./Dashboard.scss";
import OpinionCluster from "../OpinionCluster/OpinionCluster";
import OpinionPost from "../OpinionPost/OpinionPost";
import Post from "../Post/Post";
import { useState } from "react";

const Dashboard = (props) => {
	const [visibility, setVisibility] = useState(0);
	const [interaction, setInteraction] = useState(0);
	// 0 = everyone, 1 = only my followers, anything else = custom

	const [settingVisible, setSettingVisible] = useState(false);
	const [currentCluster, setCurrentCluster] = useState([]);
	const [clusterView, setClusterView] = useState(false);

	//Temporary
	const sentimentTypes = [
		{ name: "Overwhelmingly Opposing", color: "#f00" },
		{ name: "Generally Opposing", color: "rgb(235, 116, 116)" },
		{ name: "Moderately Opposing", color: "rgb(220, 142, 142)" },
		{ name: "Neutral", color: "rgb(104, 104, 211)" },
		{ name: "Moderately Supportive", color: "rgb(142, 220, 171)" },
		{ name: "Generally Supportive", color: "rgb(104, 211, 143)" },
		{ name: "Overwhemlingly Supportive", color: "#0f0" },
	];

	const sentiment = sentimentTypes[3];

	return (
		<div id="dashboard-wrapper">
			<div id="dashboard">
				<div
					id="close-button"
					className="button"
					onClick={() => {
						props.setState(false);
					}}>
					<i className="fa-solid fa-xmark"></i>
				</div>

				{clusterView ? (
					<div id="wrapper">
						<div
							className="button"
							onClick={() => {
								setClusterView(false);
							}}>
							<i className="fa-solid fa-arrow-left" style={{ marginRight: "8px" }}></i>Return to
							list
						</div>

						<div id="cluster-info">
							<div id="argument" className="title">
								Argument
							</div>
							<div className="cluster-sentiment" style={{ backgroundColor: sentiment.color }}>
								{sentiment.name}
							</div>
						</div>

						<div id="respond-button" className="button">
							Respond to Messages
							<i className="fa-solid fa-arrow-right" style={{ marginLeft: "8px" }}></i>
						</div>
						<div id="replies-wrapper">
							<Post
								data={{
									id: 1,
									author_name: "user1",
									author_id: "@username",
									content: "lorem ipsum dolor si amㄴet...",
									likes: 10,
								}}
							/>
							<Post
								data={{
									id: 1,
									author_name: "user1",
									author_id: "@username",
									content: "lorem ipsum dolor si amㄴet...",
									likes: 10,
								}}
							/>
						</div>
					</div>
				) : (
					<div id="wrapper">
						<div id="setting-wrapper">
							<div
								id="setting-button"
								className="button"
								onClick={() => {
									setSettingVisible(!settingVisible);
								}}>
								<i className="fa-solid fa-gear"></i>
								Manage Settings
							</div>
							{settingVisible && (
								<div id="setting-modal">
									<div className="info">
										<div className="title">Who can interact with this post?</div>
										<div className="subtitle">
											Choose who can see or interact with your profile based on this post.
										</div>
									</div>
									<div id="vis-setting">
										<div className="title">Visibility</div>
										<div>everyone</div>
										<div>Only your followers</div>
										<div>Custom</div>
									</div>
									<div id="inter-setting">
										<div className="title">Interaction</div>
										<div>everyone</div>
										<div>Only your followers</div>
										<div>Custom</div>
									</div>
									<div
										className="button"
										onClick={() => {
											setVisibility(0);
											setInteraction(0);
											setSettingVisible(false);
										}}>
										Confirm
									</div>
								</div>
							)}
						</div>
						<OpinionCluster
							setCurrentCluster={setCurrentCluster}
							setClusterView={setClusterView}
							data={"data"}
						/>
					</div>
				)}
			</div>
		</div>
	);
};

export default Dashboard;
