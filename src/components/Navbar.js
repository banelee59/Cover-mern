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
            <Link to="/" className="hover:text-[#00c2ff]">Home</Link>
            <Link to="/PRODUCTS" className="hover:text-[#00c2ff]">Products</Link>
            <Link to="/about" className="hover:text-[#00c2ff]">About Us</Link>
            <Link to="/contact" className="hover:text-[#00c2ff]">Contact Us</Link>
            <Link to="/quote" className="bg-[#00c2ff] hover:bg-[#00b3eb] text-white px-6 py-2 rounded-md font-semibold transition-colors">
              GET STARTED
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 