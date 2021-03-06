import React from 'react';
import { MDBFooter, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';
import { github, linkedin, google, tmdb } from '../../assets/index.js';
import './Footer.css';

export default function Footer() {
  return (
    <MDBFooter className="bg-dark text-center text-white">
      <MDBContainer className="p-4 pb-0">
        <section className="mb-4">
          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://github.com/Kevin-c-miller"
            target="_blank"
            rel="noopener noreferrer"
            role="button"
          >
            <MDBIcon fab icon="github" />
            <img src={github} alt="github icon" className="social-icon" />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="https://www.linkedin.com/in/kevin-c-miller/"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MDBIcon fab icon="linkedin" />
            <img src={linkedin} alt="linkedin icon" className="social-icon" />
          </a>
        </section>
      </MDBContainer>

      <div className="footer-bottom">
        <div
          className="text-center p-3 footer-name"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
        >
          © 2022 Copyright:{' '}
          <a
            className="text-white portfolio-link"
            href="https://kevin-c-miller.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kevin Miller
          </a>
        </div>
        <div className="logos">
          <a
            href="https://www.themoviedb.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={tmdb} alt="tmdb logo" />
          </a>
        </div>
      </div>
    </MDBFooter>
  );
}
