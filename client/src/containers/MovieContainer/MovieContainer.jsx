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

  useEffect(() => {
    const getMovieRequest = async () => {
      const movies = await getMovieList();
      console.log(movies);
    };
    getMovieRequest();
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Movies currentUser={props.currentUser} />} />
      </Routes>
    </div>
  );
}
