import React from 'react';
import { useParams } from 'react-router-dom';
import { X } from '../../assets/index.js';
import '../MovieDetail/MovieDetails.css';
import '../UserMovieList/UserMovies.css';

export default function UserMovieDetails(props) {
  const { userMovie, removeMovie, currentUser } = props;

  return (
    <div className="movie-details">
      <div className="movie-card">
        <div className="remove-movie">
          <img
            src={X}
            alt="x icon"
            onClick={() => removeMovie(currentUser?.id, userMovie?.id)}
          />
        </div>
        <div className="info-section">
          <div className="movie-header">
            <h1>{userMovie?.title}</h1>
            <h4>
              {userMovie?.release_year}, {userMovie?.director}
            </h4>
            <h6 className="minutes"> {userMovie?.runtime}</h6>
            <h5 className="movie-details-h5">
              Starring: {userMovie?.starring}
            </h5>

            {/* <h6 className="type">{userMovie.genre}</h6> */}
            <h6>
              <b>Rated:</b> {userMovie?.rating}
            </h6>
            {/* <h6>
              <b>Box Office:</b> {movie.BoxOffice}
            </h6> */}
            {/* <h6>
              <b>Written By:</b> {movie.Writer}
            </h6> */}
            {/* <h6>
              <b>Awards:</b> {movie.Awards}
            </h6> */}
          </div>
          <div className="movie-desc">
            <h5>Synopsis:</h5>
            <p className="text"> {userMovie?.synopsis}</p>
          </div>
        </div>

        <div className="blur-back">
          <img src={userMovie?.poster} alt={userMovie?.title} />
        </div>
      </div>
    </div>
  );
}
