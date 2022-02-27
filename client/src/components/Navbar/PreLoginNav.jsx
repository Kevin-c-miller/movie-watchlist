import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { movieticket } from '../../assets/index.js';

export default function PreLoginNav(props) {
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
            <img src={movieticket} alt="movie ticket icon" />
            <span className="navbar-header">Movie Watch-List</span>
          </ReactBootStrap.Navbar.Brand>
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto"></ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
              <ReactBootStrap.Nav.Link href="/login">
                Login
              </ReactBootStrap.Nav.Link>
              <p>|</p>
              <ReactBootStrap.Nav.Link eventKey={2} href="/register">
                Register
              </ReactBootStrap.Nav.Link>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>
    </div>
  );
}
