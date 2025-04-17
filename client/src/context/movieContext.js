import { createContext, useState, useEffect } from 'react';
import {
  getTopRatedMovies,
  getPopularMovies,
  searchMovie,
  getSimilarMovies,
  getMovieDBDetails,
  getSteamingProviders,
  getMovieTrailer,
  getNowPlayingMovies,
  getUpcomingMovies,
  getPopularTvShows,
  getTrendingTvShows,
  getTvShowVideos,
  getShowDetails,
  getTvShowStreaming,
  getSimilarTvShows,
  getTvCredits,
  searchTvShow,
} from '../services/apiConfig/theMovieDb';

// set to variable
const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [popMovies, setPopMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [userSearch, setUserSearch] = useState([]);
  const [movie, setMovie] = useState({});
  const [streaming, setStreaming] = useState({});
  const [similarMovies, setSimilarMovies] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [stars, setStars] = useState([]);
  const [director, setDirector] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpComing] = useState([]);
  const [showDetails, setShowDetails] = useState({});
  const [topTvShows, setTopTvShows] = useState([]);
  const [trendingTvShows, setTrendingTvShows] = useState([]);
  const [showTrailers, setShowTrailers] = useState([]);
  const [tvStreamingOptions, setTvSteaming] = useState([]);
  const [similarTvShows, setSimilarShows] = useState([]);
  const [tvCredits, setTvCredits] = useState([]);

  //  top rated movies via imdb (not updated daily)
  const fetchMovies = async () => {
    try {
      const resTopMovies = await getTopRatedMovies();
      const resPopMovies = await getPopularMovies();

      setTopMovies(resTopMovies);
      setPopMovies(resPopMovies);
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

  // Now playing novies
  const nowPlayingMovies = async () => {
    const currentlyPlaying = await getNowPlayingMovies();
    setNowPlaying(currentlyPlaying);
  };

  //  upcoming movies
  const upcomingMovies = async () => {
    const comingSoon = await getUpcomingMovies();
    setUpComing(comingSoon);
  };

  // popular tv shows
  const fetchPopularTvShows = async () => {
    try {
      const popTvShows = await getPopularTvShows();
      setTopTvShows(popTvShows);
    } catch (error) {
      console.error(error);
    }
  };

  // trending tv shows
  const fetchTendingTvShows = async () => {
    try {
      const trendingTv = await getTrendingTvShows();
      setTrendingTvShows(trendingTv);
    } catch (error) {
      console.error(error);
    }
  };

  // get Show details
  const fetchTvShowDetails = async (show_id) => {
    const showInfo = await getShowDetails(show_id);
    setShowDetails(showInfo);
  };

  // tv show trailers
  const fetchTvShowTrailers = async (showId) => {
    try {
      const results = await getTvShowVideos(showId);
      const trailers = results.find((result) => result?.type === 'Trailer');

      setShowTrailers(trailers);
    } catch (error) {
      console.error(error);
    }
  };

  // tv streaming
  const fetchTvStreaming = async (showId) => {
    try {
      const results = await getTvShowStreaming(showId);
      setTvSteaming(results.results.US);
    } catch (error) {
      console.error(error);
    }
  };

  // similar TV series
  const fetchSimilarTvShows = async (showId) => {
    try {
      const results = await getSimilarTvShows(showId);

      setSimilarShows(results);
    } catch (error) {
      console.error(error);
    }
  };

  // tv credits
  const fetchTvCredits = async (showId) => {
    try {
      const results = await getTvCredits(showId);
      setTvCredits(results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchMovies();
    nowPlayingMovies();
    upcomingMovies();
    fetchPopularTvShows();
    fetchTendingTvShows();
  }, []);

  //  set movies state based on user search
  useEffect(() => {
    const userSearch = async () => {
      try {
        const searchedMovies = await searchMovie(searchValue);
        const searchedTvShow = await searchTvShow(searchValue);
        setUserSearch([...searchedMovies, ...searchedTvShow]);
      } catch (error) {
        console.error(error);
      }
    };
    userSearch();
  }, [searchValue]);

  return (
    <MovieContext.Provider
      value={{
        topMovies,
        popMovies,
        searchValue,
        setSearchValue,
        userSearch,
        movie,
        streaming,
        director,
        stars,
        trailers,
        similarMovies,
        nowPlaying,
        upcoming,
        topTvShows,
        trendingTvShows,
        showTrailers,
        showDetails,
        tvStreamingOptions,
        similarTvShows,
        tvCredits,
        setStars,
        setDirector,
        fetchDBMovieDetails,
        fetchMovieTrailer,
        fetchStreamingProviders,
        fetchSimilarMovies,
        fetchTvShowTrailers,
        fetchTvShowDetails,
        fetchTvStreaming,
        fetchSimilarTvShows,
        fetchTvCredits,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export default MovieContext;
