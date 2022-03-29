import { useState, useEffect } from 'react';
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
import '../../MovieDetail/MovieDetails.css';
import '../UserMovieList/UserMovies.css';
import '../../../components/ReviewForm/ReviewForm.css';

export default function UserMovieDetails(props) {
  const [reviews, setReviews] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  const {
    userMovie,
    removeMovie,
    currentUser,
    fetchSelectedMovie,
    stars,
    director,
    streaming,
    trailers,
  } = props;

  const navigate = useNavigate();
  const { id, movie_id } = useParams();

  useEffect(() => {
    // selected movie details
    fetchSelectedMovie(id, movie_id);

    // eslint-disable-next-line
  }, []);

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

  console.log(userMovie);

  if (!userMovie) {
    return (
      <div>
        <img
          src="https://media.giphy.com/media/N256GFy1u6M6Y/giphy.gif"
          alt="loading"
        />
      </div>
    );
  }

  return (
    <div className="movie-details">
      <div className="back-btn">
        <button
          className="movie-back-btn"
          onClick={() => navigate(`/users/${currentUser?.id}/movies`)}
        >
          Back to my movie list
        </button>
      </div>
      <UserMovieCard
        userMovie={userMovie}
        currentUser={currentUser}
        removieMovie={removeMovie}
      />

      <UserDetailsOther
        stars={stars}
        director={director}
        streaming={streaming}
        trailers={trailers}
      />

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
