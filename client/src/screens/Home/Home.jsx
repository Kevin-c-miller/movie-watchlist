import { Link } from 'react-router-dom';
import Guest from '../../components/Guest/Guest';
import { Button } from 'react-bootstrap';
import { popcorn } from '../../assets/index.js';
import './Home.css';

export default function Home() {
  return (
    <div className="homepage">
      <div className="homepage-header">
        <h1>Welcome to the Movie WatchList</h1>
      </div>
      <div className="flex-container">
        <div className="image-container">
          <img src={popcorn} alt="p" />
        </div>
        <div className="home-subcontainer">
          <div className="home-subheader">
            <h4>Create a list of movies on your 'To Watch' list!</h4>
          </div>
          <div className="home-about">
            <p>
              Once you marked, completed, you can leave a review, and rating!
            </p>
          </div>

          {/* add image somewhere */}

          <div className="login-signup">
            <Link to="/login">
              <Button className="home-btn">Login</Button>
            </Link>
            <Link to="/register">
              <Button className="home-btn">Register</Button>
            </Link>
          </div>
          <div className="guest">
            <h6>
              Not ready for an account? Check out the site as a{' '}
              <Link to="/movies">Guest</Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
}
