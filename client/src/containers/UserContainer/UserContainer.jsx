import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import UserMovieList from '../../screens/UserMovieList/UserMovieList';
import {
  getUserMovies,
  createMovie,
  updateMovie,
  deleteMovie,
} from '../../services/apiConfig/movies';

export default function UserContainer(props) {
  const [userMovies, setUserMovies] = useState([]);

  // Get User Movies
  const fetchUserMovieList = async (user_id) => {
    const userList = await getUserMovies(user_id);
    console.log(userList);
    setUserMovies(userList);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/:id/movies"
          element={
            <UserMovieList
              fetchUserMovies={fetchUserMovieList}
              currentUser={props.currentUser}
              userMovies={userMovies}
            />
          }
        />
      </Routes>
    </div>
  );
}
