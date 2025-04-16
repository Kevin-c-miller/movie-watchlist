import { Link } from 'react-router-dom';
import { useContext } from 'react';
import MovieContext from '../../../context/movieContext';
import { formatDate } from '../../../utils/format-date';

export default function SimilarMovies() {
  const { similarMovies } = useContext(MovieContext);

  return (
    <>
      <h4 className="similarHeader">Similar Movies</h4>
      <div className="similar-movies">
        {similarMovies?.map((movie) => {
          const { id, release_date, title, poster_path } = movie;
          const formattedDate = formatDate(release_date);

          return (
            <div className="movies-image-container" key={id}>
              <Link to={`/movies/${id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  alt={title}
                  className="movie-page-img"
                />

                <div className="overlay" key={id}>
                  <h6 className="overlay-text">{formattedDate}</h6>
                  <h6 className="overlay-text">{title}</h6>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
