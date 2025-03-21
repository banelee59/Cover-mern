import React, { useState } from 'react';
import './Home.css';
import { useNavigate, Link } from 'react-router-dom';


const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="home-container">
      {/* Toolbar/Navigation */}
      <nav className="fixed top-0 right-0 left-0 bg-white shadow-md z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold text-gray-800">
                COVER<span className="text-[#00c2ff]">UP</span>
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-gray-600 hover:text-[#00c2ff] transition-colors">
                Home
              </Link>
              <Link to="/PRODUCTS" className="text-gray-600 hover:text-[#00c2ff] transition-colors">
                Products
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-[#00c2ff] transition-colors">
                About Us
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-[#00c2ff] transition-colors">
                Contact Us
              </Link>
              <Link to="/get-started" className="px-4 py-2 bg-[#00c2ff] text-white rounded hover:bg-[#00b3eb] transition-colors">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-[#00c2ff] focus:outline-none"
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
                <Link to="/" className="block px-3 py-2 text-gray-600 hover:text-[#00c2ff] transition-colors">
                  Home
                </Link>
                <Link to="/PRODUCTS" className="block px-3 py-2 text-gray-600 hover:text-[#00c2ff] transition-colors">
                  Products
                </Link>
                <Link to="/about" className="block px-3 py-2 text-gray-600 hover:text-[#00c2ff] transition-colors">
                  About Us
                </Link>
                <Link to="/contact" className="block px-3 py-2 text-gray-600 hover:text-[#00c2ff] transition-colors">
                  Contact Us
                </Link>
                <Link to="/get-started" className="w-full mt-2 px-4 py-2 bg-[#00c2ff] text-white rounded hover:bg-[#00b3eb] transition-colors">
                  Get Started
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="py-4 relative bg-cover flex items-center justify-center bg-center"
        style={{
          backgroundImage: 'url("/images/home-image1.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: 'calc(100vh - 64px)',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="container h-full flex items-center justify-center mx-auto px-4 relative py-12 md:py-0">
          <div className="flex flex-col md:flex-row md:items-end justify-between w-full relative z-10 gap-8">
            <div className='w-full md:w-5/12'>
              <div className='w-fit'>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center md:text-left">
                  Cover Up Quotes
                </h1>
                <img 
                  src="/images/underline.png" 
                  alt="Hero Image" 
                  className="top-4 mx-auto w-full max-w-[370px] h-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-white text-lg md:text-xl mt-4 text-center md:text-left">
                Cover<span>Up</span> secures your family with the right burial
                plan when it matters most. Offers Simplified Burial Planning in The Palm of Your Hand
              </p>
            </div>
            <div className='bg-[#00c2ff] items-center rounded-full border-white border-2 py-2 flex px-2 cursor-pointer' onClick={() => navigate('/get-started')}>
              <div className='mr-[74px] relative'>
                <div className='bg-white size-20 flex items-center justify-center rounded-full -top-[40px] -left-[16px] absolute'>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 ml-1 text-[#00c2ff]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256L5.055 7.061z" />
                    <path d="M12.055 7.06c-1.25-.713-2.805.19-2.805 1.63v8.122c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.062z" />
                  </svg>
                </div>
              </div>
              <h4 className='text-white font-bold mb-0 text-2xl'>Plan Ahead, Live Without Worry</h4>
            </div>
          </div>
        </div>

        <div 
          className='absolute -bottom-10 rounded-lg border-white border-2 px-4 py-5 bg-[#00b3eb] cursor-pointer hover:bg-[#00c2ff] transition-colors'
          onClick={() => navigate('/get-started')}
        >
          <h3 className='text-3xl text-white font-bold mb-1'>Compare funeral parlour quotations</h3>
        </div>

      </section>

      {/* Add margin-top to main content to account for fixed navbar */}
      <main className="">
        {/* Importance Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-0">

              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 text-left">
                IMPORTANCE OF BURIAL SCHEMES
              </h2>

              <p className="text-[#00b3eb] text-xl max-w-3xl mx-auto mb-12 text-left">
                A burial scheme ensures that funeral costs are covered, allowing your loved ones to focus on healing
              </p>

              {/* Steps moved here, directly under subtitle */}
              <div className="max-w-3xl mx-auto">
                <div className="space-y-8 text-left">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#00c2ff] rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-semibold">1</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Financial Relief</h3>
                      <p className="text-gray-600 leading-relaxed">Relieving financial burden on family</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#00c2ff] rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-semibold">2</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Best Value</h3>
                      <p className="text-gray-600 leading-relaxed">Offers best prices from top funeral parlor</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#00c2ff] rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-semibold">3</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">National Coverage</h3>
                      <p className="text-gray-600 leading-relaxed">Comprehensive coverage across the country</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#00c2ff] rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-sm font-semibold">4</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">Cultural Sensitivity</h3>
                      <p className="text-gray-600 leading-relaxed">Cultural and Religious Sensitivity</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Image moved to bottom */}
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <img
                  src="/images/file.png"
                  alt="Family Protection"
                  className="w-full h-auto max-h-[600px] object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16">
          <div className="container md:flex md:flex-col mx-auto px-4 ">
            {/* Title above boxes */}
            <div className="max-w-2xl mx-auto mx-auto text-left">
              <h2 className="text-3xl md:text-2xl font-bold text-gray-800">
                SAVE TIME AND MONEY BY COMPARING
                BURIAL SCHEMES IN ONE PLACE
              </h2>
            </div>

            {/* Grid of boxes */}
            <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex flex-col items-left text-left">
                  <div className="benefit-icon text-2xl mb-4">💰</div>
                  <h3 className="text-lg font-semibold mb-2 text-[#00c2ff]">Electronic Signing</h3>
                  <p className="text-gray-700">View and sign contracts electronically</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex flex-col items-center text-left">
                  <div className="benefit-icon text-2xl mb-4">📝</div>
                  <h3 className="text-lg font-semibold mb-2 text-[#00c2ff]">Easy Updates</h3>
                  <p className="text-gray-700">Make amendments and updates with ease</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex flex-col items-center text-left">
                  <div className="benefit-icon text-2xl mb-4">⚡</div>
                  <h3 className="text-lg font-semibold mb-2 text-[#00c2ff]">Secure Storage</h3>
                  <p className="text-gray-700">Store documents securely</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="flex flex-col items-center text-left">
                  <div className="benefit-icon text-2xl mb-4">✅</div>
                  <h3 className="text-lg font-semibold mb-2 text-[#00c2ff]">Regular Updates</h3>
                  <p className="text-gray-700">Regular updates and clear information about any changes to the scheme</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is Section */}
        <section className=" bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 text-left">
                  WHAT IS A BURIAL SCHEME?
                </h2>
                <p className="text-[#00b3eb] text-xl mb-8">
                  It is a monthly-paid insurance plan designed to cover essential funeral expenses
                </p>
              </div>

              <div className="flex flex-col md:flex-row items-start gap-12">
                <div className="flex-1 space-y-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#00c2ff] rounded-full flex items-center justify-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#00c2ff] mb-2">Financial Relief</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">These schemes ensure professional management of all logistical aspects of the funeral by providing essential items like coffins, chairs, and tents.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#00c2ff] rounded-full flex items-center justify-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#00c2ff] mb-2">Comprehensive Funeral Services</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">The contributions paid by members guarantee specific funeral services such as the coffin, hearse, and burial or cremation.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#00c2ff] rounded-full flex items-center justify-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#00c2ff] mb-2">Peace of Mind</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">Knowing that funeral arrangements are pre-planned and covered allows individuals and their families to focus on mourning and celebrating the life of the deceased without the added stress of planning and paying for the funeral</p>
                    </div>
                  </div>
                </div>

                {/* Small image on the right - removed borders and shadow */}
                <div className="w-72 h-auto flex-shrink-0">
                  <img
                    src="/images/backgroundImg.png"
                    alt="Burial Scheme Services"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <div className="section-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                THE BENEFITS OF A BURIAL SCHEME
              </h2>
            </div>
            <div className="benefits-boxes">
              <div className="benefit-box">
                <div className="w-12 h-12 mx-auto mb-4">
                  <img
                    src="/images/invesment.png"
                    alt="Cost Effective"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="benefit-header">
                  <h3>COST-EFFECTIVE</h3>
                </div>
                <div className="benefit-divider"></div>
                <p>Burial schemes usually involve lower premiums compared to comprehensive funeral policies. The contributions are pooled within the community or group, which can reduce the overall cost for each member.</p>
              </div>

              <div className="benefit-box">
                <div className="w-12 h-12 mx-auto mb-4">
                  <img
                    src="/images/process.png"
                    alt="Simplified Claims"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="benefit-header">
                  <h3>SIMPLIFIED CLAIMS PROCESS</h3>
                </div>
                <div className="benefit-divider"></div>
                <p>Since the scheme is managed by the funeral undertaker, the process of claiming the benefits is straightforward. There is no need to navigate through insurance claim procedures, as the undertaker will directly provide the agreed-upon services</p>
              </div>

              <div className="benefit-box">
                <div className="w-12 h-12 mx-auto mb-4">
                  <img
                    src="/images/operator.png"
                    alt="Immediate Assistance"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="benefit-header">
                  <h3>IMMEDIATE ASSISTANCE</h3>
                </div>
                <div className="benefit-divider"></div>
                <p>Funeral undertakers can provide immediate assistance upon the death of a member, handling all necessary arrangements promptly. This immediate support is crucial during a time of grief.</p>
              </div>

              <div className="benefit-box">
                <div className="w-12 h-12 mx-auto mb-4">
                  <img
                    src="/images/wrench.png"
                    alt="Customized Services"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="benefit-header">
                  <h3>CUSTOMIZED SERVICES</h3>
                </div>
                <div className="benefit-divider"></div>
                <p>These schemes often include personalized services tailored to the deceased's and family's wishes, ensuring a respectful and appropriate funeral.</p>
              </div>

              <div className="benefit-box">
                <div className="w-12 h-12 mx-auto mb-4">
                  <img
                    src="/images/protection.png"
                    alt="No Medical Examinations"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="benefit-header">
                  <h3>NO MEDICAL EXAMINATIONS</h3>
                </div>
                <div className="benefit-divider"></div>
                <p>Typically, burial schemes do not require medical examinations for membership, making them accessible to a broader range of people, including those who might have difficulty obtaining traditional funeral insurance.</p>
              </div>
            </div>
          </div>
        </section>



        
                  {/* Companies We've Worked With Section */}
          <section className="companies-section py-12 bg-gray-50">
            <div className="section-container">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                  COMPANIES WE'VE WORKED WITH
                </h2>
              </div>
              <div className="flex flex-wrap justify-center items-center gap-8">
                <img
                  src="/images/coca-cola.jpg"
                  alt="Coca-Cola"
                  className="w-32 h-32 object-contain"
                />
                <img
                  src="/images/cisco.jpg"
                  alt="CISCO"
                  className="w-32 h-32 object-contain"
                />
                <img
                  src="/images/google.png"
                  alt="Google"
                  className="w-32 h-32 object-contain"
                />
                <img
                  src="/images/Amazon-logo.png"
                  alt="Amazon"
                  className="w-32 h-32 object-contain"
                />
                <img
                  src="/images/Barclays-Logo.jpg"
                  alt="Barclays"
                  className="w-32 h-32 object-contain"
                />
                <img
                  src="/images/standard-bank-vector-logo.png"
                  alt="Standard Bank"
                  className="w-32 h-32 object-contain"
                />
              </div>
            </div>
          </section>




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
                <li>
                  <Link to="/" className="hover:text-[#00c2ff] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/PRODUCTS" className="hover:text-[#00c2ff] transition-colors">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-[#00c2ff] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-[#00c2ff] transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/get-started" className="hover:text-[#00c2ff] transition-colors">
                    Get Started
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 CoverUp Insurance | All rights reserved</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;