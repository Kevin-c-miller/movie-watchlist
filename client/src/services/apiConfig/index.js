import axios from 'axios';

// const baseURL = 'http://localhost:3000';
const baseUrl =
  process.env.NODE_ENV === 'production'
    ? /* link to  heroku app.*/ 'https://peaceful-shore-90420.herokuapp.com'
    : 'http://localhost:3000';

export const api = axios.create({
  baseURL: baseUrl,
});
