import { useState, useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { X } from '../../../assets/index.js';
import { toast } from 'react-toastify';
import { Card } from 'react-bootstrap';
import {
  deleteReview,
  getMovieReviews,
  createReview,
  updateReview,
} from '../../../services/apiConfig/reviews.js';
import AddReviewForm from '../../../components/ReviewForm/AddReviewForm';
import Reviews from '../../../components/ReviewList/Reviews.jsx';
import UserMovieCard from '../UserMovieCard/UserMovieCard';
import UserDetailsOther from '../UserDetailsOther/UserDetailsOther';
import UserMovieContext from '../../../context/userMovieContext.js';
import { getMovieCredits } from '../../../services/apiConfig/theMovieDb.js';
import '../../MovieDetail/MovieDetails.css';
import '../UserMovieList/UserMovies.css';
import '../../../components/ReviewForm/ReviewForm.css';

export default function UserMovieDetails({
  // userMovie,
  removeMovie,
  currentUser,
  // fetchSelectedMovie,
}) {
  const [reviews, setReviews] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  const { userMovie, fetchUserMovie } = useContext(UserMovieContext);

  const navigate = useNavigate();
  const { id, movie_id } = useParams();

  useEffect(() => {
    // selected movie details
    fetchUserMovie(id, movie_id);
  }, [id, movie_id]);

  console.log(userMovie);

  useEffect(() => {
    // Get Reviews
    const fetchReviews = async () => {
      const movieReviews = await getMovieReviews(id, movie_id);
      setReviews(movieReviews);
    };
    fetchReviews();
  }, [toggle, id, movie_id]);

  // Create Review
  const addReview = async (reviewData) => {
    await createReview(movie_id, userMovie?.id, reviewData);
    setToggle((prevToggle) => !prevToggle);
    toast.success('Review Added!');
  };

  // Edit Review
  const editReview = async (review_id, reviewData) => {
    await updateReview(movie_id, review_id, reviewData);
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
      <h2 className="movieTitle">{userMovie.title}</h2>
      <div className="movieDetailsBody">
        <UserMovieCard currentUser={currentUser} removeMovie={removeMovie} />

        <UserDetailsOther />
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
          <button onClick={showReviewForm} className="movie-back-btn">
            Hide Reviews
          </button>
        </div>
      )}
      {!show && (
        <div className="showReviewBtn">
          <button
            className="movie-back-btn"
            onClick={showReviewForm}
            style={{ marginBottom: '3rem' }}
          >
            Leave a review!
          </button>
        </div>
      )}
    </div>
  );
}
