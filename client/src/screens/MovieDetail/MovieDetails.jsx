import { useParams } from 'react-router-dom';
import './MovieDetails.css';

export default function MovieDetails(props) {
  const { movie } = props;

  console.log(movie, props.currentUser?.id);

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

      {props.currentUser && (
        <button
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
  );
}
