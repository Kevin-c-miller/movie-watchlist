import { useState } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';

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
          setTitle('');
          setRating(0);
          setReview('');
        }}
      >
        <FloatingLabel controlId="floatingInput" label="Title" className="mb-3">
          <Form.Control
            type="text"
            placeholder="title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
          />
        </FloatingLabel>

        <div className="review-rating">
          <input
            type="number"
            step="0.1"
            min="0"
            max="10"
            value={rating}
            placeholder="Rating (0-10)"
            required
            onChange={(e) => setRating(e.target.value)}
          />
        </div>

        <FloatingLabel
          controlId="floatingInput"
          label="Review"
          className="mb-3"
        >
          <Form.Control
            as="textarea"
            rows={5}
            value={review}
            required
            onChange={(e) => setReview(e.target.value)}
          />
        </FloatingLabel>

        <button className="review-btn">Post Review</button>
      </form>
    </div>
  );
}
