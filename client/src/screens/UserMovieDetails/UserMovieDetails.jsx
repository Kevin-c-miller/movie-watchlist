import React from 'react';
import { useParams } from 'react-router-dom';
import '../MovieDetail/MovieDetails.css';

export default function UserMovieDetails(props) {
  const { userMovie } = props;

  return (
    <div className="movie-details">
      <h2>{userMovie?.title}</h2>
      <div className="movie-poster">
        <img src={userMovie?.poster} alt={userMovie?.title} />
      </div>
      <h4>Director: {userMovie?.director}</h4>
      <h5>Starring: {userMovie?.starring}</h5>
      <h6>
        <b>Rated:</b> {userMovie?.rating}
      </h6>
      <h6>
        <b>Released:</b> {userMovie?.release_year}
      </h6>
      <h6>
        <b>Runtime: </b>
        {userMovie?.runtime}
      </h6>

      <div className="plot">
        <p>
          <b>Plot:</b> {userMovie?.synopsis}
        </p>
      </div>
    </div>
  );
}
