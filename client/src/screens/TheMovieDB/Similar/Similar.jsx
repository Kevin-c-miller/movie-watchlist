import { Link, useParams } from 'react-router-dom';
import { isEmpty } from 'lodash-es';
import { useContext, useEffect } from 'react';
import MovieContext from '../../../context/movie-context';
import { formatDatewithSlashes } from '../../../utils/format-date';

export default function Similar({ isMovie, isTvShow }) {
	const { id } = useParams();

	const {
		similarMovies,
		similarTvShows,
		fetchSimilarMovies,
		fetchSimilarTvShows,
	} = useContext(MovieContext);

	useEffect(() => {
		fetchSimilarMovies(id);
		fetchSimilarTvShows(id);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [id]);

	return (
		<>
			<h4 className="similarHeader" style={isTvShow && { marginTop: '20px' }}>
				{`${!isEmpty(similarMovies) && isMovie ? 'Similar Movies' : ''}`}
				{`${!isEmpty(similarTvShows) && isTvShow ? 'Similar Titles' : ''}`}
			</h4>
			<div className="similar-movies">
				{!isEmpty(similarMovies) &&
					isMovie &&
					similarMovies?.map((movie) => {
						const { id, release_date, title, poster_path } = movie;
						const formattedDate = formatDatewithSlashes(release_date);

						return (
							<div className="movies-image-container" key={id}>
								<Link to={`/movies/${id}`}>
									<img
										src={`https://image.tmdb.org/t/p/original${poster_path}`}
										alt={title}
										className="movie-page-img"
									/>

									<div className="overlay" key={id}>
										<h6 className="overlay-text">{formattedDate}</h6>
										<h6 className="overlay-text">{title}</h6>
									</div>
								</Link>
							</div>
						);
					})}
				{!isEmpty(similarTvShows) &&
					isTvShow &&
					similarTvShows?.map((show) => {
						const { id, release_date, title, poster_path } = show;
						const formattedDate = formatDatewithSlashes(release_date);

						return (
							<div className="movies-image-container" key={id}>
								<Link to={`/movies/${id}`}>
									<img
										src={`https://image.tmdb.org/t/p/original${poster_path}`}
										alt={title}
										className="movie-page-img"
									/>

									<div className="overlay" key={id}>
										<h6 className="overlay-text">{formattedDate}</h6>
										<h6 className="overlay-text">{title}</h6>
									</div>
								</Link>
							</div>
						);
					})}
			</div>
		</>
	);
}
