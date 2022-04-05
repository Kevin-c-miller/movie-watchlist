import { useContext } from 'react';
import Streaming from '../Streaming/Streaming';
import ReactPlayer from 'react-player';
import MovieContext from '../../../context/movieContext';

export default function MovieDetailsOther() {
  const { stars, director, trailers, streaming } = useContext(MovieContext);

  return (
    <div className="movieDetailsOther">
      <Streaming streaming={streaming} />
      <div className="castAndCrew">
        <div className="director">
          <h5> Directed By: </h5> <h6>{director?.original_name}</h6>
        </div>

        <div className="actors">
          <h5 className="actors-header">Starring:</h5>

          {stars.map((actor) => (
            <div key={actor?.cast_id} className="actor-map">
              <h6>{actor?.original_name}, </h6>
            </div>
          ))}
        </div>
      </div>
      <div className="movieTrailer">
        <h5>
          <b>Trailer</b>
        </h5>
        <div className="player-wrapper">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailers?.key}`}
            controls={true}
            className="react-player"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
}
