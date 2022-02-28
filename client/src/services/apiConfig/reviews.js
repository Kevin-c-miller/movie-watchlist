import { api } from './index';

// Get Reviews
export const getMovieReviews = async (user_id, movie_id) => {
  const res = await api.get(`/users/${user_id}/movies/${movie_id}/reviews`);
  return res.data;
};

//  Post Review
export const createReview = async (user_id, movie_id, reviewData) => {
  const res = await api.post(`/users/${user_id}/movies/${movie_id}/reviews`, {
    review: reviewData,
  });
  return res.data;
};

//  Update Review
export const updateReview = async (
  user_id,
  movie_id,
  review_id,
  reviewData
) => {
  const res = await api.put(
    `/users/${user_id}/movies/${movie_id}/reviews/${review_id}`,
    {
      review: reviewData,
    }
  );
  return res.data;
};

//  Delete Review
export const deleteReview = async (user_id, movie_id, review_id) => {
  const res = await api.delete(
    `/users/${user_id}/movies/${movie_id}/reviews/${review_id}`
  );
  return res.data;
};
