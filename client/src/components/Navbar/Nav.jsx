import * as ReactBootStrap from 'react-bootstrap';
import { movieticket } from '../../assets/index.js';
import './Nav.css';

export default function Nav(props) {
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
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}
