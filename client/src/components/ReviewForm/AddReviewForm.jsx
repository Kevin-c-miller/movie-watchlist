import { useState } from 'react';
import './ReviewForm.css';

export default function AddReviewForm({ addReview }) {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0.0);
  const [review, setReview] = useState('');

  return (
    <div className="review-form-page">
      <h2>Leave a review</h2>
      <form
        className="review-form"
        onSubmit={(e) => {
          e.preventDefault();
          const newReview = {
            title,
            rating,
            review,
          };
          addReview(newReview);
        }}
      >
        <input
          type="text"
          placeholder="Review title.."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="number"
          step="0.1"
          min="0"
          max="10"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <input
          type="text"
          placeholder="Leave review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
        <button>Post Review</button>
      </form>
    </div>
  );
}
