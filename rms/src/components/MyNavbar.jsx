import React from "react";
import { Link } from 'react-router-dom';

const MyNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#home">Rms</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item d-flex align-items-center p-2">
              <Link className='text-light' to="/booking">Booking</Link>
            </li>
            <li className="nav-item d-flex align-items-center p-2">
              <Link className='text-light' to="/">Order</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
