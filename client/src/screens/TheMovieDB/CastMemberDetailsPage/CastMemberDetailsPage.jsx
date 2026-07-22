import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import MovieContext from '../../../context/movie-context';

import './CastMemberDetailsPage.css';
import { formatDatewithSlashes } from '../../../utils/format-date';

export default function CastMemberDetailsPage() {
	const { id } = useParams();
	const { fetchPersonDetails, personDetails, filmography, fetchFilmography } =
		useContext(MovieContext);

	const { name, birthday, deathday, biography, place_of_birth, profile_path } =
		personDetails;

	useEffect(() => {
		try {
			fetchFilmography(id);
			fetchPersonDetails(id);
		} catch (err) {
			console.log(err);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	// const directingCredits = filmography?.crew.filter(
	// 	(movie) => movie.job === 'Director',
	// );

	return (
		id && (
			<div className="cast-details-page">
				<div className="cast-member-name">{name}</div>

				<div className="cast-member-life-info">
					<div className="cast-member-birthday">
						<span className="cast-member-birthday-label">DOB: </span>
						<span className="cast-member-birthday-value">
							{formatDatewithSlashes(birthday)} {place_of_birth}
						</span>
					</div>

					{deathday && (
						<div className="cast-member-death">
							<span className="cast-member-death-label">Death:</span>
							<span className="cast-member-death-value">{deathday}</span>
						</div>
					)}
				</div>

				<div className="cast-member-info">
					<img
						src={`https://image.tmdb.org/t/p/original${profile_path}`}
						alt={'name headshot'}
						className="cast-member-headshot"
					/>

					<div className="cast-member-bio">{biography}</div>
				</div>

				{/* filmography - separate movies from TV & sort from earliest credit to most recent ie wikipedia */}

				{/* <div className="cast-member-filmography"></div> */}
				{/* awards */}
			</div>
		)
	);
}
