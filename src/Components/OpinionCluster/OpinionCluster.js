const OpinionCluster = (props) => {
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
		<div className="opinion-cluster">
			<div className="cluster-content">
				<div className="cluster-argument">Argument</div>
				<div className="cluster-sentiment" style={{ backgroundColor: sentiment.color }}>
					{sentiment.name}
				</div>
			</div>
			<div
				className="button viewmore-button"
				onClick={() => {
					props.setCurrentCluster(props.data);
					props.setClusterView(true);
				}}>
				<i className="fa-solid fa-chevron-right"></i>
			</div>
		</div>
	);
};

export default OpinionCluster;
