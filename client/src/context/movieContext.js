import { createContext, useState, useEffect } from 'react';
import {
  getTopRatedMovies,
  getPopularMovies,
  searchMovie,
  getSimilarMovies,
  getMovieDBDetails,
  getSteamingProviders,
  getMovieTrailer,
} from '../services/apiConfig/theMovieDb';

// set to variable
const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [movie, setMovie] = useState({});
  const [streaming, setStreaming] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [stars, setStars] = useState([]);
  const [director, setDirector] = useState([]);

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

  // movie details from theMovieDB api
  const fetchDBMovieDetails = async (movie_id) => {
    const movieInfo = await getMovieDBDetails(movie_id);
    setMovie(movieInfo);
  };

  // get streaming providers
  const fetchStreamingProviders = async (movie_id) => {
    const streamingProvider = await getSteamingProviders(movie_id);
    setStreaming(streamingProvider);
  };

  // get similar movies
  const fetchSimilarMovies = async (movie_id) => {
    const similarFilms = await getSimilarMovies(movie_id);
    setSimilarMovies(similarFilms);
  };

  // get movie trailer
  const fetchMovieTrailer = async (movie_id) => {
    const movieTrailers = await getMovieTrailer(movie_id);

    const movieTrailer = movieTrailers?.find((trailer) =>
      trailer.name.includes('Trailer')
    );

    setTrailers(movieTrailer);
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  //  set movies state based on user search
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
    <MovieContext.Provider
      value={{
        movies,
        searchValue,
        setSearchValue,
        movie,
        streaming,
        director,
        stars,
        trailers,
        similarMovies,
        setStars,
        setDirector,
        fetchDBMovieDetails,
        fetchMovieTrailer,
        fetchStreamingProviders,
        fetchSimilarMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
