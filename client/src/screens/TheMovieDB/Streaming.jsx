export default function Streaming(props) {
  const { streaming } = props;
  console.log(streaming);
  return (
    <div className="streaming">
      <h5 className="streamAvailability">Streaming Availabilty (U.S.)</h5>

      <h6>Streaming Service</h6>
      {streaming?.flatrate ? (
        <div className="streamingOptions">
          {streaming?.flatrate?.map((option) => (
            <>
              <img
                key={option?.id}
                className="streamingIcons"
                src={`https://image.tmdb.org/t/p/w45${option?.logo_path}`}
                alt={`${option?.provider_name} logo`}
              />
            </>
          ))}
        </div>
      ) : (
        <i>No Results Available</i>
      )}

      <h6>Rent</h6>
      {streaming?.rent ? (
        <div className="streamingOptions">
          {streaming?.rent?.map((option) => (
            <>
              <img
                key={option?.provider_id}
                className="streamingIcons"
                src={`https://image.tmdb.org/t/p/w45${option?.logo_path}`}
                alt={`${option?.provider_name} logo`}
              />
            </>
          ))}
        </div>
      ) : (
        <i>No Results Available</i>
      )}
    </div>
  );
}
