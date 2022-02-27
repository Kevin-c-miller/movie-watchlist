import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Movies/Movies.css';

export default function UserMovieList(props) {
  const { fetchUserMovies, currentUser, userMovies, fetchSelectedMovie } =
    props;
  console.log(currentUser?.id);

  useEffect(() => {
    fetchUserMovies(currentUser?.id);
  }, []);

  return (
    <div>
      <h2>{currentUser?.username}'s movie list</h2>

      <div className="all-movies">
        {userMovies.map((movie) => (
          <div className="image-container">
            <h5>id:{movie.id}</h5>
            <Link
              to={`/users/${currentUser?.id}/movies/${movie.id}`}
              onClick={() =>
                fetchSelectedMovie(`${currentUser?.id}, ${movie.id}`)
              }
            >
              <img src={movie?.poster} alt={movie?.title} />

              <div className="overlay" key={movie?.id}>
                <h6>{movie?.title}</h6>
                <h6>Year: {movie?.release_year}</h6>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* add watch as a checkbox and add to db */}
    </div>
  );
}
