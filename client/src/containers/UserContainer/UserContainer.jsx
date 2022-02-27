import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import UserMovieList from '../../screens/UserMovieList/UserMovieList';
import UserMovieDetails from '../../screens/UserMovieDetails/UserMovieDetails';
import {
  getUserMovies,
  getOneMovie,
  createMovie,
  updateMovie,
  deleteMovie,
} from '../../services/apiConfig/movies';

export default function UserContainer(props) {
  const [userMovies, setUserMovies] = useState([]);
  const [userMovie, setUserMovie] = useState({});
  const [toggle, setToggle] = useState(false);

  // Get User Movies
  const fetchUserMovieList = async (user_id) => {
    const userList = await getUserMovies(user_id);
    console.log(userList);
    setUserMovies(userList);
  };

  //  Get selected movie from user clicking on a movie
  const fetchSelectedMovie = async (user_id, movie_id) => {
    const selectedMovie = await getOneMovie(user_id, movie_id);
    console.log(selectedMovie);
    setUserMovie(selectedMovie);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/:id/movies"
          element={
            <UserMovieList
              fetchUserMovieList={fetchUserMovieList}
              currentUser={props.currentUser}
              userMovies={userMovies}
              fetchSelectedMovie={fetchSelectedMovie}
              toggle={toggle}
            />
          }
        />
        <Route
          path="/:id/movies/:id"
          element={<UserMovieDetails userMovie={userMovie} />}
        />
      </Routes>
    </div>
  );
}
