import React from 'react';

// BlueCircles component replacement
const BlueCircles = ({ className }) => {
  return (
    <div className={`absolute opacity-20 ${className}`}>
      <div className="w-32 h-32 bg-blue-500 rounded-full blur-xl"></div>
      <div className="w-24 h-24 bg-blue-400 rounded-full blur-lg -mt-16 ml-8"></div>
      <div className="w-16 h-16 bg-blue-300 rounded-full blur-md -mt-12 ml-4"></div>
    </div>
  );
};

// Section component replacement
const Section = ({ title, description }) => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-8 mb-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        {title}
      </h2>
      <div className="text-lg text-gray-600 leading-relaxed">
        {typeof description === 'string' ? (
          <p>{description}</p>
        ) : (
          description
        )}
      </div>
    </section>
  );
};

const AboutPage = () => {
  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <div className="about-container relative min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <BlueCircles className="round-1 top-10 left-10" />
      
      <div className="pt-16 pb-8">
        <Section
          title="About Us"
          description="At CoverUp, we understand that planning for the inevitable is never
          easy, but it is one of the most loving and responsible actions you can
          take for your family. We were founded with a simple yet powerful
          mission: to provide peace of mind and ensure that every family can
          give their loved ones a dignified farewell without the burden of
          financial stress."
        />
      </div>

      <BlueCircles className="round-2 top-80 right-10" />
      
      <Section
        title="Our Story"
        description="Born from a deep understanding of the challenges faced by many South
        African families, CoverUp emerged as a beacon of hope and support in
        times of need. Our founders, driven by personal experiences and a
        commitment to community welfare, sought to create a platform that
        bridges the gap between affordable funeral cover and comprehensive
        service provision."
      />

      <BlueCircles className="round-3 top-[800px] left-20" />
      
      <Section
        title="Why Choose CoverUp?"
        description={
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="font-semibold text-blue-600 mr-2">Peace of Mind:</span>
              <span>Knowing that everything will be taken care of allows you and your loved ones to focus on what truly matters—celebrating the life of the departed.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-blue-600 mr-2">Affordable Options:</span>
              <span>We believe that every family deserves a dignified funeral, which is why we offer a range of plans that cater to different financial situations.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-blue-600 mr-2">Comprehensive Coverage:</span>
              <span>Our plans include everything from the provision of coffins and chairs to tents and transport, ensuring all aspects of the funeral are covered.</span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold text-blue-600 mr-2">Community Focused:</span>
              <span>We work closely with local funeral parlors and service providers, supporting the community and ensuring culturally relevant services.</span>
            </li>
          </ul>
        }
      />

      <BlueCircles className="round-4 top-[1400px] right-16" />
      
      <Section
        title="What We Offer"
        description="CoverUp isn't just another burial scheme; it's a comprehensive
        solution designed to make funeral planning as seamless and stress-free
        as possible. Our platform allows you to compare various funeral plans
        from multiple providers, ensuring you find the perfect fit for your
        needs and budget. From basic coverage that includes essential services
        like coffins, chairs, and tents to more elaborate plans that cater to
        every detail, we have something for everyone."
      />

      <Section
        title="Our Promise"
        description="At CoverUp, we promise to be there for you every step of the way. Our
        team of compassionate professionals is dedicated to guiding you through
        the process, providing support and advice tailored to your unique
        situation. We are more than just a service provider; we are a partner in
        ensuring your peace of mind. Join us at CoverUp and take the first step
        towards securing a dignified and stress-free farewell for your loved
        ones. Because at CoverUp, we believe that peace of mind is priceless."
      />

      
       {/* Footer */}
<footer className="bg-[#173541] text-white pt-12">
  <div className="container mx-auto px-4 pb-8">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div>
        <div className="text-xl font-bold mb-4">COVER UP</div>
        <p className="text-white text-sm">
          CoverUp Insurance offers comprehensive insurance solutions to protect what matters most. Located in the heart of Johannesburg, we are dedicated to providing personalized service and peace of mind.
        </p>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Our Office</h3>
        <p className="text-white text-sm">Address: Thornhill Office Park 84, Bekker road, Midrand 1685</p>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Contact Us</h3>
        <p className="text-white text-sm">Email: info@coverupquotes.co.za</p>
      </div>

      <div>
        <h3 className="font-semibold mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm text-white">
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavigation('/')}>Home</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavigation('/products')}>Products</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavigation('/about')}>About Us</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavigation('/contact')}>Contact Us</li>
          <li className="hover:text-white transition-colors cursor-pointer" onClick={() => handleNavigation('/welcome')}>Get Started</li>
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

export default AboutPage;