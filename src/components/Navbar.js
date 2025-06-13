import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link to="/" className="logo">
          <img 
            src="/images/coverupLogo.png" 
            alt="CoverUp Logo" 
            className="logo-image"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="nav-links hidden md:flex">
          <Link to="/" className="hover:text-[#00c2ff]">Home</Link>
          
          <Link to="/about" className="hover:text-[#00c2ff]">About Us</Link>
          <Link to="/contact" className="hover:text-[#00c2ff]">Contact Us</Link>
          <Link to="/register-funeral-parlour" className="bg-[#00c2ff] hover:bg-[#00b3eb] text-white px-6 py-2 rounded-md font-semibold transition-colors">
            REGISTER FUNERAL PARLOUR
          </Link>
        </div>

        {/* Burger Menu Button */}
        <button 
          className="md:hidden burger-menu"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className={`burger-bar ${isOpen ? 'open' : ''}`}></div>
        </button>

        {/* Mobile Navigation */}
        <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          
          <Link to="/about" onClick={toggleMenu}>About Us</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact Us</Link>
          <Link to="/register-funeral-parlour" onClick={toggleMenu} className="mobile-cta">
            REGISTER FUNERAL PARLOUR
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 