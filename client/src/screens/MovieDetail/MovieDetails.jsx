import React from 'react';
import './MovieDetails.css';

export default function MovieDetails(props) {
  const { movie } = props;
  console.log(movie);
  return (
    <div className="movie-details">
      <h2>{movie.Title}</h2>
      <div className="movie-poster">
        <img src={movie.Poster} alt={movie.Title} />
      </div>
      <h4>Director: {movie.Director}</h4>
      <h5>Starring: {movie.Actors}</h5>
      <h6>
        <b>Rated:</b> {movie.Rated}
      </h6>
      <h6>
        <b>Released:</b> {movie.Released}
      </h6>
      <h6>
        <b>Runtime: </b>
        {movie.Runtime}
      </h6>
      <h6>
        <b>Genre:</b> {movie.Genre}
      </h6>
      <h6>
        <b>Box Office:</b> {movie.BoxOffice}
      </h6>
      <div className="plot">
        <p>
          <b>Plot:</b> {movie.Plot}
        </p>
      </div>
      <h6>
        <b>Written By:</b> {movie.Writer}
      </h6>
      <h6>
        <b>Awards:</b> {movie.Awards}
      </h6>

      <button>Add to watch list</button>
    </div>
  );
}
