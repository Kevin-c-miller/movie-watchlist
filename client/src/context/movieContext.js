import { createContext, useState, useEffect } from 'react';
import {
  getTopRatedMovies,
  getPopularMovies,
  searchMovie,
} from '../services/apiConfig/theMovieDb';

// set to variable
const MovieContext = createContext();

// need a provider
export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  //  top rated movies via imdb (not updated daily)
  const fetchMovies = async () => {
    try {
      const topMovies = await getTopRatedMovies();
      const popMovies = await getPopularMovies();
      setMovies([...topMovies, ...popMovies]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    const movieSearch = async () => {
      try {
        const searchedMovies = await searchMovie(searchValue);
        setMovies(searchedMovies);
      } catch (error) {
        console.error(error);
      }
    };
    movieSearch();
  }, [searchValue]);

  return (
    <MovieContext.Provider value={{ movies, searchValue, setSearchValue }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
