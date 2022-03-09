import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './DBMovieDetails.css';

export default function CastAndCrew({ movieCredits }) {
  const { id } = useParams();

  return (
    <>
      {id && (
        <div className="castAndCrew">
          {/* <h5 className="castHeader">Cast and Crew</h5>
          <h5>
            <b>Directed By:</b> {director?.original_name}
          </h5>
          <h5 className="actors">Starring</h5>
          {stars.map((actor) => (
            <div key={actor?.cast_id}>
              <h6>{actor?.original_name}</h6>
              <h6>
                <i>{actor?.character}</i>
              </h6>
              <img
                className="actorHeadShot"
                src={`https://image.tmdb.org/t/p/w500/${actor?.profile_path}`}
                alt={actor?.original_name}
              />
            </div>
          ))} */}
        </div>
      )}
    </>
  );
}
