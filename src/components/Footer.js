import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-info">
          <Link to="/" className="footer-logo">COVER UP</Link>
          <p>CoverUp Insurance offers comprehensive insurance solutions to protect what matters most. Located in the heart of Johannesburg, we are dedicated to providing personalized service and peace of mind.</p>
        </div>
        
        <div className="footer-office">
          <h3>Our Office</h3>
          <p>Address: Thornhill Office Park 84, Bekker road, Midrand 1685</p>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@coverupquotes.co.za</p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/" className="hover:text-[#00c2ff] transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#00c2ff] transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-[#00c2ff] transition-colors">Contact Us</Link></li>
            <li><Link to="/get-started" className="hover:text-[#00c2ff] transition-colors">Get a Quote</Link></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2024 CoverUp Insurance | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer; 