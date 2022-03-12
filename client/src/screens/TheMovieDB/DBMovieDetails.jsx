import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Streaming from './Streaming';
// import CastAndCrew from './CastAndCrew';
import SimilarMovies from './SimilarMovies';
import ReactPlayer from 'react-player';
import './DBMovieDetails.css';

export default function DBMovieDetails(props) {
  const [stars, setStars] = useState([]);
  const [director, setDirector] = useState([]);
  const [officialTrailer, setOfficialTrailer] = useState({});

  const {
    dbMovie,
    fetchDBMovieDetails,
    streaming,
    fetchStreamingProviders,
    fetchMovieCredits,
    movieCredits,
    similarMovies,
    fetchSimilarMovies,
    trailers,
    fetchMovieTrailer,
  } = props;

  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  const getOfficialTrailer = () => {
    const movieTrailer = trailers?.filter(
      (trailer) => trailer.name === 'Official Trailer'
    );
    setOfficialTrailer(movieTrailer);
  };

  console.log(officialTrailer);

  // currency format for budget/revenue
  const currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  //   grabbing director from api array
  const findDirector = () => {
    const directorCredits = movieCredits.crew.find(
      ({ job }) => job === 'Director'
    );
    setDirector(directorCredits);
  };

  //   grabbing cast from api array
  const movieCast = () => {
    const actors = movieCredits.cast.slice(0, 7);
    setStars(actors);
  };

  useEffect(
    () => {
      try {
        fetchDBMovieDetails(id);
        fetchStreamingProviders(id);
        fetchMovieCredits(id);
        fetchSimilarMovies(id);
        fetchMovieTrailer(id);
        getOfficialTrailer();
      } catch (error) {
        console.log(error);
      }
    },
    [
      // fetchDBMovieDetails,
      // fetchMovieCredits,
      // fetchSimilarMovies,
      // fetchStreamingProviders,
      // id,
    ]
  );

  useEffect(() => {
    try {
      movieCast();
      findDirector();
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(dbMovie, streaming);
  console.log(movieCredits, stars, director);
  // console.log(similarMovies);

  return (
    <>
      {/* {id && ( */}
      <div className="movieDetails">
        <button onClick={() => navigate('/movies/all-movies')}>
          Back to movie list
        </button>
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
                  <br />
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
                      <br />
                      {genre?.name}
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
            {/* <CastAndCrew movieCredits={movieCredits} /> */}
            <div className="castAndCrew">
              <h5 className="castHeader">Cast and Crew</h5>
              <div className="director">
                <h5>
                  <b>Directed By:</b> {director?.original_name}
                </h5>
              </div>
              <h5 className="actors-header">Starring</h5>
              <div className="actors">
                {stars.map((actor) => (
                  <div key={actor?.cast_id} className="actor-map">
                    <h6>{actor?.original_name}</h6>
                    <hp>
                      <i>{actor?.character}</i>
                    </hp>
                    <img
                      className="actorHeadShot"
                      src={`https://image.tmdb.org/t/p/w500/${actor?.profile_path}`}
                      alt={actor?.original_name}
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="movieTrailer">
              <h5>
                <b>Trailer</b>
              </h5>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${officialTrailer[0]?.key}`}
                controls={true}
              />
            </div>
          </div>
        </div>
        {/* <SimilarMovies similarMovies={similarMovies} /> */}
      </div>
      {/* )} */}
    </>
  );
}
