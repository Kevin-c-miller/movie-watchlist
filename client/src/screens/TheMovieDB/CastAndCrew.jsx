import { useState, useEffect } from 'react';
import './DBMovieDetails.css';

export default function CastAndCrew({ credits }) {
  const [movieWriters, setMovieWriters] = useState([]);

  const findMovieWriters = () => {
    const writers = credits.crew.filter(({ job }) => job === 'Screenplay');
    setMovieWriters(writers);
  };

  const findDirector = ({ job }) => job === 'Director';

  const actorCredits = credits.cast.slice(0, 7);
  const directorCredits = credits.crew.find(findDirector);
  console.log(movieWriters);

  console.log(directorCredits);

  useEffect(() => {
    findMovieWriters();
  }, []);

  return (
    <div className="castAndCrew">
      <h5 className="castHeader">Cast and Crew</h5>
      <h5>
        <b>Directed By:</b> {directorCredits?.original_name}
      </h5>
      <h5 className="actors">Starring</h5>
      {actorCredits.map((actor) => (
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
      ))}
      <h6 className="writers">
        <b>Written By:</b>
      </h6>
      {movieWriters?.map((writer) => (
        <div key={writer?.id}>
          <h6>{writer?.original_name}</h6>
          <img
            className="actorHeadShot"
            src={`https://image.tmdb.org/t/p/w500/${writer?.profile_path}`}
            alt={writer?.original_name}
          />
        </div>
      ))}
    </div>
  );
}
