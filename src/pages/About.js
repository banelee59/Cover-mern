import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="about-container ">
      <Navbar />

      <div className="">
        {/* Hero Section with background image */}
        <section
          className="text-white py-16 bg-cover bg-center w-full h-full"
          style={{
            backgroundImage: "url('/images/about.jpeg')",
            // fallback background color
            // optional: blend color with image
          }}
        >
          <div className="container flex flex-col items-start mx-auto px-16 py-16 rounded-lg">
            <h1 className="text-3xl text-left w-full font-bold mb-6">About CoverUp</h1>
            <p className="text-xl leading-relaxed">
              We understand that planning for the inevitable is never easy, but it is one of the most loving and responsible actions you can take for your family.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="container mx-container flex flex-col items-start mx-auto ">
          {/* Mission */}
          <section className="mt-12">
            <h2 className="text-2xl text-left font-semibold text-[#00c2ff] mb-4">Our Mission</h2>
            <p className="text-gray-700 text-left leading-relaxed">
              At CoverUp, we were founded with a simple yet powerful mission: to provide peace of mind and ensure that every family can give their loved ones a dignified farewell without the burden of financial stress.
            </p>
          </section>

          {/* Story */}
          <section className="mt-16  ">
            <h2 className="text-2xl  font-semibold text-blue-500 mb-4 text-left ">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Born from a deep understanding of the challenges faced by many South African families, CoverUp emerged as a beacon of hope and support in times of need.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our founders, driven by personal experiences and a commitment to community welfare, sought to create a platform that bridges the gap between affordable funeral cover and comprehensive service provision.
            </p>
          </section>

          {/* Why Choose Us */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold text-blue-500 mb-6 text-left">Why Choose CoverUp?</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Peace of Mind</h3>
                <p className="text-gray-700">
                  Knowing that everything will be taken care of allows you and your loved ones to focus on what truly matters—celebrating the life of the departed.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Affordable Options</h3>
                <p className="text-gray-700">
                  We believe that every family deserves a dignified funeral, which is why we offer a range of plans that cater to different financial situations.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Comprehensive Coverage</h3>
                <p className="text-gray-700">
                  Our plans include everything from the provision of coffins and chairs to tents and transport, ensuring all aspects of the funeral are covered.
                </p>
              </div>

              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Community Focused</h3>
                <p className="text-gray-700">
                  We work closely with local funeral parlors and service providers, supporting the community and ensuring culturally relevant services.
                </p>
              </div>
            </div>
          </section>

          {/* Our Promise */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4 text-left">Our Promise</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At CoverUp, we promise to be there for you every step of the way. Our team of compassionate professionals is dedicated to guiding you through the process, providing support and advice tailored to your unique situation.
            </p>
            <p className="text-gray-700 leading-relaxed italic">
              Join us at CoverUp and take the first step towards securing a dignified and stress-free farewell for your loved ones. Because at CoverUp, we believe that peace of mind is priceless.
            </p>
          </section>
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

export default About;
