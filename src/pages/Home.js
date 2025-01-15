import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <main>
        {/* Hero Section */}
        <section className="bg-white py-4">
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
        <section className="importance-section mb-30">
          <div className="section-container">
            <div className="importance-wrapper">
              <div className="importance-content">
                <h1>IMPORTANCE OF BURIAL SCHEMES</h1>
                <p className="section-intro">
                  A burial scheme ensures that funeral costs are covered, allowing your loved ones to focus on healing
                </p>
                
                <div className="flex flex-col gap-3 mt-4 mb-16">
                  <div className="flex items-center gap-3">
                    <span className="text-[#00c2ff] text-2xl">•</span>
                    <p className="text-gray-700">Relieving financial burden on family</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-[#00c2ff] text-2xl">•</span>
                    <p className="text-gray-700">Offers best prices from top funeral parlor</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-[#00c2ff] text-2xl">•</span>
                    <p className="text-gray-700">National Coverage</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <span className="text-[#00c2ff] text-2xl">•</span>
                    <p className="text-gray-700">Cultural and Religious Sensitivity</p>
                  </div>
                </div>

                
              </div>
              
              <div className="importance-image w-2/3">
                <img 
                  src="/images/file1.png" 
                  alt="Family Protection" 
                  className="feature-image w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="section-container">
            <h2 className="features-title bg-white px-4 py-2 inline-block">
              SAVE TIME AND MONEY BY COMPARING BURIAL SCHEMES IN ONE PLACE.
            </h2>
            
            <div className="flex flex-row gap-8 mt-4">
              {/* Image on the left */}
              <div className="w-1/2">
                <img 
                  src="/images/waving-turtle.png" 
                  alt="Features Overview" 
                  className="w-2/4 h-auto rounded-lg shadow-lg object-cover mx-auto"
                />
              </div>

              {/* Bullet points on the right */}
              <div className="w-1/2 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-[#00c2ff] text-2xl">•</span>
                  <p className="text-gray-700">View and sign contracts electronically</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-[#00c2ff] text-2xl">•</span>
                  <p className="text-gray-700">Make amendments and updates with ease</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-[#00c2ff] text-2xl">•</span>
                  <p className="text-gray-700">Store documents securely</p>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-[#00c2ff] text-2xl">•</span>
                  <p className="text-gray-700">Regular updates and clear information about any changes to the scheme</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is Section */}
        <section className="what-is-section">
          <div className="section-container">
            <h2>WHAT IS A BURIAL SCHEME?</h2>
            <p className="section-intro">
              It is a monthly-paid insurance plan designed to cover essential funeral expenses
            </p>
            
            <div className="scheme-info">
              <ul className="scheme-list">
                <li>
                  <div className="list-content">
                    <h3>Financial Relief</h3>
                    <p>These schemes ensure professional management of all logistical aspects of the funeral by providing:</p>
                    <ul className="sub-list">
                      <li>Essential items like coffins</li>
                      <li>Chairs and tents for the service</li>
                      <li>Transportation arrangements</li>
                    </ul>
                  </div>
                </li>

                <li>
                  <div className="list-content">
                    <h3>Comprehensive Funeral Services</h3>
                    <p>The contributions paid by members guarantee:</p>
                    <ul className="sub-list">
                      <li>Professional funeral services</li>
                      <li>Hearse and transportation</li>
                      <li>Choice of burial or cremation</li>
                      <li>Documentation assistance</li>
                    </ul>
                  </div>
                </li>

                <li>
                  <div className="list-content">
                    <h3>Peace of Mind</h3>
                    <p>Benefits of pre-planned arrangements:</p>
                    <ul className="sub-list">
                      <li>Reduced stress during mourning</li>
                      <li>No unexpected financial burdens</li>
                      <li>Focus on celebrating the life of the deceased</li>
                      <li>Support for the family during difficult times</li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="benefits-section">
          <div className="section-container">
            <h2>THE BENEFITS OF A BURIAL SCHEME</h2>
            <div className="benefits-boxes">
              <div className="benefit-box">
                <div className="benefit-header">
                  <div className="benefit-icon">💰</div>
                  <h3>COST-EFFECTIVE</h3>
                </div>
                <div className="benefit-divider"></div>
                <p>Burial schemes usually involve lower premiums compared to comprehensive funeral policies. The contributions are pooled within the community or group, which can reduce the overall cost for each member.</p>
              </div>

              <div className="benefit-box">
                <div className="benefit-header">
                  <div className="benefit-icon">📝</div>
                  <h3>SIMPLIFIED CLAIMS PROCESS</h3>
                </div>
                <div className="benefit-divider"></div>
                <p>Since the scheme is managed by the funeral undertaker, the process of claiming the benefits is straightforward. There is no need to navigate through insurance claim procedures, as the undertaker will directly provide the agreed-upon services</p>
              </div>

              <div className="benefit-box">
                <div className="benefit-header">
                  <div className="benefit-icon">⚡</div>
                  <h3>IMMEDIATE ASSISTANCE</h3>
                </div>
                <div className="benefit-divider"></div>
                <p>Funeral undertakers can provide immediate assistance upon the death of a member, handling all necessary arrangements promptly. This immediate support is crucial during a time of grief.</p>
              </div>

              <div className="benefit-box">
                <div className="benefit-header">
                  <div className="benefit-icon">🎯</div>
                  <h3>CUSTOMIZED SERVICES</h3>
                </div>
                <div className="benefit-divider"></div>
                <p>These schemes often include personalized services tailored to the deceased's and family's wishes, ensuring a respectful and appropriate funeral.</p>
              </div>

              <div className="benefit-box">
                <div className="benefit-header">
                  <div className="benefit-icon">✅</div>
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