import { Link } from 'react-router-dom';
import SearchBox from '../../components/SearchBox/SearchBox';
import './Movies.css';

export default function Movies(props) {
  const { currentUser, movies, setSearchValue, searchValue } = props;

  return (
    <div className="movies-page">
      <h2>Search and find movies here!</h2>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />

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
