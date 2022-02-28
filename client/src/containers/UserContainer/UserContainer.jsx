import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { deleteUser, updateUser } from '../../services/apiConfig/users';
import { toast } from 'react-toastify';
import UserMovieList from '../../screens/UserMovieList/UserMovieList';
import UserMovieDetails from '../../screens/UserMovieDetails/UserMovieDetails';
import UserAccount from '../../screens/UserAccount/UserAccount';
import UpdateUserForm from '../../components/UpdateUserForm/UpdateUserForm';
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
  const fetchSelectedMovie = async (user_id, movie_id) => {
    const selectedMovie = await getOneMovie(user_id, movie_id);
    console.log(selectedMovie);
    setUserMovie(selectedMovie);
  };

  //  Delete moovie from user list
  const removeMovieFromList = async (user_id, movie_id) => {
    const deletedMovie = await deleteMovie(user_id, movie_id);
    console.log(deletedMovie);
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
              fetchSelectedMovie={fetchSelectedMovie}
              toggle={toggle}
            />
          }
        />
        <Route
          path="/:id/movies/:id"
          element={<UserMovieDetails userMovie={userMovie} />}
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
