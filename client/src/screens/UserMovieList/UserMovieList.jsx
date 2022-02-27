import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import '../Movies/Movies.css';

export default function UserMovieList(props) {
  const {
    fetchUserMovieList,
    currentUser,
    userMovies,
    fetchSelectedMovie,
    toggle,
  } = props;
  console.log(currentUser?.id);

  const { id } = useParams();
  console.log(id);
  useEffect(() => {
    fetchUserMovieList(id);
  }, [toggle]);

  return (
    <div>
      <h2>{currentUser?.username}'s movie list</h2>

      <div className="all-movies">
        {userMovies.map((movie, index) => (
          <div className="image-container" key={index}>
            <h5>id:{movie.id}</h5>
            <Link
              to={`/users/${currentUser?.id}/movies/${movie.id}`}
              onClick={() =>
                fetchSelectedMovie(`${currentUser?.id}, ${movie.id}`)
              }
            >
              <img src={movie?.poster} alt={movie?.title} />

              <div className="overlay" key={index}>
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
