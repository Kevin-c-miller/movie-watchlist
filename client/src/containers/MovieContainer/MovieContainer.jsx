import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { createMovie, getUserMovies } from '../../services/apiConfig/movies';
import {
  getMovieList,
  searchMovie,
  getMovie,
} from '../../services/apiConfig/omdb';
import {
  getMovieDBDetails,
  getSteamingProviders,
  getMovieCredits,
} from '../../services/apiConfig/theMovieDb';
import Movies from '../../screens/Movies/Movies';
import MovieDetails from '../../screens/MovieDetail/MovieDetails';
import AllMovies from '../../screens/TheMovieDB/AllMovies';
import DBMovieDetails from '../../screens/TheMovieDB/DBMovieDetails';

export default function MovieContainer(props) {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [movie, setMovie] = useState({});
  const [userMovies, setUserMovies] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [dbMovie, setDbMovie] = useState({});
  const [streaming, setStreaming] = useState({});
  const [movieCredits, setMovieCredits] = useState({});

  const navigate = useNavigate();
  const { id } = useParams();

  // get movies from omdb api
  const getMovieRequest = async () => {
    const movies = await getMovieList();
    setMovies(movies.Search);
  };

  // get single movie based on a user clicking on a movie
  const fetchMovie = async (title) => {
    const selectedMovie = await getMovie(title);
    setMovie(selectedMovie);
  };

  //  get user movies list
  const fetchUserMovieList = async () => {
    const userMovieList = await getUserMovies(props.currentUser?.id);
    setUserMovies(userMovieList);
  };

  // add movie to a user movie watchlist
  const addMovieToWatchList = async (user_id, movieData) => {
    await createMovie(user_id, movieData);
    setToggle((prevToggle) => !prevToggle);
    navigate(`/users/${id}/movies`);
  };

  // movie details from theMovieDB api
  const fetchDBMovieDetails = async (movie_id) => {
    const movieInfo = await getMovieDBDetails(movie_id);
    setDbMovie(movieInfo);
  };

  // get streaming providers
  const fetchStreamingProviders = async (movie_id) => {
    const streamingProvider = await getSteamingProviders(movie_id);
    setStreaming(streamingProvider);
  };

  // get movie credits
  const fetchMovieCredits = async (movie_id) => {
    const credits = await getMovieCredits(movie_id);
    setMovieCredits(credits);
  };

  // render movies on page load
  useEffect(() => {
    getMovieRequest();
    fetchUserMovieList();
    // fetchMovieCredits(496243);
    // eslint-disable-next-line
  }, []);

  // render movies by user search
  useEffect(() => {
    const movieSearch = async () => {
      const res = await searchMovie(searchValue);

      if (res.Search) {
        setMovies(res.Search);
      }
    };
    movieSearch();
  }, [searchValue]);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Movies
              movies={movies}
              currentUser={props.currentUser}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
          }
        />
        <Route
          path="/:title"
          element={
            <MovieDetails
              currentUser={props.currentUser}
              movie={movie}
              addMovieToWatchList={addMovieToWatchList}
              userMovies={userMovies}
              fetchMovie={fetchMovie}
            />
          }
        />
        <Route path="/all-movies" element={<AllMovies />} />
        <Route
          path="/all-movies/:id"
          element={
            <DBMovieDetails
              dbMovie={dbMovie}
              fetchDBMovieDetails={fetchDBMovieDetails}
              streaming={streaming}
              fetchStreamingProviders={fetchStreamingProviders}
              fetchMovieCredits={fetchMovieCredits}
              credits={movieCredits}
            />
          }
        />
      </Routes>
    </div>
  );
}
