import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Movies/Movies.css';

export default function UserMovieList(props) {
  const { fetchUserMovies, currentUser, userMovies } = props;

  useEffect(() => {
    fetchUserMovies(currentUser?.id);
  }, []);

  return (
    <div>
      <h2>Username's movie list</h2>
      <div className="all-movies">
        {/* if usermovies not empty */}
        {userMovies.map((movie, index) => (
          <div className="image-container" key={index}>
            <Link
              to={`/user/${currentUser?.id}/movies/${movie.id}`}
              // onClick={() => fetch movie}
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
