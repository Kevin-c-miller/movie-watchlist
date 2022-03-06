import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Streaming from './Streaming';
import CastAndCrew from './CastAndCrew';
import './DBMovieDetails.css';

export default function DBMovieDetails(props) {
  const {
    dbMovie,
    fetchDBMovieDetails,
    streaming,
    fetchStreamingProviders,
    fetchMovieCredits,
    credits,
  } = props;

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    fetchDBMovieDetails(id);
    fetchStreamingProviders(id);
    fetchMovieCredits(id);
  }, []);
  console.log(dbMovie, streaming);
  console.log(credits);

  // currency format
  const currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  return (
    <div className="movieDetails">
      <h2 className="movieTitle">{dbMovie.title}</h2>
      <div className="movieDetailsBody">
        <div className="movieDetailsCard">
          {/* TODO: turn this card into its own component */}
          <Card style={{ width: '30rem' }} className="movie-details-card">
            <Card.Img
              variant="top"
              src={`https://image.tmdb.org/t/p/original${dbMovie?.poster_path}`}
              alt={dbMovie?.title}
              style={{
                height: '600px',
                width: '29.5rem',
                borderRadius: '35px',
                border: '5px solid #000',
              }}
            />
            <Card.Body>
              <Card.Title>
                <h2>
                  <b>{dbMovie.title}</b>
                </h2>
              </Card.Title>
              <Card.Text>
                <i>"{dbMovie?.tagline}"</i>
                {dbMovie?.release_date}
                {/* <b> {dbMovie?.director}</b> */}
                <br />
                <b> {dbMovie?.runtime} min.</b>
                <br />
                {/* <b>Budget: </b> {currencyFormat(dbMovie?.budget)} */}
                <br />
                {/* <b>Revenue:</b> {currencyFormat(dbMovie?.revenue)} */}
                <br />
                <b>Genre:</b>{' '}
                {dbMovie?.genres?.map((genre) => (
                  <span key={genre?.id}>
                    {genre?.name}
                    <br />
                  </span>
                ))}
                <br />
                <br />
                <b> Synopsis:</b> {dbMovie?.overview}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="movieDetailsOther">
          <Streaming streaming={streaming} />
          <CastAndCrew credits={credits} />
        </div>
      </div>
      {/* TODO: add similar movies api call data here */}
    </div>
  );
}
