import React from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  return (
    <div className="about-container">
     
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-[#00c2ff] text-white py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h1 className="text-3xl font-bold mb-6">About CoverUp</h1>
            <p className="text-xl leading-relaxed">
              We understand that planning for the inevitable is never easy, but it is one of the most loving and responsible actions you can take for your family.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto px-6 py-16">
          {/* Mission */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-[#00c2ff] mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              At CoverUp, we were founded with a simple yet powerful mission: to provide peace of mind and ensure that every family can give their loved ones a dignified farewell without the burden of financial stress.
            </p>
          </section>

          {/* Story */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Story</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Born from a deep understanding of the challenges faced by many South African families, CoverUp emerged as a beacon of hope and support in times of need.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our founders, driven by personal experiences and a commitment to community welfare, sought to create a platform that bridges the gap between affordable funeral cover and comprehensive service provision.
            </p>
          </section>

          {/* Why Choose Us */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-blue-500 mb-6">Why Choose CoverUp?</h2>
            <div className="space-y-8">
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Peace of Mind</h3>
                <p className="text-gray-700">Knowing that everything will be taken care of allows you and your loved ones to focus on what truly matters—celebrating the life of the departed.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Affordable Options</h3>
                <p className="text-gray-700">We believe that every family deserves a dignified funeral, which is why we offer a range of plans that cater to different financial situations.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Comprehensive Coverage</h3>
                <p className="text-gray-700">Our plans include everything from the provision of coffins and chairs to tents and transport, ensuring all aspects of the funeral are covered.</p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-6">
                <h3 className="text-xl font-medium text-gray-900 mb-2">Community Focused</h3>
                <p className="text-gray-700">We work closely with local funeral parlors and service providers, supporting the community and ensuring culturally relevant services.</p>
              </div>
            </div>
          </section>

          {/* Our Promise */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold text-blue-500 mb-4">Our Promise</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              At CoverUp, we promise to be there for you every step of the way. Our team of compassionate professionals is dedicated to guiding you through the process, providing support and advice tailored to your unique situation.
            </p>
            <p className="text-gray-700 leading-relaxed italic">
              Join us at CoverUp and take the first step towards securing a dignified and stress-free farewell for your loved ones. Because at CoverUp, we believe that peace of mind is priceless.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About; 