import React from 'react';
import { Link } from 'react-router-dom';
import './PageNotFound.css';

export default function PageNotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found-header">
        Cannot find the page you are looking for
      </h1>

      <div className="not-found-links">
        <div className="not-found-homepage">
          <Link to="/">
            <button className="not-found-btn">Home</button>
          </Link>
        </div>
        <div className="not-found-movies">
          <Link to="/movies">
            <button className="not-found-btn">Movies</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
