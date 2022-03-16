import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Streaming from './Streaming';
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
    addMovieToWatchList,
    currentUser,
  } = props;

  const { id } = useParams();
  const navigate = useNavigate();

  // currency format for budget/revenue
  // const currencyFormat = (num) => {
  //   return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  // };

  const moviePoster = `https://image.tmdb.org/t/p/original${dbMovie?.poster_path}`;

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
        <div className="movieDetailsBtns">
          <button
            onClick={() => navigate('/movies/all-movies')}
            className="back-to-movies"
          >
            Back to movie list
          </button>

          <button
            className="add-to-watchlist"
            onClick={() => {
              const addedMovie = {
                title: dbMovie.title,
                poster: moviePoster,
                rating: dbMovie.Rated,
                synopsis: dbMovie.overview,
                director: dbMovie.director,
                starring: dbMovie.stars,
                release_year: parseInt(dbMovie.release_date),
                runtime: dbMovie.runtime,
                user_id: props.currentUser.id,
              };
              addMovieToWatchList(currentUser?.id, addedMovie);
            }}
          >
            Add to watchlist
          </button>
        </div>
        <h2 className="movieTitle">{dbMovie.title}</h2>
        <div className="movieDetailsBody">
          <div className="movieDetailsCard">
            {/* TODO: break these sections down into their own component */}
            <Card style={{ width: '30rem' }} className="movie-details-card">
              <Card.Img
                variant="top"
                src={moviePoster}
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
                      </span>
                    </>
                  )}
                  <br />
                  {dbMovie?.revenue > 0 && (
                    <>
                      <span>
                        <b>Revenue: </b> $ {dbMovie?.revenue}
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
            <div className="castAndCrew">
              <div className="director">
                <h5> Directed By: </h5> <h6>{director?.original_name}</h6>
              </div>

              <div className="actors">
                <h5 className="actors-header">Starring: </h5>
                {stars.map((actor) => (
                  <div key={actor?.cast_id} className="actor-map">
                    <h6>{actor?.original_name}, </h6>
                  </div>
                ))}
              </div>
            </div>
            <div className="movieTrailer">
              <h5>
                <b>Trailer</b>
              </h5>
              <div className="player-wrapper">
                <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${trailers[0]?.key}`}
                  controls={true}
                  className="react-player"
                  width="100%"
                  height="100%"
                />
              </div>
            </div>
          </div>
        </div>
        {/* <SimilarMovies similarMovies={similarMovies} /> */}
      </div>
    </>
  );
}
