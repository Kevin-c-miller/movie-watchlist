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
  } = props;

  const { id } = useParams();
  const navigate = useNavigate();

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
        <button
          onClick={() => navigate('/movies/all-movies')}
          className="back-to-movies"
        >
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
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${trailers[0]?.key}`}
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
