import React, { useContext, useEffect, useState } from 'react';
import MovieContext from '../../../context/movieContext';
import { useNavigate, useParams } from 'react-router-dom';

import './tv-show-details.css';
import ReactPlayer from 'react-player';
import { TVShowSeasons } from '../tv-show-seasons/tv-show-seasons';

export const TVShowDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchTvShowTrailers, showTrailers, showDetails, fetchTvShowDetails } =
    useContext(MovieContext);

  const movieTrailerUrl = `https://www.youtube.com/watch?v=${showTrailers?.key}`;
  console.log(showDetails);

  useEffect(() => {
    fetchTvShowDetails(id);
    fetchTvShowTrailers(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const formatDate = (date) => {
    const splitDate = date?.split('-');
    return [`${splitDate[1]}-${splitDate[2]}-${splitDate[0]}`].toString();
  };

  return (
    <div className="show-details">
      <div className="movieDetailsBtns">
        <button onClick={() => navigate('/movies')} className="back-to-movies">
          Back to list
        </button>
      </div>
      <h2 className="show-details__title">{showDetails?.name}</h2>

      <div className="show-detials__description">
        <img
          src={`https://image.tmdb.org/t/p/original${showDetails?.poster_path}`}
          alt="poster"
          className="show-details__image"
        />

        <div className="show-details__container">
          <div className="show-details__about">
            <div className="show-details__tagline">{showDetails?.tagline}</div>

            <div className="show-details__description">
              {showDetails?.overview}
            </div>
            <div className="show-detials__premiere">
              <span>
                <b>Series Premier: </b>
                {showDetails?.first_air_date}
              </span>
            </div>

            <div className="show-details__genres">
              <span>
                <b>Genre: </b>
                {showDetails?.genres?.map((genre) => `${genre?.name}, `)}
              </span>
            </div>

            <div className="show-details__networks">
              <span>
                <b>Networks: </b>
                {showDetails?.networks?.map((network) => network?.name)}
              </span>
            </div>

            <div className="show-details__seasons">
              <span>
                <b>Seasons: </b> {`${showDetails?.number_of_seasons}`}
              </span>
            </div>

            <div className="show-details__episodes">
              <span>
                <b>Total Episodes: </b> {`${showDetails?.number_of_episodes}`}
              </span>
            </div>

            <div className="show-details__seasons">
              <TVShowSeasons showDetails={showDetails} />
            </div>
          </div>
          <div className="player-wrapper">
            <ReactPlayer
              url={movieTrailerUrl}
              controls={true}
              className="react-player"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
