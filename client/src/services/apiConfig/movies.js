import { api } from './index.js';

// Get All Movies
export const getUserMovies = async (user_id) => {
  const res = await api.get(`/users/${user_id}/movies`);
  return res.data;
};

// Get 1 Movie
export const getOneMovie = async (user_id, movie_id) => {
  const res = await api.get(`/users/${user_id}/movies/${movie_id}`);
  return res.data;
};

// Create Movie
export const createMovie = async (user_id, movieData) => {
  const res = await api.post(`/users/${user_id}/movies`, {
    movie: movieData,
  });
  return res.data;
};

// Update Movie
export const updateMovie = async (user_id, movie_id, movieData) => {
  const res = await api.put(`/users/${user_id}/movies/${movie_id}`, {
    movie: movieData,
  });
  return res.data;
};

// Delete Movie
export const deleteMovie = async (user_id, movie_id) => {
  const res = api.delete(`/users/${user_id}/movies/${movie_id}`);
  return res.data;
};
