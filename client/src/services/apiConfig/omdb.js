import axios from 'axios';

const KEY = process.env.API_KEY;

const url = `http://www.omdbapi.com/?apikey=${KEY}`;

export const getMovieList = async () => {
  const res = await axios.get(`${url}&y=2019`);
  return res.data;
};

export const searchMovie = async (searchValue) => {
  const res = await axios.get(`${url}&s=${searchValue}`);
  return res.data;
};
