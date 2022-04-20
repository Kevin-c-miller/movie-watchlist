import axios from 'axios';
const KEY = process.env.REACT_APP_MOVIEDB_KEY;
const url = `https://api.themoviedb.org/3`;

export const searchMovie = async (searchValue) => {
  const res = await axios.get(
    `${url}/search/movie?api_key=${KEY}&query=${searchValue}`
  );
  console.log(res.data);
  return res.data.results;
};

export const getTopRatedMovies = async () => {
  try {
    const res = await axios.get(`${url}/movie/top_rated?api_key=${KEY}`);
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getPopularMovies = async () => {
  try {
    const res = await axios.get(`${url}/movie/popular?api_key=${KEY}`);
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieDBDetails = async (movie_id) => {
  try {
    const res = await axios.get(`${url}/movie/${movie_id}?api_key=${KEY}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieTrailer = async (movie_id) => {
  try {
    const res = await axios.get(
      `${url}/movie/${movie_id}/videos?api_key=${KEY}`
    );
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getSimilarMovies = async (movie_id) => {
  try {
    const res = await axios.get(
      `${url}/movie/${movie_id}/similar?api_key=${KEY}`
    );
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getSteamingProviders = async (movie_id) => {
  try {
    const res = await axios.get(
      `${url}/movie/${movie_id}/watch/providers?api_key=${KEY}`
    );
    return res.data.results.US;
  } catch (error) {
    console.error(error);
  }
};

export const getNowPlayingMovies = async () => {
  try {
    const res = await axios.get(`${url}/movie/now_playing?api_key=${KEY}`);
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};


export const getUpcomingMovies = async () => {
  try {
    const res = await axios.get(`${url}/movie/upcoming?api_key=${KEY}`);
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieCredits = async (movie_id) => {
  try {
    const res = await axios.get(
      `${url}/movie/${movie_id}/credits?api_key=${KEY}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

// not currently in use
export const getLatest = async () => {
  try {
    const res = await axios.get(`${url}/movie/latest?api_key=${KEY}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

// not currently in use
export const getRecommendations = async (movie_id) => {
  try {
    const res = await axios.get(
      `${url}/movie/${movie_id}/recommendations?api_key=${KEY}`
    );
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
