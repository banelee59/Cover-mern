import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#376c6c] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Logo and Description */}
        <div>
          <h2 className="text-2xl font-bold mb-4">COVER UP</h2>
          <p>
            CoverUp Insurance offers comprehensive insurance solutions to protect what matters most.
            Located in the heart of Johannesburg, we are dedicated to providing personalized service and peace of mind.
          </p>
        </div>

        {/* Office Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Our Office</h3>
          <p>Address: Thornhill Office Park 84, Bekker road, Midrand 1685</p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
          <p>Email: info@coverupquotes.co.za</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Products</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">Get Started</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-8 border-t border-white/20 pt-4 text-center text-sm">
        <p>© 2024 CoverUp Insurance | All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
