import React, { useContext, useEffect } from 'react';
import MovieContext from '../../../context/movieContext';
import { useNavigate, useParams } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { TVShowSeasons } from '../tv-show-seasons/tv-show-seasons';
import { showCommaSeparator } from '../../../utils/format-comma-separator';

import './tv-show-details.css';

export const TVShowDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { fetchTvShowTrailers, showTrailers, showDetails, fetchTvShowDetails } =
    useContext(MovieContext);

  const {
    name,
    poster_path,
    tagline,
    overview,
    first_air_date,
    genres,
    networks,
    number_of_episodes,
    number_of_seasons,
  } = showDetails;

  const movieTrailerUrl = `https://www.youtube.com/watch?v=${showTrailers?.key}`;

  useEffect(() => {
    fetchTvShowDetails(id);
    fetchTvShowTrailers(id);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="show-details">
      <div className="movieDetailsBtns">
        <button onClick={() => navigate('/movies')} className="back-to-movies">
          Back to list
        </button>
      </div>
      <h2 className="show-details__title">{name}</h2>

      <div className="show-detials__description">
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt="poster"
          className="show-details__image"
        />

        <div className="show-details__container">
          <div className="show-details__about">
            <div className="show-details__tagline">{tagline}</div>

            <div className="show-details__description">{overview}</div>
            <div className="show-detials__premiere">
              <span>
                <b>Series Premier: </b>
                {first_air_date}
              </span>
            </div>

            <div className="show-details__genres">
              <span>
                <b>Genre: </b>
                {genres?.map(
                  (genre, index) =>
                    `${genre?.name}${showCommaSeparator(genres, index)} `
                )}
              </span>
            </div>

            <div className="show-details__networks">
              <span>
                <b>Networks: </b>
                {networks?.map(
                  (network, index) =>
                    `${network?.name}${showCommaSeparator(networks, index)} `
                )}
              </span>
            </div>

            <div className="show-details__seasons">
              <span>
                <b>Seasons: </b> {number_of_seasons}
              </span>
            </div>

            <div className="show-details__episodes">
              <span>
                <b>Total Episodes: </b> {number_of_episodes}
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
