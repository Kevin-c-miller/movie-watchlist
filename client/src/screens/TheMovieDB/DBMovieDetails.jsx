import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Streaming from './Streaming';
// import CastAndCrew from './CastAndCrew';
import SimilarMovies from './SimilarMovies';
import ReactPlayer from 'react-player';
import './DBMovieDetails.css';

export default function DBMovieDetails(props) {
  const {
    dbMovie,
    fetchDBMovieDetails,
    streaming,
    fetchStreamingProviders,
    fetchMovieCredits,
    director,
    stars,
    similarMovies,
    fetchSimilarMovies,
    trailers,
    fetchMovieTrailer,
  } = props;

  const { id } = useParams();
  const navigate = useNavigate();

  console.log(trailers);
  console.log(streaming);
  console.log(dbMovie);
  console.log(similarMovies);

  // currency format for budget/revenue
  // const currencyFormat = (num) => {
  //   return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  // };

  useEffect(() => {
    try {
      fetchDBMovieDetails(id);
      fetchMovieTrailer(id);
      fetchStreamingProviders(id);
      fetchMovieCredits(id);
      fetchSimilarMovies(id);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

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
                  <b>Released: </b>
                  {dbMovie?.release_date}
                  <br />
                  <b> {dbMovie?.runtime} min.</b>
                  {dbMovie?.budget > 0 && (
                    <>
                      <br />
                      <br />
                      <span>
                        <b>Budget: </b> $ {dbMovie?.budget}
                        {/* {currencyFormat(dbMovie?.budget)} */}
                      </span>
                    </>
                  )}
                  <br />
                  {dbMovie?.revenue > 0 && (
                    <>
                      <span>
                        <b>Revenue: </b> $ {dbMovie?.revenue}
                        {/* {currencyFormat(dbMovie?.revenue)} */}
                      </span>
                      <br />
                      <br />
                    </>
                  )}
                  <b>Genre:</b>{' '}
                  {dbMovie?.genres?.map((genre) => (
                    <span key={genre?.id}> {genre?.name},</span>
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
                    <i>{actor?.character}</i>
                    {/* <img
                      className="actorHeadShot"
                      src={`https://image.tmdb.org/t/p/w500/${actor?.profile_path}`}
                      alt={actor?.original_name}
                    /> */}
                  </div>
                ))}
              </div>
            </div>
            <div className="movieTrailer">
              <h5>
                <b>Trailer</b>
              </h5>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailers[0]?.key}`}
                controls={true}
              />
            </div>
          </div>
        </div>
        {/* <SimilarMovies similarMovies={similarMovies} /> */}
        {/* <h4 className="similarHeader">Similar Movies</h4>
        <div className="similar-movies">
          {similarMovies?.map((movie) => (
            <div className="movies-image-container" key={movie?.id}>
              <Link to={`/movies/all-movies/${movie?.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                  alt={movie?.title}
                  className="movie-page-img"
                />

                <div className="overlay" key={movie?.id}>
                  <h6 className="overlay-text">Year: {movie?.release_date}</h6>
                  <h6 className="overlay-text">{movie?.title}</h6>
                </div>
              </Link>
            </div>
          ))}
        </div> */}
      </div>
      {/* )} */}
    </>
  );
}
