import axios from 'axios';

const baseURL = 'http://localhost:3000';
// const baseUrl = process.env.NODE_ENV === 'production' ? /* link to your heroku app. Example:*/'https://school-app-test.herokuapp.com/' : 'http://localhost:3000'

export const api = axios.create({
  baseURL: baseURL,
});
