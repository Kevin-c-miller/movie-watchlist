import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { X } from '../../../assets/index.js';
import UserMovieContext from '../../../context/userMovieContext.js';

export default function UserMovieCard({ currentUser, removeMovie }) {
  const { userMovie } = useContext(UserMovieContext);

  const { id, movie_id } = useParams();

  // currency format for budget/revenue
  const currencyFormat = (num) => {
    return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };

  return (
    <div className="movieDetailsCard">
      <Card className="movie-details-card">
        <Card.Img
          variant="top"
          src={userMovie?.poster}
          alt={userMovie?.title}
        />
        <Card.Body>
          <Card.Title>
            <h2>
              <b>{userMovie?.title}</b>
            </h2>
            <div className="remove-movie">
              <img
                // TODO: add modal to confirm deleting movie from watch-list
                src={X}
                alt="x icon"
                style={{
                  height: '25px',
                  width: '25px',
                  background: 'red',
                  borderRadius: '10px',
                }}
                onClick={() => removeMovie(id, movie_id)}
              />
            </div>
          </Card.Title>
          <Card.Text>
            <i>"{userMovie?.tagline}"</i>
            <br />
            <b>Released: </b>
            {userMovie?.release_year}
            <br />
            <b> {userMovie?.runtime} min.</b>
            {userMovie?.budget > 0 && (
              <>
                <br />
                <br />
                <span>
                  <b>Budget: </b> {currencyFormat(+userMovie?.budget)}
                </span>
              </>
            )}
            <br />
            {userMovie?.revenue > 0 && (
              <>
                <span>
                  <b>Revenue: </b> {currencyFormat(+userMovie?.revenue)}
                </span>
              </>
            )}
            <br />
            {/* TODO: uncomment once added to db */}
            {/* <b>Genre:</b>{' '} */}
            {/* {userMovie?.genres?.map((genre) => (
              <span key={genre?.id}> {genre?.name},</span>
            ))} */}
            <br />
            <b> Synopsis:</b> {userMovie?.synopsis}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
