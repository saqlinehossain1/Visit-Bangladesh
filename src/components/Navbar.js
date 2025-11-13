import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <h2>Visit Bangladesh</h2>
        </div>
        <ul className="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#destinations">Destinations</a></li>
          <li><a href="#events">Events</a></li>
          <li><a href="#guides">Guides</a></li>
          <li><a href="#about">About</a></li>
        </ul>
        <div className="nav-buttons">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;