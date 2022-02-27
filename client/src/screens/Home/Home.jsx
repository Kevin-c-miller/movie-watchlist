import { Link } from 'react-router-dom';
import Guest from '../../components/Guest/Guest';
import { Button } from 'react-bootstrap';
import { netflix2 } from '../../assets/index.js';
import Signup from '../Register/Signup';
import './Home.css';

export default function Home() {
  return (
    <div className="homepage">
      <div className="homepage-header">
        <h1>Welcome to Movie-WatchList</h1>
      </div>
      <div className="flex-container">
        <div className="image-container">
          <img src={netflix2} alt="netflix app on laptop" />
        </div>
        <div className="subcontainer">
          <div className="home-subheader">
            <h4>
              Create a list of movies on your 'To Watch' list!
              <br />
              <br />
              Once you marked, completed, you can leave a review, and rating!
            </h4>
          </div>
          <div className="register-guest">
            <div className="register">
              <Signup />
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
    </div>
  );
}

// background - <a href="https://www.freepik.com/photos/foggy">Foggy photo created by kjpargeter - www.freepik.com</a>
