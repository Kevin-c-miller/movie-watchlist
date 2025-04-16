import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import MovieContext from '../../../context/movieContext.js';
import { formatDate } from '../../../utils/format-date.js';
import { showCommaSeparator } from '../../../utils/format-comma-separator.js';

export default function MovieCard({ moviePoster }) {
  const { movie } = useContext(MovieContext);
  const {
    title,
    tagline,
    release_date,
    runtime,
    budget,
    overview,
    revenue,
    genres,
  } = movie;

  // currency format for budget/revenue
  const currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  const formattedDate = formatDate(release_date);

  return (
    <div className="movieDetailsCard">
      <Card className="movie-details-card">
        <Card.Img variant="top" src={moviePoster} alt={title} />
        <Card.Body>
          <Card.Title>
            <h2>
              <b>{title}</b>
            </h2>
          </Card.Title>
          <Card.Text>
            <i>"{tagline}"</i>
            <br />
            <b>Released: </b>
            {formattedDate}
            <br />
            <b> {runtime} min.</b>
            {budget > 0 && (
              <>
                <br />
                <br />
                <span>
                  <b>Budget: </b> {currencyFormat(budget)}
                </span>
              </>
            )}
            <br />
            {movie?.revenue > 0 && (
              <>
                <span>
                  <b>Revenue: </b> {currencyFormat(revenue)}
                </span>
                <br />
                <br />
              </>
            )}
            <b>Genre: </b>{' '}
            {genres?.map((genre, index) => (
              <span key={genre?.id}>
                {' '}
                {`${genre?.name}${showCommaSeparator(genres, index)}`}
              </span>
            ))}
            <br />
            <br />
            <b> Synopsis:</b> {overview}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
