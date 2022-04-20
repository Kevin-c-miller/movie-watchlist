import { createContext, useState } from 'react';
import {
  getUserMovies,
  getOneMovie,
  deleteMovie,
} from '../services/apiConfig/movies';

const UserMovieContext = createContext();

export const UserMovieProvider = ({ children }) => {
  const [userMovies, setUserMovies] = useState([]);
  const [userMovie, setUserMovie] = useState({});
  //   const [trailers, setTrailers] = useState([]);
  //   const [stars, setStars] = useState([]);
  //   const [director, setDirector] = useState([]);
  // const [streaming, setStreaming] = useState({})

  // get all user movies from db
  const fetchUserMovies = async (user_id) => {
    try {
      const movies = await getUserMovies(user_id);
      setUserMovies(movies);
    } catch (error) {
      console.error(error);
    }
  };

  //  get one user movie from db
  const fetchUserMovie = async (user_id, movie_id) => {
    try {
      const movie = await getOneMovie(user_id, movie_id);
      setUserMovie(movie);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserMovieContext.Provider
      value={{
        userMovies,
        userMovie,
        fetchUserMovies,
        fetchUserMovie,
      }}
    >
      {children}
    </UserMovieContext.Provider>
  );
};
export default UserMovieContext;
