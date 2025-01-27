import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
    
        
      

      <div className="contact-content">
        <div className="contact-grid">
          <div className="contact-form-section">
            <h2 className="text-5xl font-bold mb-8">Send us a Message</h2>
            <form className="contact-form space-y-6">
              <div className="form-group">
                <input 
                  type="text" 
                  placeholder="Full Name *" 
                  required 
                  className="w-full px-6 py-4 text-lg rounded-lg border border-gray-300 focus:border-[#00c2ff]"
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  placeholder="Email Address *" 
                  required 
                  className="w-full px-6 py-4 text-lg rounded-lg border border-gray-300 focus:border-[#00c2ff]"
                />
              </div>
              <div className="form-group">
                <input 
                  type="tel" 
                  placeholder="Contact Number *" 
                  required 
                  className="w-full px-6 py-4 text-lg rounded-lg border border-gray-300 focus:border-[#00c2ff]"
                />
              </div>
              <div className="form-group">
                <textarea 
                  placeholder="Your Message *" 
                  rows="8"
                  required 
                  className="w-full px-4 py-2 text-lg rounded-lg border border-gray-300 focus:border-[#00c2ff] resize-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="submit-btn w-full px-6 py-4 text-lg font-medium bg-[#00c2ff] text-white rounded-lg hover:bg-[#00b3eb]"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-image-section">
            <div className="image-container !w-64">
              <img 
                src="/images/list-image.png" 
                alt="Customer Support" 
                className="!w-64 !h-auto !object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer-content">
          <div className="footer-info">
            <div className="footer-logo">COVER UP</div>
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
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
              <li>Get a Quote</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 CoverUp Insurance | All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact; 