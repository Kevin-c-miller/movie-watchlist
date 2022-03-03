import React from 'react';
import { trash } from '../../assets/index.js';
import { Card, Button } from 'react-bootstrap';

export default function Reviews(props) {
  const { reviews, removeReview } = props;

  if (reviews.length === 0) {
    return (
      <div className="reviews">
        <div className="review-page-header">
          <h3
            style={{
              fontFamily: 'Permanent Marker, cursive',
              fontSize: '3rem',
              color: '#fff',
            }}
          >
            Reviews
          </h3>
        </div>
        <h5 style={{ color: '#fff', textAlign: 'center', margin: '1rem' }}>
          No reviews for this movie yet
        </h5>
      </div>
    );
  }

  return (
    <div className="reviews">
      <div className="review-page-header">
        <h3
          style={{
            fontFamily: 'Permanent Marker, cursive',
            fontSize: '3rem',
            color: '#fff',
          }}
        >
          Reviews
        </h3>
      </div>

      <div className="review-list">
        {reviews.map((review) => (
          <Card
            style={{ width: '18rem' }}
            key={review.id}
            className="review-card"
          >
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
