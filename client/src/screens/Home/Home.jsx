import { Link } from 'react-router-dom';
import Guest from '../../components/Guest/Guest';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Movie WatchList</h1>
      <h4>Create a list of movies on your 'To Watch' list!</h4>
      <p>Once you marked, completed, you can leave a review, and rating!</p>

      <Link to="/login">
        <button>Login</button>
      </Link>
      <Link to="/register">
        <button>Register</button>
      </Link>

      <h6>
        Not ready for an account? Check out the site as a{' '}
        <Link to="/movies">Guest</Link>
      </h6>
    </div>
  );
}
