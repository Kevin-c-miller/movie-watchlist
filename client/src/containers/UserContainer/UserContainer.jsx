import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { deleteUser, updateUser } from '../../services/apiConfig/users';
import { toast } from 'react-toastify';
import UserMovieList from '../../screens/User/UserMovieList/UserMovieList';
import UserMovieDetails from '../../screens/User/UserMovieDetails/UserMovieDetails';
import UserAccount from '../../screens/User/UserAccount/UserAccount';
import UpdateUserForm from '../../components/UpdateUserForm/UpdateUserForm';
import {
  getUserMovies,
  getOneMovie,
  deleteMovie,
} from '../../services/apiConfig/movies';
import { UserMovieProvider } from '../../context/userMovieContext';

export default function UserContainer({ currentUser }) {
  const [userMovies, setUserMovies] = useState([]);
  const [userMovie, setUserMovie] = useState({});

  const navigate = useNavigate();

  // remove token from local storage
  const removeToken = () => {
    localStorage.removeItem('authToken');
  };

  // Get User Movies
  // const fetchUserMovieList = async (user_id) => {
  //   const userList = await getUserMovies(user_id);
  //   setUserMovies(userList);
  // };

  //  Get selected movie from user clicking on a movie
  // const fetchSelectedMovie = async (user_id, movie_id) => {
  //   const selectedMovie = await getOneMovie(user_id, movie_id);
  //   setUserMovie(selectedMovie);
  // };

  //  Delete movie from user list
  const removeMovieFromList = async (user_id, movie_id) => {
    await deleteMovie(user_id, movie_id);

    toast.success('Movie was removed from your list');

    navigate(`/users/${currentUser?.id}/movies`);
  };

  // UpdateUser
  const editUser = async (user_id, updateData) => {
    await updateUser(user_id, updateData);

    toast.success('User Information Updated');

    navigate(`/movies`);
  };

  // delete account
  const deleteAccount = async () => {
    await deleteUser(currentUser.id);

    removeToken();
    toast.success('User Deleted');

    setTimeout(() => {
      window.location.reload();
    }, 3000);
    navigate('/');
  };

  return (
    <div>
      <UserMovieProvider>
        <Routes>
          <Route
            path="/:id/movies"
            element={
              <UserMovieList
                // fetchUserMovieList={fetchUserMovieList}
                currentUser={currentUser}
                userMovies={userMovies}
              />
            }
          />
          <Route
            path="/:id/movies/:movie_id"
            element={
              <UserMovieDetails
                userMovie={userMovie}
                // fetchSelectedMovie={fetchSelectedMovie}
                removeMovie={removeMovieFromList}
                currentUser={currentUser}
              />
            }
          />
          <Route
            path="/:id/"
            element={
              <UserAccount
                deleteAccount={deleteAccount}
                currentUser={currentUser}
              />
            }
          />
          <Route
            path="/:id/edit"
            element={
              <UpdateUserForm editUser={editUser} currentUser={currentUser} />
            }
          />
        </Routes>
      </UserMovieProvider>
    </div>
  );
}
