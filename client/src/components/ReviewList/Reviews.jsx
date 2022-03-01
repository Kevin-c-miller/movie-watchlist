import React from 'react';
import DeleteModal from '../Delete/Delete';
import { trash, review } from '../../assets/index.js';
import { Card, Button } from 'react-bootstrap';

export default function Reviews(props) {
  const { currentUser, reviews, removeReview, editReview } = props;

  return (
    <div className="reviews">
      <div className="review-page-header">
        <img src={review} alt="reviews" className="review-img" />
      </div>

      <div className="review-list">
        {reviews.map((review) => (
          <Card style={{ width: '18rem' }} key={review.id}>
            <Card.Body>
              <Card.Title>{review.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                <b>Review By:</b> {review.user.username} <br /> {review.rating}
                /10
              </Card.Subtitle>
              <Card.Text>{review.review}</Card.Text>
              <Button
                variant="danger"
                onClick={() => removeReview(review.id)}
                className="review-delete-btn"
              >
                <img
                  src={trash}
                  alt="trash icon"
                  className="review-delete-icon"
                />
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}
