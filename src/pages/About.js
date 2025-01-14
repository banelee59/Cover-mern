import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-hero">
        <h1>About Us</h1>
      </div>

      <div className="about-content">
        <section className="intro-section">
          <p className="lead-text">
            At CoverUp, we understand that planning for the inevitable is never easy, but it is one of the most loving and responsible actions you can take for your family. We were founded with a simple yet powerful mission: to provide peace of mind and ensure that every family can give their loved ones a dignified farewell without the burden of financial stress.
          </p>
        </section>

        <section className="story-section">
          <h2>Our Story</h2>
          <p>
            Born from a deep understanding of the challenges faced by many South African families, CoverUp emerged as a beacon of hope and support in times of need. Our founders, driven by personal experiences and a commitment to community welfare, sought to create a platform that bridges the gap between affordable funeral cover and comprehensive service provision.
          </p>
        </section>

        <section className="why-choose-section">
          <h2>Why Choose CoverUp?</h2>
          <div className="features-grid">
            <div className="feature">
              <h3>Peace of Mind</h3>
              <p>Knowing that everything will be taken care of allows you and your loved ones to focus on what truly matters—celebrating the life of the departed.</p>
            </div>
            <div className="feature">
              <h3>Affordable Options</h3>
              <p>We believe that every family deserves a dignified funeral, which is why we offer a range of plans that cater to different financial situations.</p>
            </div>
            <div className="feature">
              <h3>Comprehensive Coverage</h3>
              <p>Our plans include everything from the provision of coffins and chairs to tents and transport, ensuring all aspects of the funeral are covered.</p>
            </div>
            <div className="feature">
              <h3>Community Focused</h3>
              <p>We work closely with local funeral parlors and service providers, supporting the community and ensuring culturally relevant services.</p>
            </div>
          </div>
        </section>

        <section className="offerings-section">
          <h2>What We Offer</h2>
          <p>
            CoverUp isn't just another burial scheme; it's a comprehensive solution designed to make funeral planning as seamless and stress-free as possible. Our platform allows you to compare various funeral plans from multiple providers, ensuring you find the perfect fit for your needs and budget. From basic coverage that includes essential services like coffins, chairs, and tents to more elaborate plans that cater to every detail, we have something for everyone.
          </p>
        </section>

        <section className="promise-section">
          <h2>Our Promise</h2>
          <p>
            At CoverUp, we promise to be there for you every step of the way. Our team of compassionate professionals is dedicated to guiding you through the process, providing support and advice tailored to your unique situation. We are more than just a service provider; we are a partner in ensuring your peace of mind.
          </p>
          <p className="closing">
            Join us at CoverUp and take the first step towards securing a dignified and stress-free farewell for your loved ones. Because at CoverUp, we believe that peace of mind is priceless.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About; 