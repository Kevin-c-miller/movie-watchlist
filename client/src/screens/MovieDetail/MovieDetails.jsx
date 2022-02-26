import { useState } from 'react';
import './MovieDetails.css';

export default function MovieDetails(props) {
  const [addMovie, setAddMovie] = useState({
    title: '',
    poster: '',
    rating: '',
    synopsis: '',
    director: '',
    starring: '',
    release_year: 0,
    runtime: '',
  });
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
      {/* map thru ratings so app doesnt break */}
      {/* <h6>
        <b>{movie.Ratings[0].Source}</b>: {movie.Ratings[0].Value}
        <br /> <b>{movie.Ratings[1].Source}</b>: {movie.Ratings[1].Value}
      </h6> */}

      <button
        onClick={() => {
          // e.preventDefault();
          const addedMovie = {
            title: movie.Title,
            poster: movie.Poster,
            rating: movie.Rated,
            synopsis: movie.Plot,
            director: movie.Director,
            starring: movie.Actors,
            release_year: movie.Released,
            runtime: movie.Runtime,
          };
          props.addMovieToWatchList(addedMovie);
        }}
      >
        Add Movie to watch list
      </button>
    </div>
  );
}
