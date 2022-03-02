import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { createMovie, getUserMovies } from '../../services/apiConfig/movies';
import {
  getMovieList,
  searchMovie,
  getMovie,
} from '../../services/apiConfig/omdb';
import Movies from '../../screens/Movies/Movies';
import MovieDetails from '../../screens/MovieDetail/MovieDetails';

export default function MovieContainer(props) {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [movie, setMovie] = useState({});
  const [userMovies, setUserMovies] = useState([]);
  const [toggle, setToggle] = useState(false);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [hideButton, setHideButton] = useState(false);

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
    const newMovie = await createMovie(user_id, movieData);
    setToggle((prevToggle) => !prevToggle);
    navigate(`/users/${id}/movies`);
  };

  // render movies on page load
  useEffect(() => {
    getMovieRequest();
    fetchUserMovieList();
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

  // // show next page of movie results
  // const nextPage = (page) => {
  //   let next = page + 1;
  //   getMovieRequest(next);
  //   if (!next) {
  //     // setHideButton(true);
  //   }
  // };

  // // show previous page of movie results
  // const previousPage = (page) => {
  //   let previous = page--;
  //   if (page <= 1) {
  //     // setHideButton(true);
  //   } else {
  //     getMovieRequest(previous);
  //     // setHideButton(false);
  //   }
  // };

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
      </Routes>
    </div>
  );
}
