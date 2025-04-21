import React, { useContext, useEffect } from 'react';
import MovieContext from '../../../context/movieContext';
import { useNavigate, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { showCommaSeparator } from '../../../utils/format-comma-separator';
import Streaming from '../Streaming/Streaming';
import Similar from '../Similar/Similar';
import { formatDate } from '../../../utils/format-date';
import { isEmpty } from 'lodash-es';
import { useBreakpoint } from '../../../hooks/use-breakpoint';

import './tv-show-details.css';

export const TVShowDetails = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const { isMobile } = useBreakpoint();
	const {
		fetchTvShowTrailers,
		showTrailers,
		showDetails,
		tvCredits,
		fetchTvShowDetails,
		fetchTvStreaming,
		tvStreamingOptions,
		fetchTvCredits,
	} = useContext(MovieContext);

	const {
		name,
		poster_path,
		tagline,
		overview,
		genres,
		networks,
		first_air_date,
		number_of_episodes,
		number_of_seasons,
		homepage,
	} = showDetails;

	const movieTrailerUrl = `https://www.youtube.com/watch?v=${showTrailers?.key}`;

	useEffect(() => {
		fetchTvShowDetails(id);
		fetchTvShowTrailers(id);
		fetchTvStreaming(id);
		fetchTvCredits(id);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	const renderTvCredits = () => {
		return (
			<>
				<b>Starring: </b>
				{tvCredits?.cast?.map((credit, index) => {
					return (
						<span key={index}>
							{credit?.name}
							{showCommaSeparator(tvCredits?.cast, index)}{' '}
						</span>
					);
				})}
			</>
		);
	};

	return (
		<div className="show-details">
			<div className="movieDetailsBtns">
				<button onClick={() => navigate('/movies')} className="back-to-movies">
					{isMobile ? 'Back' : 'Back to Search'}
				</button>
			</div>
			<h2 className="show-details__title">{name}</h2>

			<div className="show-details__description">
				<img
					src={`https://image.tmdb.org/t/p/original${poster_path}`}
					alt="poster"
					className="show-details__image"
				/>

				<div className="show-details__container">
					<div className="show-details__about">
						<div className="show-details__tagline">{tagline}</div>

						<div className="show-details__description show-details__overview">
							<div>{overview}</div>
						</div>
						<div className="show-detials__premiere">
							<span>
								<b>Series Premier: </b>
								{formatDate(first_air_date)}
							</span>
						</div>

						<div className="show-details__genres">
							<span>
								<b>Genre: </b>
								{genres?.map((genre, index) => (
									<span key={index}>
										{`${genre?.name}${showCommaSeparator(genres, index)} `}
									</span>
								))}
							</span>
						</div>

						<div className="show-details__networks">
							<span>
								<b>Networks: </b>
								{networks?.map((network, index) => (
									<span key={index}>
										{`${network?.name}${showCommaSeparator(networks, index)} `}
									</span>
								))}
							</span>
						</div>

						<div className="show-details__seasons">
							<span>
								<b>Seasons: </b> {number_of_seasons}
							</span>
						</div>

						<div className="show-details__episodes">
							<span>
								<b>Total Episodes: </b> {number_of_episodes}
							</span>
						</div>

						{!isEmpty(tvCredits?.cast) && renderTvCredits()}

						<div className="show-details__streaming">
							<Streaming streaming={tvStreamingOptions} homepage={homepage} />
						</div>
					</div>
				</div>
			</div>
			<div className="player-wrapper">
				<ReactPlayer
					url={movieTrailerUrl}
					controls={true}
					className="react-player"
					width="100%"
					height="100%"
				/>
			</div>
			<Similar isTvShow />
		</div>
	);
};
