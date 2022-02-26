import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
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

  const getMovieRequest = async () => {
    const movies = await getMovieList();
    console.log(movies);
    setMovies(movies.Search);
  };

  const fetchMovie = async (movieTitle) => {
    const selectedMovie = await getMovie(movieTitle);
    console.log(selectedMovie);
    setMovie(selectedMovie);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

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
              fetchMovie={fetchMovie}
            />
          }
        />
        <Route path="/:title" element={<MovieDetails movie={movie} />} />
        <Route path="/users/:id/movielist" element={<UserMovieList />} />
      </Routes>
    </div>
  );
}
