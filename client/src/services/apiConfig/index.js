import axios from 'axios';

// const baseURL = 'http://localhost:3000';
const baseUrl =
  process.env.NODE_ENV === 'production'
    ? 'https://rails-moviedb-backend.herokuapp.com'
    : 'http://localhost:3000';

export const api = axios.create({
  baseURL: baseUrl,
});
