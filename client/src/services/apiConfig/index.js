import axios from 'axios';

// const baseURL = 'http://localhost:3000';
const baseUrl =
  process.env.NODE_ENV === 'production'
<<<<<<< HEAD
    ? /* link to  heroku app.*/ 'https://peaceful-shore-90420.herokuapp.com'
=======
    ? /* link to your heroku app. Example:*/ 'https://peaceful-shore-90420.herokuapp.com'
>>>>>>> edab054fe49df654b5ea7a2559077e7466135c67
    : 'http://localhost:3000';

export const api = axios.create({
  baseURL: baseUrl,
});
