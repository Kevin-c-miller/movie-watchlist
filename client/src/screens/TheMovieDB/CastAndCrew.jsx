import React from 'react';
import './DBMovieDetails.css';

export default function CastAndCrew({ credits }) {
  const findDirector = ({ job }) => job === 'Director';
  const movieWriters = credits.crew.filter(({ job }) => job === 'Screenplay');

  const actorCredits = credits.cast.slice(0, 7);
  const directorCredits = credits.crew.find(findDirector);
  console.log(directorCredits);
  return (
    <div>
      <h3>Cast and Crew</h3>
      <h5>
        <b>Directed By:</b> {directorCredits?.original_name}
      </h5>
      {actorCredits.map((actor) => (
        <div key={actor?.cast_id}>
          <h6>{actor?.original_name}</h6>
          <h6>{actor?.character}</h6>
        </div>
      ))}
      <h6>
        <b>Written By:</b>
      </h6>
      {movieWriters?.map((writer) => (
        <div key={writer?.id}>
          <h6>{writer?.original_name}</h6>
        </div>
      ))}
    </div>
  );
}
