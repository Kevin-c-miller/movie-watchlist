import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  getTopRatedMovies,
  getPopularMovies,
} from '../../services/apiConfig/theMovieDb';

export default function AllMovies() {
  const [movieDBMovies, setMovieDBMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);

  //  top rated movies via imdb (not updated daily)
  const fetchTopRated = async () => {
    const list = await getTopRatedMovies();
    setMovieDBMovies(list);
  };

  // popular movies (updated daily)
  const fetchPopularMovies = async () => {
    const popMovies = await getPopularMovies();
    setPopularMovies(popMovies);
  };

  useEffect(() => {
    fetchTopRated();
    fetchPopularMovies();
  }, []);
  console.log(movieDBMovies);

  return (
    <div style={{ minHeight: '100vh' }}>
      <h1> MovieDB Movies - testing</h1>

      <div className="all-movies">
        {popularMovies.map((movie) => (
          <div className="movies-image-container" key={movie?.id}>
            <Link to={`/movies/all-movies/${movie?.id}`}>
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
        {movieDBMovies.map((movie) => (
          <div className="movies-image-container" key={movie?.id}>
            <Link to={`/movies/all-movies/${movie?.id}`}>
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
  );
}
