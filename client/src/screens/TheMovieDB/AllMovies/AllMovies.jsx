import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  getTopRatedMovies,
  getPopularMovies,
  searchMovie,
} from '../../../services/apiConfig/theMovieDb';
import SearchBox from '../../../components/SearchBox/SearchBox';
import './AllMovies.css';

export default function AllMovies(props) {
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

  // render movies by user search
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
    <div className="allMoviesPage">
      <h2>Search and find movies here!</h2>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />

      <div className="all-movies">
        {movies.map((movie) => (
          <div className="movies-image-container" key={movie?.id}>
            <Link to={`/movies/${movie?.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                alt={movie?.title}
                className="movie-page-img"
              />
              <div className="overlay" key={movie?.id}>
                <h6 className="overlay-text">Year: {movie?.release_date}</h6>
                <h6 className="overlay-text">{movie?.title}</h6>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
