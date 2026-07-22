import { Routes, Route } from 'react-router-dom';
import AllMovies from '../../screens/TheMovieDB/AllMovies/AllMovies';
import DBMovieDetails from '../../screens/TheMovieDB/MovieDetails/DBMovieDetails';
import { MovieProvider } from '../../context/movie-context';
import { TVShowDetails } from '../../screens/TheMovieDB/TVShowDetails/tv-show-details';
import CastMemberDetailsPage from '../../screens/TheMovieDB/CastMemberDetailsPage/CastMemberDetailsPage';

export default function MovieContainer() {
	return (
		<MovieProvider>
			<Routes>
				<Route path="/" element={<AllMovies />} />
				<Route path="/tv/:id" element={<TVShowDetails />} />
				<Route path="/:id" element={<DBMovieDetails />} />
				<Route path="/actor/:id" element={<CastMemberDetailsPage />} />
				<Route path="/director/:id" element={<CastMemberDetailsPage />} />
			</Routes>
		</MovieProvider>
	);
}
