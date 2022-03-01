import React from 'react';
import { MDBFooter, MDBContainer, MDBIcon } from 'mdb-react-ui-kit';
import { github, linkedin, google } from '../../assets/index.js';
import './Footer.css';

export default function Footer() {
  const email = 'kevinmiller3791@gmail.com';

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
            href={email}
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MDBIcon fab icon="linkedin" />
            <img src={linkedin} alt="linkedin icon" className="social-icon" />
          </a>

          <a
            className="btn btn-outline-light btn-floating m-1"
            href="mailto:kevinmiller3791@gmail.com"
            role="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MDBIcon fab icon="google" />
            <img src={google} alt="google icon" className="social-icon" />
          </a>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2020 Copyright:{' '}
        <a className="text-white" href="#">
          {/* placeholder for portfolio link */}
          Kevin Miller
        </a>
      </div>
    </MDBFooter>
  );
}
// background -
