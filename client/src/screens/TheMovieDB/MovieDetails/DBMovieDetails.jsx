import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SimilarMovies from '../SimilarMovies/SimilarMovies';
import './DBMovieDetails.css';
import MovieCard from '../MovieDetailsCard/MovieCard';
import MovieDetailsOther from '../MovieDetailsOther/MovieDetailsOther';

export default function DBMovieDetails(props) {
  const {
    dbMovie,
    fetchDBMovieDetails,
    streaming,
    fetchStreamingProviders,
    fetchMovieCredits,
    director,
    stars,
    similarMovies,
    fetchSimilarMovies,
    trailers,
    fetchMovieTrailer,
    addMovieToWatchList,
    currentUser,
  } = props;

  const { id } = useParams();
  const navigate = useNavigate();

  // currency format for budget/revenue
  // const currencyFormat = (num) => {
  //   return '$' + num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  // };

  const moviePoster = `https://image.tmdb.org/t/p/original${dbMovie?.poster_path}`;

  const actors = stars?.map((actor) => {
    return actor.name;
  });

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
                title: dbMovie.title,
                poster: moviePoster,
                // rating: dbMovie.Rated,
                synopsis: dbMovie.overview,
                director: dbMovie.director,
                starring: dbMovie.actors,
                release_year: parseInt(dbMovie.release_date),
                runtime: dbMovie.runtime,
                user_id: props.currentUser.id,
              };
              addMovieToWatchList(currentUser?.id, addedMovie);
            }}
          >
            Add to watchlist
          </button>
        </div>
        <h2 className="movieTitle">{dbMovie.title}</h2>
        <div className="movieDetailsBody">
          <MovieCard dbMovie={dbMovie} moviePoster={moviePoster} />

          <MovieDetailsOther
            stars={stars}
            director={director}
            streaming={streaming}
            trailers={trailers}
          />
        </div>
        {/* <SimilarMovies similarMovies={similarMovies} /> */}
      </div>
    </>
  );
}
