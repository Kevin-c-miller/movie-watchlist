import { Link } from 'react-router-dom';
import { useContext } from 'react';
import MovieContext from '../../../context/movieContext';

export default function SimilarMovies() {
  const { similarMovies } = useContext(MovieContext);
  console.log(similarMovies);
  return (
    <>
      <h4 className="similarHeader">Similar Movies</h4>
      <div className="similar-movies">
        {similarMovies?.map((movie) => (
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
    </>
  );
}
