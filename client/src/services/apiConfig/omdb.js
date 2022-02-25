import axios from 'axios';

const KEY = process.env.REACT_APP_OMDB_KEY;
console.log(KEY);

const url = `http://www.omdbapi.com/?apikey=${KEY}`;

const randomYear = Math.floor(Math.random() * (2021 - 1975 + 1) + 1975);
console.log(randomYear);

export const getMovieList = async () => {
  const res = await axios.get(`${url}&s=th &y=${randomYear}`);
  return res.data;
};

export const searchMovie = async (searchValue) => {
  const res = await axios.get(`${url}&s=${searchValue}`);
  return res.data;
};
