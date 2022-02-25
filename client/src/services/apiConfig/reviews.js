import { api } from './index';

// Get Reviews
export const getMovieReviews = async (movie_id) => {
  const res = await api.get(`/movies/${movie_id}/reviews`);
  return res.data;
};

//  Post Review
export const createReview = async (movie_id, reviewData) => {
  const res = await api.post(`/movies/${movie_id}/reviews`, {
    review: reviewData,
  });
  return res.data;
};

//  Update Review
export const editReview = async (movie_id, review_id, reviewData) => {
  const res = await api.put(`/movies/${movie_id}/reviews/${review_id}`, {
    review: reviewData,
  });
  return res.data;
};

//  Delete Review
export const deleteReview = async (movie_id, review_id) => {
  const res = await api.delete(`/movies/${movie_id}/reviews/${review_id}`);
  return res.data;
};
