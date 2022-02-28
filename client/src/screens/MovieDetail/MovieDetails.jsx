import { useParams } from 'react-router-dom';
import './MovieDetails.css';

export default function MovieDetails(props) {
  const { movie } = props;

  console.log(props.currentUser?.id);

  return (
    <div className="movie-details">
      <div className="movie-card">
        <div className="info-section">
          <div className="movie-header">
            <h1>{movie.Title}</h1>
            <h4>
              {movie.Year}, {movie.Director}
            </h4>
            <h6 className="minutes">{movie.Runtime}</h6>
            <h5 className="movie-details-h5">Starring: {movie.Actors}</h5>

            <h6 className="type">{movie.Genre}</h6>
            <h6 className="type">
              <b>Rated:</b> {movie.Rated}
            </h6>
            <h6 className="type">
              <b>Box Office:</b> {movie.BoxOffice}
            </h6>
            <h6 className="type">
              <b>Written By:</b> {movie.Writer}
            </h6>
            <h6 className="type">
              <b>Awards:</b> {movie.Awards}
            </h6>
          </div>
          <div className="movie-desc">
            <h5>Synopsis:</h5>
            <p className="text"> {movie.Plot}</p>
          </div>
        </div>

        <div className="blur-back">
          <img src={movie.Poster} alt={movie.Title} className="movie-img" />
        </div>
      </div>
      <div className="add-movie-btn">
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
  );
}
