import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
    
        
      

      <div className="contact-content py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
            {/* Form Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-2 text-gray-800">Send us a Message</h2>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-2">
                  <div className="form-group">
                    <input 
                      type="text" 
                      placeholder="First Name *" 
                      required 
                      className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:border-[#00c2ff] focus:ring-1 focus:ring-[#00c2ff]"
                    />
                  </div>
                  <div className="form-group">
                    <input 
                      type="text" 
                      placeholder="Last Name *" 
                      required 
                      className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:border-[#00c2ff] focus:ring-1 focus:ring-[#00c2ff]"
                    />
                  </div>
                </div>
                
                <div className="form-group">
                  <input 
                    type="email" 
                    placeholder="Email Address *" 
                    required 
                    className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:border-[#00c2ff] focus:ring-1 focus:ring-[#00c2ff]"
                  />
                </div>
                
                <div className="form-group">
                  <input 
                    type="tel" 
                    placeholder="Phone Number *" 
                    required 
                    className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:border-[#00c2ff] focus:ring-1 focus:ring-[#00c2ff]"
                  />
                </div>
                
                <div className="form-group">
                  <textarea 
                    placeholder="Your Message *" 
                    rows="5"
                    required 
                    className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:border-[#00c2ff] focus:ring-1 focus:ring-[#00c2ff] resize-none"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full py-3 bg-[#00c2ff] text-white rounded-lg hover:bg-[#00b3eb] transition-colors font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>

            

              {/* Image positioned at bottom right */}
              <div className="absolute bottom-0 right-0">
                <img 
                  src="/images/contact.png" 
                  alt="Customer Support" 
                  className="w-96 h-auto object-contain"
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