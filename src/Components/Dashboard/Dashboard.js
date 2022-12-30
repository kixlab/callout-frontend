import "./Dashboard.scss";
import OpinionCluster from "../OpinionCluster/OpinionCluster";
import OpinionPost from "../OpinionPost/OpinionPost";
import Post from "../Post/Post";
import { useState } from "react";

const Dashboard = (props) => {
	const [visibility, setVisibility] = useState(0);
	const [profile, setProfile] = useState(0);
	const [interaction, setInteraction] = useState(0);
	// 0 = everyone, 1 = only my followers, anything else = custom

	const [settingVisible, setSettingVisible] = useState(false);
	const [currentCluster, setCurrentCluster] = useState([]);
	const [clusterView, setClusterView] = useState(false);

	const [responseView, setResponseView] = useState(false);
	const [flagsView, setFlagsView] = useState(false);
	const [reportView, setReportView] = useState(false);
	const [blockView, setBlockView] = useState(false);

	const data = props.data;

	const sentimentTypes = [
		{ name: "압도적으로 부정적", color: "#f00" },
		{ name: "전반적으로 부정적", color: "rgb(235, 116, 116)" },
		{ name: "일부 부정적", color: "rgb(220, 142, 142)" },
		{ name: "중립", color: "rgb(104, 104, 211)" },
		{ name: "일부 긍정적", color: "rgb(142, 220, 171)" },
		{ name: "전반적으로 긍정적", color: "rgb(104, 211, 143)" },
		{ name: "압도적으로 긍정적", color: "#0f0" },
	];

	const sentiment = sentimentTypes[5];

	const [responses, setResponses] = useState([]);
	// let responses = data.map((item) => {
	// 	if (item.cluster_id[0] == currentCluster.id || item.cluster_id[1] == currentCluster.id) {
	// 		return <Post data={item} key={item.id} />;
	// 	}
	// });

	return (
		<div id="dashboard-wrapper">
			<div id="dashboard">
				<div
					className=" close-button button"
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
							<i className="fa-solid fa-arrow-left" style={{ marginRight: "8px" }}></i>목록으로
							돌아가기
						</div>

						<div id="cluster-info">
							<div id="argument" className="title">
								{currentCluster.arg}
							</div>
							<div
								className="cluster-sentiment"
								style={{ backgroundColor: currentCluster.sentiment.color }}>
								{currentCluster.sentiment.name}
							</div>
						</div>
						<div style={{ marginLeft: "16px" }}>이 분류의 트윗들에 대하여 일괄적으로:</div>
						<div id="button-area" style={{ margin: "0 16px  16px" }}>
							<div
								id="respond-button"
								className="button"
								onClick={() => {
									setResponseView(true);
									setFlagsView(false);
								}}>
								답변 남기기
								<i className="fa-solid fa-reply" style={{ marginLeft: "8px" }}></i>
							</div>
							<div
								id="flag-button"
								className="button"
								onClick={() => {
									setResponseView(false);
									setFlagsView(true);
								}}>
								태그 달기
								<i className="fa-solid fa-tag" style={{ marginLeft: "8px" }}></i>
							</div>
							<div
								id="report-button"
								className="button"
								onClick={() => {
									setReportView(true);
								}}>
								신고하기
								<i className="fa-solid fa-flag" style={{ marginLeft: "8px" }}></i>
							</div>
							<div
								id="block-button"
								className="button"
								onClick={() => {
									setBlockView(true);
								}}>
								차단하기
								<i className="fa-solid fa-ban" style={{ marginLeft: "8px" }}></i>
							</div>
						</div>

						{responseView && (
							<div id="response-modal">
								<div
									className="close-button button"
									onClick={() => {
										setResponseView(false);
									}}>
									<i className="fa-solid fa-xmark"></i>
								</div>
								<div id="reply">
									<div id="compose-profile"></div>

									<div>
										<textarea placeholder="답글을 적어 주세요" id="reply-input"></textarea>
										<div className="info">
											‼️작성하신 답글은 이 카테고리에 속한 모든 글에 전송됩니다
										</div>
									</div>
									<div id="compose-button">답글 달기</div>
								</div>
							</div>
						)}

						{flagsView && (
							<div id="flag-modal" className="modal">
								<div
									className="close-button button"
									onClick={() => {
										setFlagsView(false);
									}}>
									<i className="fa-solid fa-xmark"></i>
								</div>
								<div id="flag">
									<div
										className="flag-item"
										onClick={() => {
											props.setContext(!props.context);
										}}>
										<div className="flag-text" id="context">
											맥락 추가됨 {props.context && <i className="fa-solid fa-check"></i>}
										</div>
										<div className="flag-explanation">
											내 게시글을 보는 사람들에게 타래 등 추가적인 맥락을 확인하도록 알립니다.
										</div>
									</div>
									<div
										className="flag-item"
										onClick={() => {
											if (props.rebuttal.indexOf(currentCluster.id) === -1) {
												props.setRebuttal((rebuttal) => [...rebuttal, currentCluster.id]);
											} else {
												props.setRebuttal(
													props.rebuttal.filter((item) => {
														return item != currentCluster.id;
													})
												);
											}
										}}>
										<div className="flag-text" id="refuted">
											반박된 주장{" "}
											{props.rebuttal.indexOf(currentCluster.id) >= 0 && (
												<i className="fa-solid fa-check"></i>
											)}
										</div>
										<div className="flag-explanation">
											아래 답글들의 주장에 대해 내가 답변한 내용이 있음을 알립니다.
										</div>
									</div>
								</div>
							</div>
						)}

						{reportView && (
							<div id="report-modal" className="overlay-modal">
								<div className="popup">
									<div id="modal-text">{responses.length}개의 트윗을 신고하시겠어요?</div>
									<div id="modal-button-wrapper">
										<div
											className="modal-button yes"
											onClick={() => {
												setReportView(false);
											}}>
											예
										</div>
										<div
											className="modal-button no"
											onClick={() => {
												setReportView(false);
											}}>
											아니요
										</div>
									</div>
								</div>
							</div>
						)}

						{blockView && (
							<div id="block-modal" className="overlay-modal">
								<div className="popup">
									<div id="modal-text">{responses.length}개의 계정을 차단하시겠어요?</div>
									<div id="modal-button-wrapper">
										<div
											className="modal-button yes"
											onClick={() => {
												setBlockView(false);
											}}>
											예
										</div>
										<div
											className="modal-button no"
											onClick={() => {
												setBlockView(false);
											}}>
											아니요
										</div>
									</div>
								</div>
							</div>
						)}
						<div id="replies-wrapper">{responses}</div>
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
								공개 설정 바꾸기
							</div>
							{settingVisible && (
								<div id="setting-modal">
									<div className="info">
										<div className="title">누가 이 트윗과 상호작용할 수 있나요?</div>
										<div className="subtitle">
											이 트윗, 그리고 여러분의 프로필과 <br />
											상호작용할 수 있는 사람을 설정하세요.
										</div>
									</div>
									<div id="vis-setting" className="setting-wrapper">
										<div className="title">트윗 공개 범위</div>
										<div className="setting-item" onClick={() => setVisibility(0)}>
											모든 사용자 {visibility == 0 && <i className="fa-solid fa-check"></i>}
										</div>
										<div className="setting-item" onClick={() => setVisibility(1)}>
											나를 팔로우하는 사람들
											{visibility == 1 && <i className="fa-solid fa-check"></i>}
										</div>
										<div className="setting-item">
											직접 설정하기.. {visibility >= 2 && <i className="fa-solid fa-check"></i>}
											<br />
											<input
												type="number"
												min="2"
												placeholder=""
												value={visibility}
												onChange={(e) => {
													if (e.target.value >= 2) {
														setVisibility(e.target.value);
													}
												}}
											/>
											단계까지
										</div>
									</div>

									<div id="prof-setting" className="setting-wrapper">
										<div className="title">Profile Visibility</div>
										<div className="setting-item" onClick={() => setProfile(0)}>
											모든 사용자
											{profile == 0 && <i className="fa-solid fa-check"></i>}
										</div>
										<div className="setting-item" onClick={() => setProfile(1)}>
											나를 팔로우하는 사람들 {profile == 1 && <i className="fa-solid fa-check"></i>}
										</div>
										<div className="setting-item">
											직접 설정하기.. {profile >= 2 && <i className="fa-solid fa-check"></i>}
											<br />
											<input
												type="number"
												min="2"
												placeholder=""
												value={profile}
												onChange={(e) => {
													if (e.target.value >= 2) {
														setProfile(e.target.value);
													}
												}}
											/>
											단계까지
										</div>
									</div>
									<div id="inter-setting" className="setting-wrapper">
										<div className="title">Interaction</div>
										<div className="setting-item" onClick={() => setInteraction(0)}>
											모든 사용자 {interaction == 0 && <i className="fa-solid fa-check"></i>}
										</div>
										<div className="setting-item" onClick={() => setInteraction(1)}>
											나를 팔로우하는 사람들
											{interaction == 1 && <i className="fa-solid fa-check"></i>}
										</div>
										<div className="setting-item">
											직접 설정하기..{interaction >= 2 && <i className="fa-solid fa-check"></i>}
											<br />
											<input
												type="number"
												min="2"
												placeholder=""
												value={interaction}
												onChange={(e) => {
													if (e.target.value >= 2) {
														setInteraction(e.target.value);
													}
												}}
											/>{" "}
											단계까지
										</div>
									</div>
									<div
										className="button"
										onClick={() => {
											setSettingVisible(false);
										}}>
										변경 내용 저장
									</div>
								</div>
							)}
						</div>
						{props.condition !== 0 && (
							<div id="cluster-list">
								{props.condition === 2 && (
									<OpinionCluster
										setCurrentCluster={setCurrentCluster}
										setResponses={setResponses}
										data={data}
										setClusterView={setClusterView}
										postData={{
											id: 8,
											arg: "서울 사람 입장에서는 동의되는 의견",
											sentiment: sentimentTypes[6],
										}}
									/>
								)}
								<OpinionCluster
									setCurrentCluster={setCurrentCluster}
									setResponses={setResponses}
									data={data}
									setClusterView={setClusterView}
									postData={{
										id: 7,
										arg: "서울 상가의 획일화 및 노잼화",
										sentiment: sentimentTypes[5],
									}}
								/>
								<OpinionCluster
									setCurrentCluster={setCurrentCluster}
									setResponses={setResponses}
									data={data}
									setClusterView={setClusterView}
									postData={{
										id: 6,
										arg: "돈이 없으면 서울의 인프라를 활용할 수 없음",
										sentiment: sentimentTypes[5],
									}}
								/>

								<OpinionCluster
									setCurrentCluster={setCurrentCluster}
									setResponses={setResponses}
									data={data}
									setClusterView={setClusterView}
									postData={{
										id: 4,
										arg: "서울 및 교외 지역 추천",
										sentiment: sentimentTypes[3],
									}}
								/>

								{props.condition === 2 && (
									<OpinionCluster
										setCurrentCluster={setCurrentCluster}
										setResponses={setResponses}
										data={data}
										setClusterView={setClusterView}
										postData={{
											id: 5,
											arg: "서울이 아니라 그 어느 곳이어도 비슷",
											sentiment: sentimentTypes[2],
										}}
									/>
								)}
								<OpinionCluster
									setCurrentCluster={setCurrentCluster}
									setResponses={setResponses}
									data={data}
									setClusterView={setClusterView}
									postData={{
										id: 2,
										arg: "서울에도 충분히 할 것이 많다",
										sentiment: sentimentTypes[2],
									}}
								/>
								<OpinionCluster
									setCurrentCluster={setCurrentCluster}
									setResponses={setResponses}
									data={data}
									setClusterView={setClusterView}
									postData={{
										id: 3,
										arg: "지방 유흥 인프라와 서울의 비교",
										sentiment: sentimentTypes[1],
									}}
								/>
								{props.condition === 2 && (
									<OpinionCluster
										setCurrentCluster={setCurrentCluster}
										setResponses={setResponses}
										data={data}
										setClusterView={setClusterView}
										postData={{
											id: 1,
											arg: "서울에 컨텐츠가 없다는 주장은 배부른 고민",
											sentiment: sentimentTypes[0],
										}}
									/>
								)}
								{props.condition === 2 && (
									<OpinionCluster
										setCurrentCluster={setCurrentCluster}
										setResponses={setResponses}
										data={data}
										setClusterView={setClusterView}
										postData={{
											id: 9,
											arg: "기타 의견",
											sentiment: sentimentTypes[3],
										}}
									/>
								)}
							</div>
						)}
						{props.condition === 0 && (
							<div id="cluster-list">
								<OpinionCluster
									setCurrentCluster={setCurrentCluster}
									setResponses={setResponses}
									data={data}
									setClusterView={setClusterView}
									postData={{
										id: 1,
										arg: "기타 의견",
										sentiment: sentimentTypes[3],
									}}
								/>
							</div>
						)}
					</div>
				)}
			</div>
		</div>
	);
};

export default Dashboard;
