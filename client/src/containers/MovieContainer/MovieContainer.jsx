import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { createMovie, getUserMovies } from '../../services/apiConfig/movies';

import AllMovies from '../../screens/TheMovieDB/AllMovies/AllMovies';
import DBMovieDetails from '../../screens/TheMovieDB/MovieDetails/DBMovieDetails';
import { MovieProvider } from '../../context/movieContext';

export default function MovieContainer({ currentUser }) {
  const [userMovies, setUserMovies] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

  //  get user movies list
  const fetchUserMovieList = async () => {
    const userMovieList = await getUserMovies(currentUser?.id);
    setUserMovies(userMovieList);
  };

  // add movie to a user movie watchlist
  const addMovieToWatchList = async (user_id, movieData) => {
    await createMovie(user_id, movieData);

    navigate(`/users/${id}/movies`);
  };

  // render movies on page load
  useEffect(() => {
    let didCancel = false;
    if (!didCancel) {
      fetchUserMovieList();
    }
    return () => {
      didCancel = true;
    };

    // eslint-disable-next-line
  }, []);

  return (
    <MovieProvider>
      <Routes>
        <Route path="/" element={<AllMovies />} />
        <Route
          path="/:id"
          element={
            <DBMovieDetails
              currentUser={currentUser}
              addMovieToWatchList={addMovieToWatchList}
            />
          }
        />
      </Routes>
    </MovieProvider>
  );
}
