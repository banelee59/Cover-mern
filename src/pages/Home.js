import React, { useState } from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <main>
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-text">
              <h1>CoverUp secures your family with the right burial plan when it matters most.</h1>
              <div className="hero-image">
                <img 
                  src="/images/home-image1.jpg" 
                  alt="Family Protection" 
                  className="hero-img"
                />
              </div>
              <div className="hero-features">
                <p>✓ Simplified Burial Planning in The Palm of Your Hand</p>
                <p>✓ Plan Ahead, Live Without Worry</p>
              </div>
              <div className="button-group">
                <button className="cta-button primary">Get Started</button>
                <button className="cta-button secondary">Learn More</button>
              </div>
            </div>
          </div>
        </section>

        {/* Importance Section */}
        <section className="importance-section">
          <div className="section-container">
            <div className="importance-wrapper">
              <div className="importance-content">
                <h2>Importance of Burial Schemes</h2>
                <p className="section-intro">
                  A burial scheme ensures that funeral costs are covered, allowing your loved ones to focus on healing
                </p>
                
                <ul className="importance-list">
                  <li className="importance-item">
                    <div className="item-icon">💰</div>
                    <div className="item-content">
                      <h3>Financial Relief</h3>
                      <p>Relieving financial burden on family during difficult times</p>
                    </div>
                  </li>

                  <li className="importance-item">
                    <div className="item-icon">🏆</div>
                    <div className="item-content">
                      <h3>Best Value</h3>
                      <p>Offers best prices from top funeral parlors</p>
                    </div>
                  </li>

                  <li className="importance-item">
                    <div className="item-icon">🌍</div>
                    <div className="item-content">
                      <h3>National Coverage</h3>
                      <p>Comprehensive coverage across South Africa</p>
                    </div>
                  </li>

                  <li className="importance-item">
                    <div className="item-icon">🤝</div>
                    <div className="item-content">
                      <h3>Cultural Sensitivity</h3>
                      <p>Respects and accommodates cultural and religious practices</p>
                    </div>
                  </li>

                  <li className="importance-item">
                    <div className="item-icon">✅</div>
                    <div className="item-content">
                      <h3>Simple Claims</h3>
                      <p>A straightforward and hassle-free claims process</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <div className="importance-image">
                <img 
                  src="/images/file.png" 
                  alt="Family Protection" 
                  className="feature-image"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features-section">
          <div className="section-container">
            <h2 className="features-title">Save time and money by comparing burial schemes in one place.</h2>
            
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">📝</div>
                <div className="feature-content">
                  <h3>Electronic Contracts</h3>
                  <p>View and sign contracts electronically with secure digital signatures</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">⚡</div>
                <div className="feature-content">
                  <h3>Easy Updates</h3>
                  <p>Make amendments and updates to your policy with just a few clicks</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <div className="feature-content">
                  <h3>Secure Storage</h3>
                  <p>All your documents are stored securely in one convenient location</p>
                </div>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📱</div>
                <div className="feature-content">
                  <h3>Regular Updates</h3>
                  <p>Stay informed with clear notifications about any changes to your scheme</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What Is Section */}
        <section className="what-is-section">
          <div className="section-container">
            <h2>What is a burial scheme?</h2>
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
            <h2>The benefits of a burial scheme</h2>
            <div className="benefits-boxes">
              <div className="benefit-box">
                <div className="benefit-header">
                  <div className="benefit-icon">💰</div>
                  <h3>Cost-Effective</h3>
                </div>
                <div className="benefit-divider"></div>
                <p>Burial schemes usually involve lower premiums compared to comprehensive funeral policies. The contributions are pooled within the community or group, which can reduce the overall cost for each member.</p>
              </div>

              <div className="benefit-box">
                <div className="benefit-header">
                  <div className="benefit-icon">📝</div>
                  <h3>Simplified Claims Process</h3>
                </div>
                <div className="benefit-divider"></div>
                <p>Since the scheme is managed by the funeral undertaker, the process of claiming the benefits is straightforward. There is no need to navigate through insurance claim procedures, as the undertaker will directly provide the agreed-upon services</p>
              </div>

              <div className="benefit-box">
                <div className="benefit-header">
                  <div className="benefit-icon">⚡</div>
                  <h3>Immediate Assistance</h3>
                </div>
                <div className="benefit-divider"></div>
                <p>Funeral undertakers can provide immediate assistance upon the death of a member, handling all necessary arrangements promptly. This immediate support is crucial during a time of grief.</p>
              </div>

              <div className="benefit-box">
                <div className="benefit-header">
                  <div className="benefit-icon">🎯</div>
                  <h3>Customized Services</h3>
                </div>
                <div className="benefit-divider"></div>
                <p>These schemes often include personalized services tailored to the deceased's and family's wishes, ensuring a respectful and appropriate funeral.</p>
              </div>

              <div className="benefit-box">
                <div className="benefit-header">
                  <div className="benefit-icon">✅</div>
                  <h3>No Medical Examinations</h3>
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