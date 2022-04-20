import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SimilarMovies from '../SimilarMovies/SimilarMovies';
import MovieCard from '../MovieDetailsCard/MovieCard';
import MovieDetailsOther from '../MovieDetailsOther/MovieDetailsOther';
import MovieContext from '../../../context/movieContext';
import { getMovieCredits } from '../../../services/apiConfig/theMovieDb';
import './DBMovieDetails.css';

export default function DBMovieDetails({ addMovieToWatchList, currentUser }) {
  const {
    movie,
    setStars,
    setDirector,
    fetchDBMovieDetails,
    fetchMovieTrailer,
    fetchStreamingProviders,
    fetchSimilarMovies,
    stars,
    director,
    trailers,
    streaming,
  } = useContext(MovieContext);

  const { id } = useParams();
  const navigate = useNavigate();

  // get movie credits
  const fetchMovieCredits = async (movie_id) => {
    const movieCredits = await getMovieCredits(movie_id);

    const directorCredits = movieCredits.crew.find(
      ({ job }) => job === 'Director'
    );
    setDirector(directorCredits);

    const actors = movieCredits.cast.slice(0, 7);
    setStars(actors);
  };

  // setting actors in string to be stored in db
  let actors = ``;
  stars.forEach((star) => {
    actors += `${star.name}, `;
  });

  // streaming url
  // const streamingURL = `https://image.tmdb.org/t/p/w45${option?.logo_path}`
  // console.log(streaming.flatrate);
  // console.log(
  //   streaming.rent.forEach((movie) => {
  //     console.log(movie.logo_path);
  //   })
  // );

  //  trailer url
  const movieTrailerUrl = `https://www.youtube.com/watch?v=${trailers?.key}`;

  // movie poster url
  const moviePoster = `https://image.tmdb.org/t/p/original${movie?.poster_path}`;

  console.log(movie);
  useEffect(() => {
    try {
      fetchDBMovieDetails(id);
      fetchMovieTrailer(id);
      fetchStreamingProviders(id);
      fetchMovieCredits(id);
      fetchSimilarMovies(id);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  return (
    <>
      <div className="movieDetails">
        <div className="movieDetailsBtns">
          <button
            onClick={() => navigate('/movies')}
            className="back-to-movies"
          >
            Back to movie list
          </button>

          <button
            className="add-to-watchlist"
            onClick={() => {
              const addedMovie = {
                title: movie.title,
                poster: moviePoster,
                release_year: parseInt(movie.release_date),
                rating: movie.Rated,
                synopsis: movie.overview,
                director: director.name,
                starring: actors,
                runtime: movie.runtime.toString(),
                movie_trailer: movieTrailerUrl,
                tagline: movie.tagline,
                budget: movie.budget.toString(),
                revenue: movie.revenue.toString(),
                user_id: currentUser?.id,
                // TODO: add the rest to db
                // streaming: movie.streaming,
                // genre: movie.genres,
              };
              addMovieToWatchList(currentUser?.id, addedMovie);
            }}
          >
            Add to watchlist
          </button>
        </div>
        <h2 className="movieTitle">{movie.title}</h2>
        <div className="movieDetailsBody">
          <MovieCard moviePoster={moviePoster} />

          <MovieDetailsOther
            stars={stars}
            director={director}
            trailers={trailers}
            streaming={streaming}
          />
        </div>
        <SimilarMovies />
      </div>
    </>
  );
}
