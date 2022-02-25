import { api } from './index';

// Get All Movies
export const getAllMoies = async () => {
  const res = await api.get('/movies');
  return res.data;
};

// Get 1 Movie
export const getOneMovie = async (movie_id) => {
  const res = await api.get(`movies/${movie_id}`);
  return res.data;
};

// Create Movie
export const createMovie = async (movieData) => {
  const res = await api.post('/movies', { movie: movieData });
  return res.data;
};

// Update Movie
export const updateMovie = async (movie_id, movieData) => {
  const res = await api.put(`/movies/${movie_id}`, { movie: movieData });
  return res.data;
};

// Delete Movie
export const deleteMovie = async (movie_id) => {
  const res = api.delete(`/movies/${movie_id}`);
  return res.data;
};
