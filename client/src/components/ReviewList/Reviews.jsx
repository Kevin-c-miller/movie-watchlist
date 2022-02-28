import React from 'react';
import DeleteModal from '../Delete/Delete';
import { trash } from '../../assets/index.js';

export default function Reviews(props) {
  const { currentUser, reviews, removeReview, editReview } = props;

  return (
    <div className="reviews">
      <div className="review-page-header">
        <h3>Reviews</h3>
      </div>

      <div className="review-list">
        {reviews.map((review, index) => (
          <div className="movie-reviews" key={index}>
            <div className="review-flex-left">
              <h5>
                <b>{review.title}</b>
              </h5>
              <h6>
                <b>Review By:</b> {review.user.username}
              </h6>
              <h6>
                <b>Movie Rating:</b> {review.rating}
              </h6>
            </div>
            <div className="review-flex-right">
              <p>
                <b>Review:</b>
                <br /> {review.review}
              </p>
            </div>
            <button
              onClick={() => removeReview(review.id)}
              className="review-delete-btn"
            >
              <img
                src={trash}
                alt="trash icon"
                className="review-delete-icon"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
