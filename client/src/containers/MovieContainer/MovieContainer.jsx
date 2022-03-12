import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { createMovie, getUserMovies } from '../../services/apiConfig/movies';
import {
  getMovieList,
  // searchMovie,
  getMovie,
} from '../../services/apiConfig/omdb';
import {
  getMovieDBDetails,
  getSteamingProviders,
  getMovieCredits,
  getSimilarMovies,
  getMovieTrailer,
} from '../../services/apiConfig/theMovieDb';
import Movies from '../../screens/Movies/Movies';
import MovieDetails from '../../screens/MovieDetail/MovieDetails';
import AllMovies from '../../screens/TheMovieDB/AllMovies';
import DBMovieDetails from '../../screens/TheMovieDB/DBMovieDetails';

export default function MovieContainer(props) {
  const [movie, setMovie] = useState({});
  const [userMovies, setUserMovies] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [dbMovie, setDbMovie] = useState({});
  const [streaming, setStreaming] = useState({});
  const [similarMovies, setSimilarMovies] = useState({});
  const [trailers, setTrailers] = useState({});
  const [stars, setStars] = useState([]);
  const [director, setDirector] = useState([]);

  const navigate = useNavigate();
  const { id } = useParams();

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
    const movieCredits = await getMovieCredits(movie_id);

    const directorCredits = movieCredits.crew.find(
      ({ job }) => job === 'Director'
    );
    setDirector(directorCredits);

    const actors = movieCredits.cast.slice(0, 7);
    setStars(actors);
  };

  // get similar movies
  const fetchSimilarMovies = async (movie_id) => {
    const similarFilms = await getSimilarMovies(movie_id);
    setSimilarMovies(similarFilms);
  };

  // get movie trailer
  const fetchMovieTrailer = async (movie_id) => {
    const movieTrailers = await getMovieTrailer(movie_id);

    const movieTrailer = movieTrailers?.filter(
      (trailer) =>
        trailer.name === 'Official Trailer' ||
        trailer.name === 'Official Teaser'
    );
    setTrailers(movieTrailer);
  };

  // render movies on page load
  useEffect(() => {
    let didCancel = false;
    if (!didCancel) {
      fetchUserMovieList();
    }
    return () => {
      didCancel = true;
    };

    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <Movies
              // movies={movies}
              currentUser={props.currentUser}
            />
          }
        />
        {/* <Route
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
        /> */}
        <Route path="/all-movies" element={<AllMovies />} />
        <Route
          path="/all-movies/:id"
          element={
            <DBMovieDetails
              currentUser={props.currentUser}
              dbMovie={dbMovie}
              fetchDBMovieDetails={fetchDBMovieDetails}
              streaming={streaming}
              fetchStreamingProviders={fetchStreamingProviders}
              fetchMovieCredits={fetchMovieCredits}
              director={director}
              stars={stars}
              similarMovies={similarMovies}
              fetchSimilarMovies={fetchSimilarMovies}
              trailers={trailers}
              fetchMovieTrailer={fetchMovieTrailer}
              addMovieToWatchList={addMovieToWatchList}
            />
          }
        />
      </Routes>
    </div>
  );
}
