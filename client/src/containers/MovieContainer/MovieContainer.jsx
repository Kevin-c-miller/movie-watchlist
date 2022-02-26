import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
} from '../../services/apiConfig/movies';
import {
  getMovieList,
  searchMovie,
  getMovie,
} from '../../services/apiConfig/omdb';
import Movies from '../../screens/Movies/Movies';
import MovieDetails from '../../screens/MovieDetail/MovieDetails';
import UserMovieList from '../../screens/UserMovieList/UserMovieList';

export default function MovieContainer(props) {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [movie, setMovie] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [hideButton, setHideButton] = useState(false);

  const navigate = useNavigate();
  const { username } = useParams();

  // get movies from omdb api
  const getMovieRequest = async () => {
    const movies = await getMovieList();
    console.log(movies);
    setMovies(movies.Search);
  };

  // get single movie based on a user clicking on a movie
  const fetchMovie = async (movieTitle) => {
    const selectedMovie = await getMovie(movieTitle);
    console.log(selectedMovie);
    setMovie(selectedMovie);
  };

  // add movie to a user movie watchlist
  const addMovieToWatchList = async (movieData) => {
    await createMovie(movieData);
    navigate(`/users/${username}/movielist`);
  };

  // render movies on page load
  useEffect(() => {
    getMovieRequest(currentPage);
  }, [currentPage]);

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

  // show next page of movie results
  const nextPage = (page) => {
    let next = page + 1;
    getMovieRequest(next);
    if (!next) {
      setHideButton(true);
    }
  };

  // show previous page of movie results
  const previousPage = (page) => {
    let previous = page--;
    if (page <= 1) {
      setHideButton(true);
    } else {
      getMovieRequest(previous);
      setHideButton(false);
    }
  };

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
              fetchMovie={fetchMovie}
              previousPage={previousPage}
              nextPage={nextPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          }
        />
        <Route
          path="/:title"
          element={
            <MovieDetails
              movie={movie}
              addMovieToWatchList={addMovieToWatchList}
            />
          }
        />
        <Route path="/users/:username/movielist" element={<UserMovieList />} />
      </Routes>
    </div>
  );
}
