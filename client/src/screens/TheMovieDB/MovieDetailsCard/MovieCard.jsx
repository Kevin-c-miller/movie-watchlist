import { useContext } from 'react';
import { Card } from 'react-bootstrap';
import MovieContext from '../../../context/movieContext.js';

export default function MovieCard({ moviePoster }) {
  const { movie } = useContext(MovieContext);

  // currency format for budget/revenue
  const currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  return (
    <div className="movieDetailsCard">
      <Card className="movie-details-card">
        <Card.Img variant="top" src={moviePoster} alt={movie?.title} />
        <Card.Body>
          <Card.Title>
            <h2>
              <b>{movie?.title}</b>
            </h2>
          </Card.Title>
          <Card.Text>
            <i>"{movie?.tagline}"</i>
            <br />
            <b>Released: </b>
            {movie?.release_date}
            <br />
            <b> {movie?.runtime} min.</b>
            {movie?.budget > 0 && (
              <>
                <br />
                <br />
                <span>
                  <b>Budget: </b> {currencyFormat(movie?.budget)}
                </span>
              </>
            )}
            <br />
            {movie?.revenue > 0 && (
              <>
                <span>
                  <b>Revenue: </b> {currencyFormat(movie?.revenue)}
                </span>
                <br />
                <br />
              </>
            )}
            <b>Genre:</b>{' '}
            {movie?.genres?.map((genre) => (
              <span key={genre?.id}> {genre?.name},</span>
            ))}
            <br />
            <br />
            <b> Synopsis:</b> {movie?.overview}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
