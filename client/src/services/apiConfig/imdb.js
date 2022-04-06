import axios from 'axios';
const KEY = process.env.REACT_APP_IMDB_API_KEY;
const url = `https://imdb-api.com/en/API`;

export const getMovieTrailer = async (movie_id) => {
  try {
    const res = await axios.get(`${url}/Trailer/${KEY}/${movie_id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieWiki = async (movie_id) => {
  try {
    const res = await axios.get(`${url}/Wikipedia/${KEY}/${movie_id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieAwards = async (movie_id) => {
  try {
    const res = await axios.get(`${url}/Awards/${KEY}/${movie_id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieFAQs = async (movie_id) => {
  try {
    const res = await axios.get(`${url}/FAQ/${KEY}/${movie_id}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getComingSoon = async () => {
  try {
    const res = await axios.get(`${url}/ComingSoon/${KEY}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};

export const getAllTimeBoxOffice = async () => {
  try {
    const res = await axios.get(`${url}/BoxOfficeAllTime/${KEY}`);
    return res.data;
  } catch (error) {
    console.error(error);
  }
};
