import { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import {
  getTopRatedMovies,
  getPopularMovies,
  searchMovie,
} from '../../../services/apiConfig/theMovieDb';
import SearchBox from '../../../components/SearchBox/SearchBox';
import MovieContext from '../../../context/movieContext';
import './AllMovies.css';

export default function AllMovies() {
  // useContext
  const { movies } = useContext(MovieContext);

  return (
    <div className="allMoviesPage">
      <h2>Search and find movies here!</h2>
      <SearchBox />

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
