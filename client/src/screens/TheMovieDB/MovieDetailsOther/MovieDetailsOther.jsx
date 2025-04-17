import { useContext } from 'react';
import { showCommaSeparator } from '../../../utils/format-comma-separator';
import Streaming from '../Streaming/Streaming';
import MovieContext from '../../../context/movieContext';
import { formatDate } from '../../../utils/format-date';

export default function MovieDetailsOther({ stars, director, streaming }) {
  const { movie } = useContext(MovieContext);
  const { tagline, release_date, runtime, budget, overview, revenue, genres } =
    movie;

  const currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  const formattedDate = formatDate(release_date);

  return (
    <div className="movieDetailsOther">
      <div className="movieDetailsOther__info">
        <div className="tagline movie-detail ">"{tagline}"</div>
        <div className="release-date  movie-detail">
          <b>Released: </b>
          {formattedDate}
        </div>
        <div className="runtime  movie-detail">
          {' '}
          <b>Runtime: </b>
          {runtime} min.
        </div>
        <div className="budget  movie-detail">
          {budget > 0 && (
            <>
              <span>
                <b>Budget: </b> {currencyFormat(budget)}
              </span>
            </>
          )}
        </div>
        <div className="revenue  movie-detail">
          {movie?.revenue > 0 && (
            <>
              <span>
                <b>Revenue: </b> {currencyFormat(revenue)}
              </span>
            </>
          )}
        </div>
        <div className="genre  movie-detail">
          <b>Genre: </b>{' '}
          {genres?.map((genre, index) => (
            <span key={genre?.id}>
              {' '}
              {`${genre?.name}${showCommaSeparator(genres, index)}`}
            </span>
          ))}
        </div>

        <div className="synopsis  movie-detail">
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
          {stars.map((actor, index) => {
            const { cast_id, name } = actor;
            return (
              <div key={cast_id} className="actor-map">
                <h6>{`${name}${showCommaSeparator(stars, index)} `}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
