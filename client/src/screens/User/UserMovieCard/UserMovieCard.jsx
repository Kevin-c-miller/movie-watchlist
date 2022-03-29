import React from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { X } from '../../../assets/index.js';

export default function UserMovieCard({ userMovie, currentUser, removeMovie }) {
  const { id, movie_id } = useParams();
  return (
    <div className="movieDetailsCard">
      <Card style={{ width: '30rem' }} className="movie-details-card">
        <Card.Img
          variant="top"
          src={userMovie?.poster}
          alt={userMovie?.title}
          style={{
            height: '600px',
            width: '29.5rem',
            borderRadius: '35px',
            border: '5px solid #000',
          }}
        />
        <Card.Body>
          <Card.Title>
            <h2>
              <b>{userMovie?.title}</b>
            </h2>
            <div className="remove-movie">
              <img
                src={X}
                alt="x icon"
                style={{
                  height: '25px',
                  width: '25px',
                  background: 'red',
                  borderRadius: '10px',
                }}
                onClick={() => removeMovie(currentUser?.id, userMovie?.id)}
              />
            </div>
          </Card.Title>
          <Card.Text>
            {/* <i>"{currentUser?.tagline}"</i> */}
            <br />
            <b>Released: </b>
            {userMovie?.release_year}
            <br />
            <b> {userMovie?.runtime} min.</b>
            {/* {dbMovie?.budget > 0 && (
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
            )} */}
            <br />
            {/* <b>Genre:</b>{' '} */}
            {/* {dbMovie?.genres?.map((genre) => (
              <span key={genre?.id}> {genre?.name},</span>
            ))} */}
            <br />
            <br />
            <b> Synopsis:</b> {userMovie?.synopsis}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
