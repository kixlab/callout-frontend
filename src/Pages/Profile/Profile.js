const Profile = (props) => {
	const returnToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth", // for smoothly scrolling
		});
	};

	return (
		<main id="profile">
			<div
				className="header"
				id="timeline-header"
				onClick={() => {
					returnToTop();
				}}>
				사용자 아이디
			</div>
			<div className="profile">
				<div id="profile-img"></div>
			</div>
		</main>
	);
};

export default Profile;
