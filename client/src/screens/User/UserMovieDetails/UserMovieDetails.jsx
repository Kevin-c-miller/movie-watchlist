import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  deleteReview,
  getMovieReviews,
  createReview,
  updateReview,
} from '../../../services/apiConfig/reviews.js';
import UserMovieCard from '../UserMovieCard/UserMovieCard.jsx';
import AddReviewForm from '../../../components/ReviewForm/AddReviewForm';
import Reviews from '../../../components/ReviewList/Reviews.jsx';
import '../UserMovieList/UserMovies.css';
import '../../../components/ReviewForm/ReviewForm.css';
import UserDetailsOther from '../UserDetailsOther/UserDetailsOther.jsx';

export default function UserMovieDetails(props) {
  const [reviews, setReviews] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [show, setShow] = useState(false);

  const {
    userMovie,
    removeMovie,
    currentUser,
    fetchSelectedMovie,
    streaming,
    director,
    stars,
    trailers,
    fetchStreamingProviders,
    fetchMovieCredits,
    fetchSimilarMovies,
    fetchMovieTrailer,
  } = props;

  const navigate = useNavigate();
  const { id, movie_id } = useParams();

  useEffect(() => {
    fetchSelectedMovie(id, movie_id);
    fetchMovieTrailer(movie_id);
    fetchStreamingProviders(movie_id);
    fetchMovieCredits(movie_id);
    fetchSimilarMovies(movie_id);
  }, [id, movie_id]);

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

  console.log(userMovie?.poster);

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
//  <>
//         <Card style={{ width: '30rem' }} className="movie-details-card">
//           <Card.Img
//             variant="top"
//             src={userMovie.poster}
//             alt={userMovie?.title}
//             style={{
//               height: '600px',
//               width: '29.5rem',
//               borderRadius: '35px',
//               border: '5px solid #000',
//             }}
//           />
//           <Card.Body>
//             <Card.Title>
//               <h2>
//                 <b>{userMovie.title}</b>
//               </h2>
//               <img
//                 src={X}
//                 alt="x icon"
//                 style={{
//                   height: '25px',
//                   width: '25px',
//                   background: 'red',
//                   borderRadius: '10px',
//                 }}
//                 onClick={() => removeMovie(currentUser?.id, userMovie?.id)}
//               />
//             </Card.Title>
//             <Card.Text>
//               {userMovie?.release_year}, <b> {userMovie?.director}</b>
//               <br />
//               <b> {userMovie?.runtime}</b>
//               <br />
//               <b>Starring: </b> {userMovie?.starring}
//               <br />
//               <b>Rated:</b> {userMovie?.rating}
//               <br />
//               <br />
//               <b> Synopsis:</b> {userMovie?.synopsis}
//               {/* TODO: add these in once columns added to DB */}
//               {/* <b>Genre: </b> {userMovie?.Genre} */}
//               {/* <b>Box Office:</b> {userMovie?.BoxOffice} */}
//               {/* <b>Written By:</b> {userMovie?.Writer} */}
//               {/* <b>Awards:</b> {userMovie?.Awards} */}
//               </Card.Text>
//               </Card.Body>
//             </Card>

//           </>
