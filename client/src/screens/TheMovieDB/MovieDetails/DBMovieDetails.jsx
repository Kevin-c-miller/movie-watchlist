import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useBreakpoint } from '../../../hooks/use-breakpoint';
import MovieDetailsOther from '../MovieDetailsOther/MovieDetailsOther';
import MovieContext from '../../../context/movie-context';
import { getMovieCredits } from '../../../services/apiConfig/theMovieDb';
import Similar from '../Similar/Similar';
import ReactPlayer from 'react-player';

import './DBMovieDetails.css';
// import PersonContext from '../../../context/person-context';

export default function DBMovieDetails() {
	const {
		movie,
		setStars,
		setDirector,
		fetchDBMovieDetails,
		fetchMovieTrailer,
		fetchStreamingProviders,
		fetchSimilarMovies,
		stars,
		director,
		trailers,
		streaming,
	} = useContext(MovieContext);

	// const {fetchPersonDetails, personDetails} = useContext(PersonContext);

	const { id } = useParams();
	const navigate = useNavigate();
	const { isMobile } = useBreakpoint();

	// get movie credits
	const fetchMovieCredits = async (movie_id) => {
		const movieCredits = await getMovieCredits(movie_id);

		const directorCredits = movieCredits?.crew?.find(
			({ job }) => job === 'Director'
		);
		setDirector(directorCredits);

		const actors = movieCredits?.cast?.slice(0, 7);
		setStars(actors);
	};

	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, [id]);

	useEffect(() => {
		try {
			fetchDBMovieDetails(id);
			fetchMovieTrailer(id);
			fetchStreamingProviders(id);
			fetchMovieCredits(id);
			fetchSimilarMovies(id);
		} catch (error) {
			console.log(error);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	return (
		<div className="movieDetails">
			<div className="movieDetailsBtns">
				<button onClick={() => navigate('/movies')} className="back-to-movies">
					{isMobile ? 'Back' : 'Back to Search'}
				</button>
			</div>
			<h2 className="movieTitle">{movie.title}</h2>
			<div className="movieDetailsBody">
				<div className="movieDetailsCard">
					<img
						src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
						alt="poster"
						className="show-details__image"
					/>
				</div>

				<MovieDetailsOther
					stars={stars}
					director={director}
					trailers={trailers}
					streaming={streaming}
				/>
			</div>

			<div className="player-wrapper">
				<ReactPlayer
					url={`https://www.youtube.com/watch?v=${trailers?.key}`}
					controls={true}
					className="react-player"
					width="100%"
					height="100%"
				/>
			</div>
			<Similar isMovie />
		</div>
	);
}
