import { Link, useParams } from 'react-router-dom';
import SearchBox from '../../components/SearchBox/SearchBox';
import './Movies.css';

export default function Movies(props) {
  const {
    fetchMovie,
    movies,
    setSearchValue,
    searchValue,
    previousPage,
    nextPage,
    currentPage,
    setCurrentPage,
  } = props;

  const { title } = useParams();
  console.log(title);

  return (
    <div className="movies-page">
      <h2>Search and find movies here!</h2>
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />

      <div className="all-movies">
        {movies?.map((movie) => (
          <div className="movies-image-container" key={movie.Title}>
            <Link to={`/movies/${movie.Title}`}>
              <img
                src={movie?.Poster}
                alt={movie?.Title}
                className="movie-page-img"
              />

              <div className="overlay" key={movie.Title}>
                <h6 className="overlay-text">{movie?.Title}</h6>
                <h6 className="overlay-text">Year: {movie?.Year}</h6>
              </div>
            </Link>
          </div>
        ))}
      </div>
      {/* Links - previous, next page */}
      {/* <span>
        <h5>Page: {currentPage}</h5>
        <button
          onClick={() =>
            previousPage(setCurrentPage((prevPage) => prevPage - 1))
          }
          className="movie-page-btn"
        >
          Previous
        </button>{' '}
        |{' '}
        <button
          onClick={() => nextPage(setCurrentPage((prevPage) => prevPage + 1))}
          className="movie-page-btn"
        >
          Next
        </button>
      </span> */}
    </div>
  );
}
