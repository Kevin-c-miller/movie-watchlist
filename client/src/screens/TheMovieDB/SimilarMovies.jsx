import { Link } from 'react-router-dom';

export default function SimilarMovies(props) {
  const { similarMovies } = props;
  return (
    <>
      <h4 className="similarHeader">Similar Movies</h4>
      <div className="similar-movies">
        {similarMovies.map((movie) => (
          <div className="movies-image-container" key={movie?.id}>
            <Link to={`/movies/sll-movies/${movie?.id}`}>
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
