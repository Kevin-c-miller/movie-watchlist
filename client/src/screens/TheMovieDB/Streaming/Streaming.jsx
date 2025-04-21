export default function Streaming(props) {
	const { streaming } = props;
	const rentOrBuy = streaming.rent ? streaming.rent : streaming.buy;

	return (
		<div className="streaming">
			<h5 className="streamAvailability">Streaming Availabilty (U.S.)</h5>

			<h6>Streaming Service</h6>
			{streaming?.flatrate ? (
				<div className="streamingOptions">
					{streaming?.flatrate?.map((option, index) => (
						<img
							key={index}
							className="streamingIcons"
							src={`https://image.tmdb.org/t/p/w45${option?.logo_path}`}
							alt={`${option?.provider_name} logo`}
						/>
					))}
				</div>
			) : (
				<div className="streaming__no-results">
					<i>No Results Available</i>
				</div>
			)}

			<h6>Rent</h6>
			{rentOrBuy ? (
				<div className="streamingOptions">
					{rentOrBuy?.map((option, index) => (
						<img
							key={index}
							className="streamingIcons"
							src={`https://image.tmdb.org/t/p/w45${option?.logo_path}`}
							alt={`${option?.provider_name} logo`}
						/>
					))}
				</div>
			) : (
				<div className="streaming__no-results">
					<i>No Results Available</i>
				</div>
			)}
		</div>
	);
}
