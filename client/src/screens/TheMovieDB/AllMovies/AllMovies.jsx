import { useContext } from "react";
import { Link } from "react-router-dom";
import SearchBox from "../../../components/SearchBox/SearchBox";
import MovieContext from "../../../context/movie-context";
import { TVShows } from "../../TV-Shows/tv-shows";
import "./AllMovies.css";
import { formatDatewithSlashes } from "../../../utils/format-date";

export default function AllMovies() {
  const { topMovies, popMovies, nowPlaying, userSearch, upcoming } =
    useContext(MovieContext);

  return (
    <div className="allMoviesPage">
      <div className="search-container">
        <h2>Search here!</h2>
        <SearchBox />
      </div>

      {/* user searched */}
      <div className="all-movies">
        {userSearch?.length !== 0 && (
          <div className="searched-movies">
            <h4>Search Results</h4>

            <div className="row-posters">
              {userSearch?.map((item) => {
                const {
                  id,
                  title,
                  poster_path,
                  release_date,
                  first_air_date,
                  name,
                } = item;

                const isTvShow = "first_air_date" in item;
                const url = isTvShow ? `/movies/tv/${id}` : `/movies/${id}`;
                const release = isTvShow ? first_air_date : release_date;
                const projectName = isTvShow ? name : title;

                return (
                  <div className="movies-image-container" key={id}>
                    <Link to={url}>
                      <img
                        src={`https://image.tmdb.org/t/p/original${poster_path}`}
                        alt={title}
                        className="movie-page-img"
                      />
                      <div className="overlay" key={id}>
                        <h6 className="overlay-text">{projectName}</h6>
                        <h6 className="overlay-text">
                          {formatDatewithSlashes(release)}
                        </h6>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* now playing */}
        <h4>Now Playing</h4>
        <div className="row-posters">
          {nowPlaying.map((movie) => (
            <div className="movies-image-container" key={movie?.id}>
              <Link to={`/movies/${movie?.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                  alt={movie?.title}
                  className="movie-page-img"
                />
                <div className="overlay" key={movie?.id}>
                  <h6 className="overlay-text">{movie?.title}</h6>
                  <h6 className="overlay-text">
                    {formatDatewithSlashes(movie?.release_date)}
                  </h6>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* coming soon */}
        <h4>Coming Soon</h4>
        <div className="row-posters">
          {upcoming.map((movie) => (
            <div className="movies-image-container" key={movie?.id}>
              <Link to={`/movies/${movie?.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                  alt={movie?.title}
                  className="movie-page-img"
                />
                <div className="overlay" key={movie?.id}>
                  <h6 className="overlay-text">{movie?.title}</h6>
                  <h6 className="overlay-text">
                    {formatDatewithSlashes(movie?.release_date)}
                  </h6>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* top movies */}
        <h4>Top Movies</h4>
        <div className="row-posters">
          {topMovies.map((movie) => (
            <div className="movies-image-container" key={movie?.id}>
              <Link to={`/movies/${movie?.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                  alt={movie?.title}
                  className="movie-page-img"
                />
                <div className="overlay" key={movie?.id}>
                  <h6 className="overlay-text">{movie?.title}</h6>
                  <h6 className="overlay-text">
                    {formatDatewithSlashes(movie?.release_date)}
                  </h6>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* popular movies */}
        <h4>Popular Movies</h4>
        <div className="row-posters">
          {popMovies.map((movie) => (
            <div className="movies-image-container" key={movie?.id}>
              <Link to={`/movies/${movie?.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                  alt={movie?.title}
                  className="movie-page-img"
                />
                <div className="overlay" key={movie?.id}>
                  <h6 className="overlay-text">{movie?.title}</h6>
                  <h6 className="overlay-text">
                    {formatDatewithSlashes(movie?.release_date)}
                  </h6>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* TV Shows */}
        <TVShows />
      </div>
    </div>
  );
}
