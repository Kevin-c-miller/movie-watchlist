import React, { useContext } from 'react';
import MovieContext from '../../context/movieContext';

import './tv-shows.css';
import { Link } from 'react-router-dom';

export const TVShows = () => {
  const { topTvShows, trendingTvShows } = useContext(MovieContext);
  console.log(trendingTvShows);

  return (
    <div className="tv-shows">
      <h4 className="tv-show-header">Top Rated TV Shows</h4>
      <div className="row-posters">
        {/* top tv show */}
        {topTvShows.map((show) => (
          <div className="movies-image-container" key={show?.id}>
            <Link to={`/movies/tv/${show?.id}`}>
              <img
                className="movie-page-img"
                src={`https://image.tmdb.org/t/p/original${show?.poster_path}`}
                alt={`${show?.original_name} poster`}
                // onClick={()=> onTvShowImageCLick(show)}
              />
              <div className="overlay" key={show?.id}>
                <h6 className="overlay-text">{show?.name}</h6>
                <h6 className="overlay-text">
                  First Episode: {show?.first_air_date}
                </h6>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* trending tv */}
      <h4 className="tv-show-header">Trending TV Shows</h4>
      <div className="row-posters">
        {trendingTvShows.map((show) => (
          <div className="movies-image-container" key={show?.id}>
            <Link to={`/movies/tv/${show?.id}`}>
              <img
                className="movie-page-img"
                src={`https://image.tmdb.org/t/p/original${show?.poster_path}`}
                alt={`${show?.original_name} poster`}
                // onClick={()=> onTvShowImageCLick(show)}
              />
              <div className="overlay" key={show?.id}>
                <h6 className="overlay-text">{show?.name}</h6>
                <h6 className="overlay-text">
                  First Episode: {show?.first_air_date}
                </h6>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
