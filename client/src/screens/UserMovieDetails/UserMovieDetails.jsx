import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X } from '../../assets/index.js';
import { toast } from 'react-toastify';
import { Card } from 'react-bootstrap';
import {
  deleteReview,
  getMovieReviews,
  createReview,
  updateReview,
} from '../../services/apiConfig/reviews.js';
import AddReviewForm from '../../components/ReviewForm/AddReviewForm';
import Reviews from '../../components/ReviewList/Reviews.jsx';
import { getMovieCredits } from '../../services/apiConfig/theMovieDb.js';
import '../TheMovieDB/MovieDetails/DBMovieDetails.css';
import '../UserMovieList/UserMovies.css';
import '../../components/ReviewForm/ReviewForm.css';

export default function UserMovieDetails({
  userMovie,
  removeMovie,
  currentUser,
  fetchSelectedMovie,
  setStars,
  setDirector,
}) {
  const [reviews, setReviews] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  const navigate = useNavigate();
  const { id, movie_id } = useParams();

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

  useEffect(() => {
    // selected movie details
    fetchSelectedMovie(id, movie_id);
  }, [id]);

  useEffect(() => {
    // Get Reviews
    const fetchReviews = async () => {
      const movieReviews = await getMovieReviews(currentUser?.id, movie_id);
      setReviews(movieReviews);
    };
    fetchReviews();
  }, [toggle, currentUser?.id, movie_id]);

  // Create Review
  const addReview = async (reviewData) => {
    await createReview(movie_id, userMovie?.id, reviewData);
    setToggle((prevToggle) => !prevToggle);
    toast.success('Review Added!');
  };

  // Edit Review
  const editReview = async (review_id, reviewData) => {
    const updatedReview = await updateReview(movie_id, review_id, reviewData);
    console.log(updatedReview);
  };

  // Delete Review
  const removeReview = async (review_id) => {
    await deleteReview(movie_id, userMovie?.id, review_id);
    setToggle((prevToggle) => !prevToggle);
    toast.success('Review Deleted');
  };

  //  show review form
  const showReviewForm = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div className="movieDetails">
      <div className="back-btn">
        <button
          className="movie-back-btn"
          onClick={() => navigate(`/users/${currentUser?.id}/movies`)}
        >
          Back to my movie list
        </button>
      </div>

      <div className="movieDetailsCard">
        <Card className="movie-details-card">
          <Card.Img
            variant="top"
            src={userMovie?.poster}
            alt={userMovie?.title}
            style={{
              height: '600px',
              borderRadius: '35px',
              border: '5px solid #000',
            }}
          />

          <Card.Body>
            <Card.Title>
              <h2>
                <b>{userMovie?.title}</b>
              </h2>
              {/* TODO: Add column on movie table for 'movie-watched' */}

              <img
                src={X}
                alt="x icon"
                style={{
                  height: '25px',
                  width: '25px',
                  background: 'red',
                  borderRadius: '10px',
                }}
                onClick={() => removeMovie(currentUser?.id, userMovie?.id)}
              />
            </Card.Title>
            <h6>
              {userMovie?.release_year}, <b> {userMovie?.director}</b>
            </h6>
            <Card.Text>
              <br />
              <b> {userMovie?.runtime}</b>
              <br />
              <b>Starring: </b> {userMovie?.starring}
              <br />
              <b>Rated:</b> {userMovie?.rating}
              <br />
              <br />
              <b> Synopsis:</b> {userMovie?.synopsis}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
      {show && (
        <div className="review-container">
          <AddReviewForm addReview={addReview} />
          <Reviews
            reviews={reviews}
            currentUser={currentUser}
            removeReview={removeReview}
            editReview={editReview}
          />
        </div>
      )}
      {!show && (
        <button
          className="movie-back-btn"
          onClick={showReviewForm}
          style={{ marginBottom: '3rem' }}
        >
          Leave a review!
        </button>
      )}
    </div>
  );
}
