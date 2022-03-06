import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Card } from 'react-bootstrap';
import './MovieDetails.css';

export default function MovieDetails(props) {
  const { movie, fetchMovie } = props;
  const { title } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // getting movie that was selected
    fetchMovie(title);
  }, []);

  if (!title) {
    return (
      <div>
        <img
          src="https://media.giphy.com/media/N256GFy1u6M6Y/giphy.gif"
          alt="loading"
        />
      </div>
    );
  }

  return (
    <>
      {title && (
        <div className="movie-details">
          <div className="back-btn">
            <button
              className="movie-back-btn"
              onClick={() => navigate(`/movies/`)}
            >
              Back to movie list
            </button>
          </div>
          <>
            <Card style={{ width: '30rem' }} className="movie-details-card">
              <Card.Img
                variant="top"
                src={movie.Poster}
                alt={movie.Title}
                style={{
                  height: '600px',
                  width: '29.5',
                  borderRadius: '35px',
                  border: '5px solid #000',
                }}
              />
              <Card.Body>
                <Card.Title>
                  <h2>
                    <b>{movie.Title} </b>
                  </h2>
                </Card.Title>
                <Card.Text>
                  {movie.Year}, <b> {movie.Director}</b>
                  <br />
                  <b> {movie.Runtime}</b>
                  <br />
                  <b>Starring: </b> {movie.Actors}
                  <br />
                  <b>Genre: </b> {movie.Genre}
                  <br />
                  <b>Rated:</b> {movie.Rated}
                  <br />
                  <b>Box Office:</b> {movie.BoxOffice}
                  <br />
                  <b>Written By:</b> {movie.Writer}
                  <br />
                  <b>Awards:</b> {movie.Awards}
                  <br />
                  <b> Synopsis:</b> {movie.Plot}
                </Card.Text>
              </Card.Body>
            </Card>
          </>
          <div className="add-movie-btn-div">
            {props.currentUser && (
              <button
                className="add-movie-btn"
                onClick={() => {
                  const addedMovie = {
                    title: movie.Title,
                    poster: movie.Poster,
                    rating: movie.Rated,
                    synopsis: movie.Plot,
                    director: movie.Director,
                    starring: movie.Actors,
                    release_year: parseInt(movie.Year),
                    runtime: movie.Runtime,
                    user_id: props.currentUser.id,
                  };
                  props.addMovieToWatchList(props.currentUser.id, addedMovie);
                }}
              >
                Add Movie to watch list
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

// <div className="movie-card">
//             <div className="info-section">

//             <div className="blur-back">
//               <img src={movie.Poster} alt={movie.Title} className="movie-img" />
//             </div>
//           </div>
