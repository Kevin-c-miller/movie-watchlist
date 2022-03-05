import axios from 'axios';
const KEY = process.env.REACT_APP_MOVIEDB_KEY;
const url = `https://api.themoviedb.org/3`;

export const getTopRatedMovies = async () => {
  const res = await axios.get(`${url}/movie/top_rated?api_key=${KEY}`);
  return res.data;
};

export const getMovieDBDetails = async (movie_id) => {
  const res = await axios.get(`${url}/movie/${movie_id}?api_key=${KEY}`);
  return res.data;
};

export const getSimilarMovies = async (movie_id) => {
  const res = await axios.get(
    `${url}/movie/${movie_id}/similar?api_key=${KEY}`
  );
  return res.data;
};

export const getSteamingProviders = async (movie_id) => {
  const res = await axios.get(
    `${url}/movie/${movie_id}/watch/providers?api_key=${KEY}`
  );
  return res.data;
};

export const getNowPlayingMovies = async () => {
  const res = await axios.get(`${url}/movie/now_playing?api_key=${KEY}`);
  return res.data;
};

export const getUpcomingMovies = async () => {
  const res = await axios.get(`${url}/movie/upcoming?api_key=${KEY}`);
  return res.data;
};
