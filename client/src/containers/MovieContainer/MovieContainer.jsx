import { Routes, Route } from 'react-router-dom';
import AllMovies from '../../screens/TheMovieDB/AllMovies/AllMovies';
import DBMovieDetails from '../../screens/TheMovieDB/MovieDetails/DBMovieDetails';
import { MovieProvider } from '../../context/movieContext';
import { TVShowDetails } from '../../screens/TheMovieDB/TVShowDetails/tv-show-details';

export default function MovieContainer() {
  return (
    <MovieProvider>
      <Routes>
        <Route path="/" element={<AllMovies />} />
        <Route path="/tv/:id" element={<TVShowDetails />} />
        <Route path="/:id" element={<DBMovieDetails />} />
      </Routes>
    </MovieProvider>
  );
}
