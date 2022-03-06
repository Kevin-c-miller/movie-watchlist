import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTopRatedMovies } from '../../services/apiConfig/theMovieDb';

export default function AllMovies() {
  const [movieDBMovies, setMovieDBMovies] = useState([]);

  useEffect(() => {
    const fetchTopRated = async () => {
      const list = await getTopRatedMovies();

      setMovieDBMovies(list);
    };
    fetchTopRated();
  }, []);
  console.log(movieDBMovies);

  return (
    <div style={{ minHeight: '100vh' }}>
      <h1> MovieDB Movies - testing</h1>

      <div className="all-movies">
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
