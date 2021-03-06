import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { netflix3 } from '../../assets/index.js';

import './Home.css';

export default function Home() {
  return (
    <div className="homepage">
      <div className="homepage-header">
        <h1>Welcome to Movie-WatchList</h1>
      </div>
      <div className="flex-container">
        <div className="image-container">
          <img
            src={netflix3}
            alt="netflix app on laptop"
            className="home-img"
          />
        </div>
        <div className="subcontainer">
          <div className="home-subheader">
            <h4>
              Create a list of movies on your 'To Watch' list!
              <br />
              <br />
              Once you watch a movie, you can leave a review and rating!
            </h4>
          </div>
          <div className="home-links">
            <div className="button-links">
              <Link to="/login">
                <Button variant="outline-light" className="home-btns">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button variant="outline-light" className="home-btns">
                  Signup
                </Button>
              </Link>
            </div>

            <div className="guest">
              <h6 className="guest-link">
                Not ready for an account? Check out the site as a{' '}
                <Link to="/login">Guest</Link>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="background-credit">
        <a href="https://www.freepik.com/photos/foggy">
          Foggy photo created by kjpargeter - www.freepik.com
        </a>
      </div>
    </div>
  );
}
