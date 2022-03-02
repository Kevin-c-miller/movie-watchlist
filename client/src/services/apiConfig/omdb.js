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
  'guys',
  'before',
  'years',
  'times',
  'kill',
  'games',
  'life',
  'amazing',
  'dark',
  'fire',
  'heat',
  'river',
  'captain',
  'school',
  'car',
  'hot',
  'money',
  'spider',
  'one',
  'window',
  'hello',
  'national',
  'treasure',
  'incredible',
  'day',
  'show',
  'super',
];

const randomWord = terms[Math.floor(Math.random() * terms.length)];

export const getMovieList = async () => {
  // const res = await axios.get(`${url}&s=${randomWord}&type=movie&page=${page}`);
  const res = await axios.get(`${url}&s=${randomWord}&type=movie`);
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
