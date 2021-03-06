import { useNavigate } from 'react-router-dom';
import * as ReactBootStrap from 'react-bootstrap';
import { movieticket } from '../../assets/index.js';
import { toast } from 'react-toastify';
import PreLoginNav from './PreLoginNav.jsx';
import './Nav.css';

export default function Nav(props) {
  const navigate = useNavigate();

  // logging user out and removing token from local storage
  const logOutUser = () => {
    localStorage.removeItem('authToken');
    props.setCurrentUser(null);

    toast.success('Succesfully logged out');
    navigate('/');
  };
  const authToken = localStorage.getItem('authToken');

  // show this navbar if no toek in local storage
  if (!authToken) {
    return <PreLoginNav currentUser={props.currentUser} />;
  } else {
    // show this navbar if there is a token in local storage
    return (
      <div>
        <ReactBootStrap.Navbar
          collapseOnSelect
          expand="xl"
          bg="dark"
          variant="dark"
          sticky="top"
        >
          <ReactBootStrap.Container>
            <ReactBootStrap.Navbar.Brand href="/" className="Nav-header">
              <span className="navbar-header">
                <img src={movieticket} alt="movie ticket icon" />
                Movie Watch-List
              </span>
            </ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <ReactBootStrap.Nav className="me-auto"></ReactBootStrap.Nav>
              <ReactBootStrap.Nav>
                <ReactBootStrap.Nav.Link href="/movies/">
                  Browse Movies
                </ReactBootStrap.Nav.Link>
                <p>|</p>
                <ReactBootStrap.Nav.Link
                  eventKey={2}
                  href={`/users/${props.currentUser?.id}/movies`}
                >
                  {props.currentUser?.username}'s Movie List
                </ReactBootStrap.Nav.Link>
                <p>|</p>
                <ReactBootStrap.Nav.Link
                  href={`/users/${props.currentUser?.id}`}
                >
                  My Account
                </ReactBootStrap.Nav.Link>
                <p>|</p>
                <ReactBootStrap.Button
                  variant="outline-info"
                  onClick={logOutUser}
                >
                  Logout
                </ReactBootStrap.Button>
              </ReactBootStrap.Nav>
            </ReactBootStrap.Navbar.Collapse>
          </ReactBootStrap.Container>
        </ReactBootStrap.Navbar>
      </div>
    );
  }
}
