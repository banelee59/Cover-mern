import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <main>
        {/* Hero Section */}
        <section className="bg-white py-14">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-start">
              <h1 className="text-2xl text-black mb-8 leading-none max-w-none text-left font-semibold whitespace-nowrap">
                COVER<span className="text-[#00c2ff]">UP</span> SECURES YOUR FAMILY WITH THE RIGHT BURIAL PLAN WHEN IT MATTERS MOST.
              </h1>
              
              <div className="w-full max-w-6xl h-96 mb-0 rounded-lg overflow-hidden self-start">
                <img 
                  src="/images/home-image1.jpg" 
                  alt="Family Protection" 
                  className="w-full h-full object-cover object-top rounded-lg shadow-lg"
                />
              </div>

              <div className="flex gap-2 mt-2">
                <button className="px-5 py-5 text-xs font-semibold bg-[#00c2ff] text-white rounded hover:bg-[#00b3eb] transition-colors">
                  Simplified Burial Planning in The Palm of Your Hand
                </button>
                <button className="px-5 py-2 text-xs font-semibold border-2 border-[#00c2ff] text-[#00c2ff] rounded hover:bg-[#00c2ff]/10 transition-colors">
                  Plan Ahead, Live Without Worry
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Importance Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto px-4">
            {/* Title and Subtitle */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800">
                IMPORTANCE OF BURIAL SCHEMES
              </h2>
              <p className="text-[#00b3eb]  text-xl max-w-3xl mx-auto mb-12">
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
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <img 
                  src="/images/file.png" 
                  alt="Family Protection" 
                  className="w-full h-auto rounded-lg shadow-lg "
                />
                <div className="absolute inset-0  from-[#00c2ff]/10 to-transparent rounded-lg"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="section-container">
            <div className="text-center mb-8">
              <h2 className="text-lg md:text-2xl text-gray-800 font-bold">
                SAVE TIME AND MONEY BY COMPARING
                BURIAL SCHEMES IN ONE PLACE.
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 px-4">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="benefit-icon text-2xl mb-4">💰</div>
                  <h3 className="text-lg font-semibold mb-2 text-[#00c2ff]">Electronic Signing</h3>
                  <p className="text-gray-700">View and sign contracts electronically</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="benefit-icon text-2xl mb-4">📝</div>
                  <h3 className="text-lg font-semibold mb-2 text-[#00c2ff]">Easy Updates</h3>
                  <p className="text-gray-700">Make amendments and updates with ease</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="benefit-icon text-2xl mb-4">⚡</div>
                  <h3 className="text-lg font-semibold mb-2 text-[#00c2ff]">Secure Storage</h3>
                  <p className="text-gray-700">Store documents securely</p>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
                <div className="flex flex-col items-center text-center">
                  <div className="benefit-icon text-2xl mb-4">✅</div>
                  <h3 className="text-lg font-semibold mb-2 text-[#00c2ff]">Regular Updates</h3>
                  <p className="text-gray-700">Regular updates and clear information about any changes to the scheme</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto">
            <div className="max-w-6xl">
              {/* Title and Subtitle aligned left */}
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">
                  WHAT IS A BURIAL SCHEME?
                </h2>
                <p className="text-[#00b3eb] text-xl mb-8">
                  It is a monthly-paid insurance plan designed to cover essential funeral expenses
                </p>
              </div>

              {/* Content with image */}
              <div className="flex justify-between items-start gap-12">
                {/* List Content with reduced width */}
                <div className="space-y-18 max-w-2xl flex-1">
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
               
                {/* Small image on the right */}
                <div className="w-72 h-auto flex-shrink-0">
                  <img 
                    src="/images/backgroundImg.png" 
                    alt="Burial Scheme Services" 
                    className="w-full h-full object-contain rounded-lg shadow-lg"
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
      </main>
    </div>
  );
};

export default Home; 