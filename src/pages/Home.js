import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/welcome');
  };

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 right-0 left-0 bg-transparent z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">
                Cover<span className="text-[#00c2ff]">Up</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => handleNavigation('/')} className="text-white hover:text-[#00c2ff] transition-colors">
                HOME
              </button>
              <button onClick={() => handleNavigation('/about')} className="text-white hover:text-[#00c2ff] transition-colors">
                ABOUT US
              </button>
              <button onClick={() => handleNavigation('/benefits')} className="text-white hover:text-[#00c2ff] transition-colors">
                BENEFITS
              </button>
              <button onClick={() => handleNavigation('/contact')} className="text-white hover:text-[#00c2ff] transition-colors">
                CONTACT
              </button>
              <button onClick={() => handleNavigation('/welcome')} className="px-4 py-2 bg-[#00c2ff] text-white rounded hover:bg-[#00c2ff] transition-colors">
               REGISTER FUNERAL PARLOUR
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-[#00c2ff] focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <button onClick={() => handleNavigation('/')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-[#00c2ff] transition-colors">
                  HOME
                </button>
                <button onClick={() => handleNavigation('/about')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-[#00c2ff] transition-colors">
                  ABOUT US
                </button>
                <button onClick={() => handleNavigation('/benefits')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-[#00c2ff] transition-colors">
                  BENEFITS
                </button>
                <button onClick={() => handleNavigation('/contact')} className="block w-full text-left px-3 py-2 text-gray-600 hover:text-[#00c2ff] transition-colors">
                  CONTACT
                </button>
                <button onClick={() => handleNavigation('/welcome')} className="block w-full mt-2 px-4 py-2 bg-[#00c2ff] text-white rounded hover:bg-[#00b3eb] transition-colors text-center">
                  GET STARTED
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[#376c6c] bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url("/images/turtle-5.jpg")'
      }}>
        <div className="container mx-auto px-4 py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Content */}
            <div className="lg:w-1/2 text-white mb-12 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold mb-8 text-center lg:text-left">
                Get burial scheme quotes in under 2 minutes.
              </h1>
              <p className="text-lg mb-8 opacity-90 leading-relaxed text-center lg:text-left">
                Ensure peace of mind knowing that funeral arrangements are taken care of in advance. CoverUp is here to help you find the perfect funeral plan for your needs. Just follow a few simple steps to compare burial scheme quotes.
              </p>
              
              {/* Phone Input */}
              <div className="flex flex-col sm:flex-row gap-4 max-w-md">
                <input
                  type="tel"
                  placeholder="ENTER YOUR ID NUMBER"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00c2ff]"
                />
                <button
                  onClick={handleGetStarted}
                  className="px-6 py-3 bg-[#00a9df] text-white rounded-lg font-semibold hover:bg-[#00a9df] transition-colors"
                >
                  GET STARTED
                </button>
              </div>
            </div>

            
          </div>
        </div>
      </section>

      {/* What is a burial scheme Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left - Family Image */}
            <div className="lg:w-1/2">
              <div className="overflow-hidden">
                <img 
                  src="/images/family.jpg"
                  alt="Happy African Family Together"
                  className="w-full h-96 object-cover rounded-2xl"
                />
              </div>
            </div>

            {/* Right - Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8 text-center lg:text-left">
                What is a burial scheme?
              </h2>
              <p className="text-gray-600 mb-8 text-center lg:text-left">
                It is a monthly-paid insurance plan designed to cover essential funeral expenses
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Financial Relief:</h3>
                  <p className="text-gray-600">
                    Families can reduce financial burdens during difficult times by paying a small monthly premium to avoid unexpected funeral costs.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Comprehensive Funeral Services:</h3>
                  <p className="text-gray-600">
                    These schemes ensure professional management of all logistical aspects of the funeral by providing essential items like coffins, chairs, and tents.
                  </p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Peace of Mind:</h3>
                  <p className="text-gray-600">
                    Knowing that funeral arrangements are pre-planned and covered allows individuals and their families to focus on mourning and celebrating the life of the deceased without the added stress of planning and paying for the funeral.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Importance Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-left gap-12">
            {/* Left - Content */}
            <div className="lg:w-1/2">
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4 text-left lg:text-left">Importance of a burial scheme</h2>
              <p className="text-gray-600 mb-8 text-center lg:text-left">
                A burial scheme ensures that funeral costs are covered, allowing your loved ones to focus on healing
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#00a9df] rounded-sm flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Relieving financial burden on family</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#00a9df] rounded-sm flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Offers best prices from top funeral parlor</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#00a9df] rounded-sm flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">National Coverage</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#00a9df] rounded-sm flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">Cultural and Religious Sensitivity</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-[#00a9df] rounded-sm flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700">A straightforward and hassle-free claims process</span>
                </div>
              </div>

              <button onClick={() => handleNavigation('/get-started')} className="mt-8 px-6 py-3 bg-[#00a9df] text-white rounded-lg font-semibold hover:bg-[#00b3eb] transition-colors">
                APPLY NOW
              </button>
            </div>

            {/* Right - Funeral Services Image - completely borderless */}
            <div className="lg:w-1/2 flex justify-center relative">
              <div className="relative">
                
                {/* Funeral Services Image - completely borderless */}
                <img 
                  src="/images/turtle-2.jpg"
                  alt="Professional Funeral Services"
                  className="w-full h-82 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose CoverUp Section */}
      <section className="py-20 bg-gradient-to-br from-[#173541] via-[#173541] to-[#173541]">
         {/* Title aligned with other sections */}
         <div className="mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Why Choose CoverUp?
            </h2>
          </div>
        <div className="container mx-auto px-4">
         

          {/* Grid items positioned below the title */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Cost Effective Cover */}
            <div className="text-center text-white">
              <div className="w-20 h-20 mx-auto mb-6 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
                <img 
                  src="/images/investment.png" 
                  alt="Cost Effective"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Cost Effective Cover</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Burial schemes offer lower premiums than traditional policies by pooling resources in a group. This reduces the cost for each member.
              </p>
            </div>

            {/* Simple Claims Process */}
            <div className="text-center text-white">
              <div className="w-20 h-20 mx-auto mb-6 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
                <img 
                  src="/images/process.png" 
                  alt="Simple Claims Process"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Simple Claims Process</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                With the undertaker managing the scheme, claiming is fast and direct. No complex insurance steps, just the agreed services when needed most.
              </p>
            </div>

            {/* Fast, Personal Support */}
            <div className="text-center text-white">
              <div className="w-20 h-20 mx-auto mb-6 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
                <img 
                  src="/images/operator.png" 
                  alt="Fast Personal Support"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">Fast, Personal Support</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                Families get immediate help with funeral arrangements. This ensures timely, respectful service during emotionally difficult moments.
              </p>
            </div>

            {/* No Medical Checks */}
            <div className="text-center text-white">
              <div className="w-20 h-20 mx-auto mb-6 bg-white bg-opacity-20 rounded-xl flex items-center justify-center p-3">
                <img 
                  src="/images/protection.png" 
                  alt="No Medical Checks"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold mb-4">No Medical Checks</h3>
              <p className="text-sm opacity-90 leading-relaxed">
                These plans don't require medical exams, making them accessible to more people, even those with health issues or limited coverage options.
              </p>
            </div>
          </div>
        </div>
      </section>

              {/* Apply Now Section */}
        <section className="py-16 bg-[white]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-between rounded-lg p-8 lg:p-12 w-[1186px] h-[356px]  bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{
                backgroundImage: 'url("/images/turtle-7.png")'
              }}>
              {/* Overlay for better text readability */}
              
              
              {/* Content */}
              <div className="relative z-10 text-black lg:w-1/2 lg:ml-auto">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:text-left">
                    Apply now and get covered
                  </h2>
                  <p className="text-lg mb-6 leading-relaxed max-w-2xl">
                    A burial scheme ensures that funeral costs are covered, 
                    allowing your loved ones to focus on healing
                  </p>
                  <button 
                    onClick={() => handleNavigation('/welcome')} 
                    className="bg-[#00a9df] hover:bg-[#00b3eb] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200"
                  >
                    APPLY NOW
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

       {/* Footer */}
       <footer className="bg-[#376c6c] text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold mb-4">COVER UP</div>
              <p className="text-white text-sm">CoverUp Insurance offers comprehensive insurance solutions to protect what matters most. Located in the heart of Johannesburg, we are dedicated to providing personalized service and peace of mind.</p>
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
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-white">
            <p>© 2024 CoverUp Insurance | All rights reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;