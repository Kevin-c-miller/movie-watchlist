import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
  getAllMovies,
  createMovie,
  updateMovie,
  deleteMovie,
} from '../../services/apiConfig/movies';
import { getMovieList, searchMovie } from '../../services/apiConfig/omdb';
import Movies from '../../screens/Movies/Movies';

export default function MovieContainer(props) {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const getMovieRequest = async () => {
    const movies = await getMovieList();
    console.log(movies);
    setMovies(movies.Search);
  };

  useEffect(() => {
    getMovieRequest();
  }, []);

  useEffect(() => {
    const movieSearch = async () => {
      const res = await searchMovie(searchValue);
      console.log(res.Search);
      if (res.Search) {
        setMovies(res.Search);
      }
      console.log(movies);
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
      </Routes>
    </div>
  );
}
