import React from 'react';
import { Card } from 'react-bootstrap';

export default function MovieCard({ dbMovie, moviePoster }) {
  //   const moviePoster = `https://image.tmdb.org/t/p/original${dbMovie?.poster_path}`;

  return (
    <div className="movieDetailsCard">
      {/* TODO: break these sections down into their own component */}
      <Card className="movie-details-card">
        <Card.Img
          variant="top"
          src={moviePoster}
          alt={dbMovie?.title}
          style={{
            height: '600px',
            borderRadius: '35px',
            border: '5px solid #000',
          }}
        />
        <Card.Body>
          <Card.Title>
            <h2>
              <b>{dbMovie.title}</b>
            </h2>
          </Card.Title>
          <Card.Text>
            <i>"{dbMovie?.tagline}"</i>
            <br />
            <b>Released: </b>
            {dbMovie?.release_date}
            <br />
            <b> {dbMovie?.runtime} min.</b>
            {dbMovie?.budget > 0 && (
              <>
                <br />
                <br />
                <span>
                  <b>Budget: </b> $ {dbMovie?.budget}
                </span>
              </>
            )}
            <br />
            {dbMovie?.revenue > 0 && (
              <>
                <span>
                  <b>Revenue: </b> $ {dbMovie?.revenue}
                </span>
                <br />
                <br />
              </>
            )}
            <b>Genre:</b>{' '}
            {dbMovie?.genres?.map((genre) => (
              <span key={genre?.id}> {genre?.name},</span>
            ))}
            <br />
            <br />
            <b> Synopsis:</b> {dbMovie?.overview}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
