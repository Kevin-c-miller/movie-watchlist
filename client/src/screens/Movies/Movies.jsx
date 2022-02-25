import { Link } from 'react-router-dom';
import './Movies.css';

export default function Movies(props) {
  const { currentUser, movies, setSearchValue } = props;

  return (
    <div className="movies-page">
      <h2>Search and find movies here!</h2>
      {/* add form to add movie not found */}
      {/* search bar */}
      <div className="col col-sm-4 search">
        <input
          className="form-control"
          placeholder="Type to search.."
          value={props.value}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <div className="all-movies">
        {movies.map((movie, index) => (
          <div className="image-container" key={index}>
            <Link to="/movie-info">
              <img src={movie?.Poster} alt={movie?.Title} />
            </Link>
            <div className="overlay" key={index}>
              <h6>{movie?.Title}</h6>
              <h6>Year: {movie?.Year}</h6>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
