import { useContext } from 'react';
import Streaming from '../../TheMovieDB/Streaming/Streaming';
import ReactPlayer from 'react-player';
import UserMovieContext from '../../../context/userMovieContext';

export default function UserDetailsOther() {
  const { userMovie, streaming } = useContext(UserMovieContext);

  return (
    <div className="movieDetailsOther">
      <h3>Coming soon!</h3>
      <Streaming streaming={streaming} />
      <div className="castAndCrew">
        <div className="director">
          <h5> Directed By: </h5> <h6>{userMovie?.director}</h6>
        </div>

        <div className="actors">
          <h5 className="actors-header">Starring: </h5>

          <div className="actor-map">
            <h6>{userMovie.starring} </h6>
          </div>
        </div>
      </div>
      <div className="movieTrailer">
        <h5>
          <b>Trailer</b>
        </h5>
        <div className="player-wrapper">
          {/* <ReactPlayer
            url={`https://www.youtube.com/watch?v=${trailers?.key}`}
            controls={true}
            className="react-player"
            width="100%"
            height="100%"
          /> */}
        </div>
      </div>
    </div>
  );
}
