import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../Movies/Movies.css';
import './UserMovies.css';

export default function UserMovieList(props) {
  const {
    fetchUserMovieList,
    currentUser,
    userMovies,
    fetchSelectedMovie,
    toggle,
  } = props;
  console.log(currentUser?.id);

  useEffect(() => {
    if (currentUser?.id) {
      fetchUserMovieList(currentUser?.id);
    }
  }, [currentUser?.id]);

  return (
    <div className="user-movie-list">
      <h2>{currentUser?.username}'s movie list</h2>

      <div className="all-movies">
        {userMovies.map((movie, index) => (
          <div className="movies-image-container" key={index}>
            <Link
              to={`/users/${currentUser?.id}/movies/${movie.id}`}
              onClick={() => fetchSelectedMovie(currentUser?.id, movie.id)}
            >
              <img
                src={movie?.poster}
                alt={movie?.title}
                className="movie-page-img"
              />

              <div className="overlay" key={index}>
                <h6 className="overlay-text">Year: {movie?.release_year}</h6>
                <h6 className="overlay-text">{movie?.title}</h6>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* add watch as a checkbox and add to db */}
    </div>
  );
}
