import React, { useContext } from 'react';
import MovieContext from '../../context/movie-context';
import { Link } from 'react-router-dom';
import { formatDatewithSlashes } from '../../utils/format-date';

import './tv-shows.css';

export const TVShows = () => {
	const { topTvShows, trendingTvShows, airingToday } = useContext(MovieContext);

	return (
		<div className="tv-shows">
			<h4 className="tv-show-header">Top Rated TV Shows</h4>
			<div className="row-posters">
				{/* top tv show */}
				{topTvShows.map((show) => {
					const { id, poster_path, name, first_air_date, original_name } = show;
					return (
						<div className="movies-image-container" key={id}>
							<Link to={`/movies/tv/${id}`}>
								<img
									className="movie-page-img"
									src={`https://image.tmdb.org/t/p/original${poster_path}`}
									alt={`${original_name} poster`}
								/>
								<div className="overlay" key={id}>
									<h6 className="overlay-text">{name}</h6>
									<h6 className="overlay-text">
										First Episode: {formatDatewithSlashes(first_air_date)}
									</h6>
								</div>
							</Link>
						</div>
					);
				})}
			</div>

			{/* trending tv */}
			<h4 className="tv-show-header">Trending TV Shows</h4>
			<div className="row-posters">
				{trendingTvShows.map((show) => {
					const { id, poster_path, name, first_air_date, original_name } = show;

					return (
						<div className="movies-image-container" key={id}>
							<Link to={`/movies/tv/${id}`}>
								<img
									className="movie-page-img"
									src={`https://image.tmdb.org/t/p/original${poster_path}`}
									alt={`${original_name} poster`}
								/>
								<div className="overlay" key={id}>
									<h6 className="overlay-text">{name}</h6>
									<h6 className="overlay-text">
										First Episode: {formatDatewithSlashes(first_air_date)}
									</h6>
								</div>
							</Link>
						</div>
					);
				})}
			</div>

			{/* Airing Today */}
			<h4 className="tv-show-header">TV Airing Today</h4>
			<div className="row-posters">
				{airingToday.map((show, index) => {
					const { id, poster_path, name, original_name } = show;

					return (
						<div className="movies-image-container" key={index}>
							<Link to={`/movies/tv/${id}`}>
								<img
									className="movie-page-img"
									src={`https://image.tmdb.org/t/p/original${poster_path}`}
									alt={`${original_name} poster`}
								/>
								<div className="overlay" key={id}>
									<h6 className="overlay-text">{name}</h6>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</div>
	);
};
