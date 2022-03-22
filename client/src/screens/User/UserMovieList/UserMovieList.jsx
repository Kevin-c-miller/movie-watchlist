import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// import '../Movies/Movies.css';
// import './UserMovies.css';

export default function UserMovieList(props) {
  const { fetchUserMovieList, currentUser, userMovies } = props;
  console.log(currentUser?.id);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (currentUser?.id) {
      fetchUserMovieList(currentUser?.id);
    }
  }, [currentUser?.id]);

  return (
    <div className="user-movie-list">
      <h2>{currentUser?.username}'s movie list</h2>

      <div className="all-movies">
        {userMovies.map((movie) => (
          <div className="movies-image-container" key={movie?.id}>
            <Link to={`/users/${currentUser?.id}/movies/${movie?.id}`}>
              <img
                src={movie?.poster}
                alt={movie?.title}
                className="movie-page-img"
              />

              <div className="overlay" key={movie?.id}>
                <h6 className="overlay-text">Year: {movie?.release_year}</h6>
                <h6 className="overlay-text">{movie?.title}</h6>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* add watched as a checkbox and add to db */}
    </div>
  );
}