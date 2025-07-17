import { useContext } from 'react';
import { showCommaSeparator } from '../../../utils/format-comma-separator';
import Streaming from '../Streaming/Streaming';
import MovieContext from '../../../context/movie-context';
import { formatDatewithSlashes } from '../../../utils/format-date';
import { currencyFormat } from '../../../utils/format-currency';
import { Link } from 'react-router-dom';
// import PersonContext from '../../../context/person-context';

export default function MovieDetailsOther({ stars, director, streaming }) {
	const { movie } = useContext(MovieContext);
	const {
		tagline,
		release_date,
		runtime,
		budget,
		overview,
		revenue,
		genres,
		status,
	} = movie;

	const formattedDate = formatDatewithSlashes(release_date);

	const { fetchPersonDetails, personDetails, filmography, fetchFilmography } =
		useContext(MovieContext);

	console.log(personDetails);
	console.log(filmography);

	return (
		<div className="movieDetailsOther">
			<div className="movieDetailsOther__info">
				<div className="tagline">"{tagline}"</div>
				<div className="release-date  movie-detail">
					<b>{status === 'Post Production' ? 'Releasing: ' : 'Released: '}</b>
					{formattedDate}
				</div>
				{runtime > 0 && (
					<div className="runtime movie-detail">
						{' '}
						<b>Runtime: </b>
						{runtime} min.
					</div>
				)}
				<div className="budget movie-detail">
					{budget > 0 && (
						<>
							<span>
								<b>Budget: </b> {currencyFormat(budget)}
							</span>
						</>
					)}
				</div>
				<div className="revenue movie-detail">
					{movie?.revenue > 0 && (
						<>
							<span>
								<b>Revenue: </b> {currencyFormat(revenue)}
							</span>
						</>
					)}
				</div>
				<div className="genre movie-detail">
					<b>Genre: </b>{' '}
					{genres?.map((genre, index) => (
						<span key={genre?.id}>
							{' '}
							{`${genre?.name}${showCommaSeparator(genres, index)}`}
						</span>
					))}
				</div>

				<div className="synopsis movie-detail">
					<b> Synopsis:</b> {overview}
				</div>
			</div>
			<Streaming streaming={streaming} />
			<div className="castAndCrew">
				<div className="director">
					<h5> Directed By: </h5> <h6>{director?.name}</h6>
				</div>

				<div className="actors">
					<h5 className="actors-header">Starring:</h5>
					{stars?.map((actor, index) => {
						const { cast_id, name, id } = actor;

						return (
							// make new page with Actor detials and filmography
							<button
								onClick={() => {
									fetchPersonDetails(id);
									fetchFilmography(id);
								}}
							>
								<div key={cast_id} className="actor-map">
									<h6>{`${name}${showCommaSeparator(stars, index)} `}</h6>
								</div>
							</button>
						);
					})}
				</div>
			</div>
		</div>
	);
}
