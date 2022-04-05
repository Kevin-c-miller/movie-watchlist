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
import {
  getSteamingProviders,
  getMovieCredits,
  getMovieTrailer,
} from '../../services/apiConfig/theMovieDb';

export default function UserContainer(props) {
  const [userMovies, setUserMovies] = useState([]);
  const [userMovie, setUserMovie] = useState({});
  const [streaming, setStreaming] = useState({});
  const [trailers, setTrailers] = useState({});
  const [stars, setStars] = useState([]);
  const [director, setDirector] = useState([]);

  const navigate = useNavigate();

  // remove token from local storage
  const removeToken = () => {
    localStorage.removeItem('authToken');
  };

  // Get User Movies
  const fetchUserMovieList = async (user_id) => {
    const userList = await getUserMovies(user_id);
    setUserMovies(userList);
  };

  //  Get selected movie from user clicking on a movie
  const fetchSelectedMovie = async (user_id, movie_id) => {
    const selectedMovie = await getOneMovie(user_id, movie_id);
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
    await updateUser(user_id, updateData);

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

  // get streaming providers
  const fetchStreamingProviders = async (movie_id) => {
    const streamingProvider = await getSteamingProviders(movie_id);
    setStreaming(streamingProvider);
  };

  // get movie credits
  const fetchMovieCredits = async (movie_id) => {
    const movieCredits = await getMovieCredits(movie_id);

    const directorCredits = movieCredits.crew.find(
      ({ job }) => job === 'Director'
    );
    setDirector(directorCredits);

    const actors = movieCredits.cast.slice(0, 7);
    setStars(actors);
  };

  // get movie trailer
  const fetchMovieTrailer = async (movie_id) => {
    const movieTrailers = await getMovieTrailer(movie_id);

    const movieTrailer = movieTrailers?.filter((trailer) =>
      trailer.name.includes('Trailer')
    );
    setTrailers(movieTrailer);
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
          path="/:id/movies/:movie_id"
          element={
            <UserMovieDetails
              userMovie={userMovie}
              fetchSelectedMovie={fetchSelectedMovie}
              removeMovie={removeMovieFromList}
              currentUser={props.currentUser}
              streaming={streaming}
              fetchStreamingProviders={fetchStreamingProviders}
              fetchMovieCredits={fetchMovieCredits}
              director={director}
              stars={stars}
              trailers={trailers}
              fetchMovieTrailer={fetchMovieTrailer}
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
