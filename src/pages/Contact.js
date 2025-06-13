import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs.sendForm(
      'service_8mlreqk', // Your EmailJS service ID
      'template_gzqy8vm', // Your EmailJS template ID
      form.current,
      'HSU9pLEF7KwdhfRSy' // Your EmailJS public key
    )
    .then((result) => {
      setStatus('success');
      form.current.reset();
      setTimeout(() => setStatus(''), 5000);
    }, (error) => {
      setStatus('error');
      console.error('EmailJS Error:', error);
      setTimeout(() => setStatus(''), 5000);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 flex flex-col">
      {/* Contact Form Section */}
      <div className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
            {/* Form Section */}
            <div className="bg-white p-8 rounded-lg shadow-2xl transform transition-all duration-300 hover:scale-105">
              <h2 className="text-4xl font-bold mb-6 text-gray-800">Send us a Message</h2>
              
              {/* Status Messages */}
              {status === 'success' && (
                <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
                  Message sent successfully!
                </div>
              )}
              {status === 'error' && (
                <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
                  Failed to send message. Please try again.
                </div>
              )}
              {status === 'sending' && (
                <div className="mb-4 p-4 bg-blue-100 text-blue-700 rounded">
                  Sending message...
                </div>
              )}

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="First Name *"
                      required
                      className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:border-[#00c2ff] focus:ring-2 focus:ring-[#00c2ff] transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Last Name *"
                      required
                      className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:border-[#00c2ff] focus:ring-2 focus:ring-[#00c2ff] transition-all"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email Address *"
                    required
                    className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:border-[#00c2ff] focus:ring-2 focus:ring-[#00c2ff] transition-all"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone_number"
                    placeholder="Phone Number *"
                    required
                    className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:border-[#00c2ff] focus:ring-2 focus:ring-[#00c2ff] transition-all"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message *"
                    rows="5"
                    required
                    className="w-full px-4 py-3 text-gray-700 border border-gray-300 rounded-lg focus:border-[#00c2ff] focus:ring-2 focus:ring-[#00c2ff] resize-none transition-all"
                  ></textarea>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3 bg-gradient-to-r from-[#00c2ff] to-[#0078ff] text-white rounded-lg hover:from-[#00b3eb] hover:to-[#0066cc] transition-all font-medium transform hover:scale-105 disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                  </button>
                </div>
              </form>
            </div>

            {/* Image Section */}
            <div className="hidden lg:block">
              <img
                src="/images/contact.png"
                alt="Customer Support"
                className="w-full h-auto object-contain transform transition-all duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>

     {/* Footer */}
     <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold mb-4">COVER UP</div>
              <p className="text-gray-300 text-sm">CoverUp Insurance offers comprehensive insurance solutions to protect what matters most. Located in the heart of Johannesburg, we are dedicated to providing personalized service and peace of mind.</p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Our Office</h3>
              <p className="text-gray-300 text-sm">Address: Thornhill Office Park 84, Bekker road, Midrand 1685</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-300 text-sm">Email: info@coverupquotes.co.za</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Home</li>
                <li>Products</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Get Started</li>
              </ul>
            </div>
          </div>
          
        </div>
         {/* Bottom line and copyright */}
  <div className="border-t border-gray-700 py-4 text-center text-sm text-white">
    <p>© 2024 CoverUp Insurance | All rights reserved</p>
  </div>
      </footer>
    </div>
  );
};

export default Contact;
