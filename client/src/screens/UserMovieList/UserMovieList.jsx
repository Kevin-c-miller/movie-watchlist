import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { X } from '../../assets/index.js';
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

  // const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    fetchUserMovieList(currentUser?.id);
  }, []);

  return (
    <div className="user-movie-list">
      <h2>{currentUser?.username}'s movie list</h2>

      <div className="all-movies">
        {userMovies.map((movie, index) => (
          <div className="movies-image-container" key={index}>
            <Link
              to={`/users/${currentUser?.id}/movies/${movie.id}`}
              onClick={() =>
                fetchSelectedMovie(`${currentUser?.id}, ${movie.id}`)
              }
            >
              <img
                src={movie?.poster}
                alt={movie?.title}
                className="movie-page-img"
              />

              <div className="overlay" key={index}>
                <h6>Year: {movie?.release_year}</h6>
                <h6>{movie?.title}</h6>
                <img src={X} alt="x icon" />
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* add watch as a checkbox and add to db */}
    </div>
  );
}
