import axios from 'axios';
const KEY = process.env.REACT_APP_MOVIEDB_KEY;
const TOKEN = process.env.REACT_APP_API_TOKEN;
const url = `https://api.themoviedb.org/3`;

export const searchMovie = async (searchValue) => {
  const res = await axios.get(
    `${url}/search/movie?api_key=${KEY}&query=${searchValue}`
  );
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

//  TV SHOWS //

// Top Rated
export const getPopularTvShows = async () => {
  const res = await axios.get(`${url}/tv/top_rated`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  });

  return res.data.results;
};

// Trending
export const getTrendingTvShows = async () => {
  const res = await axios.get(`${url}/trending/tv/day`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return res.data.results;
};

// trailers/videos
export const getTvShowVideos = async (id) => {
  const res = await axios.get(`${url}/tv/${id}/videos`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return res.data.results;
};

// get show details
export const getShowDetails = async (show_id) => {
  const res = await axios.get(`${url}/tv/${show_id}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return res.data;
};

// tv streaming
export const getTvShowStreaming = async (show_id) => {
  const res = await axios.get(`${url}/tv/${show_id}/watch/providers`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${TOKEN}`,
    },
  });
  return res.data;
};

// similar tv series
export const getSimilarTvShows = async (show_id) => {
  try {
    const res = await axios.get(`${url}/tv/${show_id}/similar?api_key=${KEY}`);
    return res.data.results;
  } catch (error) {
    console.error(error);
  }
};

// tv credits
export const getTvCredits = async (show_id) => {
  try {
    const res = await axios.get(`${url}/tv/${show_id}/credits?api_key=${KEY}`);

    return res.data;
  } catch (error) {
    console.error(error);
  }
};
