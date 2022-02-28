import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X } from '../../assets/index.js';
import { toast } from 'react-toastify';
import {
  deleteReview,
  getMovieReviews,
  createReview,
  updateReview,
} from '../../services/apiConfig/reviews.js';
import AddReviewForm from '../../components/ReviewForm/AddReviewForm';
import Reviews from '../../components/ReviewList/Reviews.jsx';
import '../MovieDetail/MovieDetails.css';
import '../UserMovieList/UserMovies.css';
import '../../components/ReviewForm/ReviewForm.css';

export default function UserMovieDetails(props) {
  const [reviews, setReviews] = useState([]);
  const [toggle, setToggle] = useState(false);

  const { userMovie, removeMovie, currentUser } = props;
  const id = currentUser?.id;
  const navigate = useNavigate();

  useEffect(() => {
    // Get Reviews
    const fetchReviews = async () => {
      console.log(userMovie?.id);
      const movieReviews = await getMovieReviews(id, userMovie?.id);
      setReviews(movieReviews);
    };
    fetchReviews();
  }, [toggle, userMovie?.id, id]);

  // Create Review
  const addReview = async (reviewData) => {
    await createReview(id, userMovie?.id, reviewData);
    setToggle((prevToggle) => !prevToggle);
  };

  // Edit Review
  const editReview = async (review_id, reviewData) => {
    const updatedReview = await updateReview(id, review_id, reviewData);
    console.log(updatedReview);
  };

  // Delete Review
  const removeReview = async (review_id) => {
    await deleteReview(id, userMovie?.id, review_id);
    setToggle((prevToggle) => !prevToggle);
    toast.success('Review Deleted');
  };

  return (
    <div className="movie-details">
      <div className="back-btn">
        <button onClick={() => navigate(`/users/${currentUser?.id}/movies`)}>
          Back to my movie list
        </button>
      </div>
      <div className="movie-card">
        <div className="remove-movie">
          <img
            src={X}
            alt="x icon"
            onClick={() => removeMovie(currentUser?.id, userMovie?.id)}
          />
        </div>
        <div className="info-section">
          <div className="movie-header">
            <h1>{userMovie?.title}</h1>
            <h4>
              {userMovie?.release_year}, {userMovie?.director}
            </h4>
            <h6 className="minutes"> {userMovie?.runtime}</h6>
            <h5 className="movie-details-h5">
              Starring: {userMovie?.starring}
            </h5>

            {/* <h6 className="type">{userMovie.genre}</h6> */}
            <h6 className="type">
              <b>Rated:</b> {userMovie?.rating}
            </h6>
            {/* <h6>
              <b>Box Office:</b> {movie.BoxOffice}
            </h6> */}
            {/* <h6>
              <b>Written By:</b> {movie.Writer}
            </h6> */}
            {/* <h6>
              <b>Awards:</b> {movie.Awards}
            </h6> */}
          </div>
          <div className="movie-desc">
            <h5>Synopsis:</h5>
            <p className="text"> {userMovie?.synopsis}</p>
          </div>
        </div>

        <div className="blur-back">
          <img src={userMovie?.poster} alt={userMovie?.title} />
        </div>
      </div>

      <div className="review-container">
        <AddReviewForm addReview={addReview} />
        <Reviews
          reviews={reviews}
          currentUser={currentUser}
          removeReview={removeReview}
          editReview={editReview}
        />
      </div>
    </div>
  );
}
