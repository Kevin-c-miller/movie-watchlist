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
  // createMovie,
  // updateMovie,
  deleteMovie,
} from '../../services/apiConfig/movies';

export default function UserContainer(props) {
  const [userMovies, setUserMovies] = useState([]);
  const [userMovie, setUserMovie] = useState({});

  const navigate = useNavigate();

  // remove token from local storage
  const removeToken = () => {
    localStorage.removeItem('authToken');
  };

  // Get User Movies
  const fetchUserMovieList = async (user_id) => {
    const userList = await getUserMovies(user_id);
    console.log(userList);
    setUserMovies(userList);
  };

  //  Get selected movie from user clicking on a movie
  const fetchSelectedMovie = async (movie_id) => {
    const selectedMovie = await getOneMovie(props.currentUser?.id, movie_id);
    setUserMovie(selectedMovie);
  };

  //  Delete movie from user list
  const removeMovieFromList = async (user_id, movie_id) => {
    await deleteMovie(user_id, movie_id);

    toast.success('Movie was removed from your list');

    navigate(`/users/${props.currentUser?.id}/movies`);
  };

  // UpdateUser
  const editUser = async (user_id, updateData) => {
    const updatedUser = await updateUser(user_id, updateData);
    console.log(updatedUser);

    toast.success('User Information Updated');

    navigate(`/movies`);
  };

  // delete account
  const deleteAccount = async () => {
    await deleteUser(props.currentUser.id);

    removeToken();
    toast.success('User Deleted');

    setTimeout(() => {
      window.location.reload();
    }, 3000);
    navigate('/');
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
            />
          }
        />
        <Route
          path="/:id/movies/:id"
          element={
            <UserMovieDetails
              userMovie={userMovie}
              fetchSelectedMovie={fetchSelectedMovie}
              removeMovie={removeMovieFromList}
              currentUser={props.currentUser}
            />
          }
        />
        <Route
          path="/:id/"
          element={
            <UserAccount
              deleteAccount={deleteAccount}
              currentUser={props.currentUser}
            />
          }
        />
        <Route
          path="/:id/edit"
          element={
            <UpdateUserForm
              editUser={editUser}
              currentUser={props.currentUser}
            />
          }
        />
      </Routes>
    </div>
  );
}
