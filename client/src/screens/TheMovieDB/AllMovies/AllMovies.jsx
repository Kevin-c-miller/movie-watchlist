import { useContext } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../../../components/SearchBox/SearchBox';
import MovieContext from '../../../context/movieContext';
import './AllMovies.css';

export default function AllMovies() {
  const { topMovies, popMovies, nowPlaying, searchedMovie } =
    useContext(MovieContext);

  return (
    <div className="allMoviesPage">
      <div className="search-container">
        <h2>Search and find movies here!</h2>
        <SearchBox />
      </div>

      <div className="all-movies">
        {searchedMovie !== '' && (
          <div className="searched-movies">
            <h4>Search Results</h4>
            <div className="row-posters">
              {searchedMovie.map((movie) => (
                <div className="movies-image-container" key={movie?.id}>
                  <Link to={`/movies/${movie?.id}`}>
                    <img
                      src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                      alt={movie?.title}
                      className="movie-page-img"
                    />
                    <div className="overlay" key={movie?.id}>
                      <h6 className="overlay-text">
                        Year: {movie?.release_date}
                      </h6>
                      <h6 className="overlay-text">{movie?.title}</h6>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}

        <h4>Now Playing</h4>
        <div className="row-posters">
          {nowPlaying.map((movie) => (
            <div className="movies-image-container" key={movie?.id}>
              <Link to={`/movies/${movie?.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                  alt={movie?.title}
                  className="movie-page-img"
                />
                <div className="overlay" key={movie?.id}>
                  <h6 className="overlay-text">Year: {movie?.release_date}</h6>
                  <h6 className="overlay-text">{movie?.title}</h6>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <h4>Top Movies</h4>
        <div className="row-posters">
          {topMovies.map((movie) => (
            <div className="movies-image-container" key={movie?.id}>
              <Link to={`/movies/${movie?.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                  alt={movie?.title}
                  className="movie-page-img"
                />
                <div className="overlay" key={movie?.id}>
                  <h6 className="overlay-text">Year: {movie?.release_date}</h6>
                  <h6 className="overlay-text">{movie?.title}</h6>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <h4>Popular Movies</h4>
        <div className="row-posters">
          {popMovies.map((movie) => (
            <div className="movies-image-container" key={movie?.id}>
              <Link to={`/movies/${movie?.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                  alt={movie?.title}
                  className="movie-page-img"
                />
                <div className="overlay" key={movie?.id}>
                  <h6 className="overlay-text">Year: {movie?.release_date}</h6>
                  <h6 className="overlay-text">{movie?.title}</h6>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
