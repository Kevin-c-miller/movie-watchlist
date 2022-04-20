import { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import UserMovieContext from '../../../context/userMovieContext';
import '../../TheMovieDB/AllMovies/AllMovies.css';
 

export default function UserMovieList({ fetchUserMovieList, currentUser }) {
  const { userMovies, fetchUserMovies } = useContext(UserMovieContext);
  const { id } = useParams();

  useEffect(() => {
    // checking for token for current user to display their movie list
    if (id) {
      fetchUserMovies(id);
    }
  }, [fetchUserMovies, id]);

  return (
    <div className="userMovies">
      <h2>{currentUser?.username}'s movie list</h2>

      <div className="user-movie-list">
        {userMovies.map((movie) => (
          <div className="movies-image-container" key={movie?.id}>
            <Link to={`/users/${id}/movies/${movie?.id}`}>
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
    </div>
  );
}
