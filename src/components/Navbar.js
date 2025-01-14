import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="logo">
            <img 
              src="/images/coverupLogo.png" 
              alt="CoverUp Logo" 
              className="logo-image"
            />
          </Link>
          <div className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/PRODUCTS">Products</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/quote" className="quote-button">GET STARTED</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 