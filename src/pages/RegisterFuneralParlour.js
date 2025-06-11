import React, { useState } from 'react';
import { Eye, Shield, Users, TrendingUp, ChevronRight } from 'lucide-react';

const RegisterFuneralParlour = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (email) {
      console.log('Registration submitted:', email);
      setEmail('');
      // Handle form submission here
    }
  };

  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: 'url("/images/turtle-8.png")',
      backgroundSize: '1440px 801px',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed'
    }}>
     

      {/* Hero Section */}
      <div className="flex items-center justify-between px-6 py-16 max-w-7xl mx-auto relative">
       
        <div className="flex-1 max-w-2xl">
          <h1 className="text-5xl font-bold text-white mb-6 leading-tight relative z-10">
            Grow Your Business<br />
            <span className="text-white">reach with CoverUp</span>
          </h1>
          
          <p className="text-white text-lg mb-8 leading-relaxed relative z-10">
            Join a growing network of trusted service providers. Expand your reach, serve more families, and simplify your admin with our platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-cyan-400 text-teal-900 px-8 py-3 rounded-full font-semibold hover:bg-cyan-300 transition-all transform hover:scale-105">
              REGISTER FOR FREE
            </button>
            <button className="text-white border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-teal-700 transition-all">
              ALREADY REGISTERED? <span style={{color: "#00a9df"}}> LOGIN</span> 
            </button>
          </div>
        </div>
      </div>  

     
      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Why Join Coverup?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                <Shield className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Trusted Network</h3>
              <p className="text-gray-600 leading-relaxed">
                Enhance your family's quality and safety with our family-centered approach to personal care and housekeeping.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                <Eye className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Visibility & Convenience</h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy our competitive pricing and receive updated schedules for seamless coordination.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Verified Client Network</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive referrals from our verified clients, backed by our comprehensive screening process.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-teal-200 transition-colors">
                <TrendingUp className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Growth Opportunities</h3>
              <p className="text-gray-600 leading-relaxed">
                Quality customers and transparent reviews help you build trust and grow your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-100 py-20">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Turtle Illustration */}
          <div className="hidden md:block">
            <div className="w-48 h-48 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl">
              <div className="w-36 h-36 bg-gradient-to-br from-green-300 to-green-500 rounded-full relative overflow-hidden">
 Simplified turtle for CTA section */}
                <div className="absolute inset-3 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full">
                  <div className="absolute inset-1 bg-gradient-to-br from-amber-300 to-orange-400 rounded-full"></div>
                </div>
                
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-10 bg-gradient-to-b from-green-400 to-green-600 rounded-full">
                  <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full">
                    <div className="absolute top-0 left-0 w-1 h-1 bg-black rounded-full"></div>
                  </div>
                  <div className="absolute top-1 right-1 w-2 h-2 bg-white rounded-full">
                    <div className="absolute top-0 right-0 w-1 h-1 bg-black rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 md:ml-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Register to start earning
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Expand your reach, serve more families, and simplify your admin with our platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
              <button
                onClick={handleSubmit}
                className="bg-cyan-400 text-teal-900 px-8 py-3 rounded-full font-semibold hover:bg-cyan-300 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                REGISTER FOR FREE
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterFuneralParlour;