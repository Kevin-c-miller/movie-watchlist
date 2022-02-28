import React from 'react';

export default function Reviews(props) {
  const { currentUser, reviews, deleteReview, editReview } = props;

  return (
    <div className="movie-reviews">
      <h6>Reviews</h6>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div className="movie-reviews">
            <h5>Title: {review.title}</h5>
            <h6>Review By: {review.user.username}</h6>
            <h6>Movie Rating: {review.rating}</h6>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
