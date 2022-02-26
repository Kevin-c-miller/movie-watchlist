import axios from 'axios';
const KEY = process.env.REACT_APP_OMDB_KEY;
const url = `http://www.omdbapi.com/?apikey=${KEY}`;

const terms = [
  'there',
  'thunder',
  'mile',
  'car',
  'world',
  'down',
  'young',
  'love',
  'doctor',
  'president',
  'america',
  'death',
  'house',
  'party',
  'ghost',
  'affair',
  'black',
  'time',
  'hell',
  'west',
  'country',
  'king',
  'adventure',
  'island',
  'return',
  'one',
  'little',
  'big',
  'night',
  'fall',
  'ugly',
  'one',
  'beach',
  'vacation',
  'plane',
  'blue',
  'father',
  'good',
  'fast',
  'house',
  'lost',
  'red',
];

const randomWord = terms[Math.floor(Math.random() * terms.length)];
console.log(randomWord);

export const getMovieList = async () => {
  let page = 1;
  const res = await axios.get(`${url}&s=${randomWord}&type=movie&page=${page}`);
  return res.data;
};

export const searchMovie = async (searchValue) => {
  const res = await axios.get(`${url}&s=${searchValue}`);
  return res.data;
};

export const getMovie = async (movieTitle) => {
  const res = await axios.get(`${url}&t=${movieTitle}`);
  return res.data;
};
