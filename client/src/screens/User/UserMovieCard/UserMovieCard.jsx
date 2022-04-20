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

  // console.log(userMovie, id, movie_id);

  return (
    <div className="movieDetailsCard">
      <Card className="movie-details-card">
        <Card.Img
          variant="top"
          src={userMovie?.poster}
          alt={userMovie?.title}
          style={{
            height: '600px',
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
            {/* {userMovie?.budget > 0 && (
              <>
                <br />
                <br />
                <span>
                  <b>Budget: </b> $ {currenyFormat(userMovie?.budget)}
                </span>
              </>
            )}
            <br />
            {movie?.revenue > 0 && (
              <>
                <span>
                  <b>Revenue: </b> {currencyFormat(userMovie?.revenue)}
                </span>
                <br />
                <br />
              </>
            )} */}
            <br />
            {/* <b>Genre:</b>{' '} */}
            {/* {userMovie?.genres?.map((genre) => (
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
