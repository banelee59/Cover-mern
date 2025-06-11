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
    <div className="min-h-screen">
      {/* Hero Section - Full viewport height */}
      <div 
        className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center relative"
        style={{
          backgroundImage: 'url("/images/turtle-8.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex-1 max-w-2xl">
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              Grow Your Business<br />
              <span className="text-white">reach with CoverUp</span>
            </h1>
            
            <p className="text-white text-lg mb-8 leading-relaxed relative z-10">
              Join a growing network of trusted service providers. Expand your reach, serve more families, and simplify your admin with our platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className=" bg-[#00a9df] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#00a9df] transition-all transform hover:scale-105">
                REGISTER 
              </button>
              <button className="text-white border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-teal-700 transition-all">
                ALREADY REGISTERED? <span style={{color: "#00a9df"}}> LOGIN</span> 
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section - Optimized spacing */}
      <div className="bg-white py-16 lg:py-24">
      <h2 className="text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-16">
            Why Join CoverUp?
          </h2>
        <div className="container mx-auto px-6">
          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Feature 1 */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-teal-200 group-hover:to-cyan-200 transition-all shadow-lg">
                <Shield className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Trusted Network</h3>
              <p className="text-gray-600 leading-relaxed">
                Enhance your family's quality and safety with our family-centered approach to personal care and housekeeping.
              </p>
            </div>
            
            {/* Feature 2 */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-teal-200 group-hover:to-cyan-200 transition-all shadow-lg">
                <Eye className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Visibility & Convenience</h3>
              <p className="text-gray-600 leading-relaxed">
                Enjoy our competitive pricing and receive updated schedules for seamless coordination.
              </p>
            </div>
            
            {/* Feature 3 */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-teal-200 group-hover:to-cyan-200 transition-all shadow-lg">
                <Users className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Verified Client Network</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive referrals from our verified clients, backed by our comprehensive screening process.
              </p>
            </div>
            
            {/* Feature 4 */}
            <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:from-teal-200 group-hover:to-cyan-200 transition-all shadow-lg">
                <TrendingUp className="w-10 h-10 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Growth Opportunities</h3>
              <p className="text-gray-600 leading-relaxed">
                Quality customers and transparent reviews help you build trust and grow your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Apply Now Section */}
      <section className="py-16 bg-[white]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between rounded-lg p-8 lg:p-12 w-[1186px] h-[356px] bg-cover bg-center bg-no-repeat relative overflow-hidden" style={{
            backgroundImage: 'url("/images/turtle-7.png")'
          }}>
           
            
            {/* Content */}
            <div className="relative z-10 text-black lg:w-1/2 lg:ml-auto">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:text-left">
                  Register to start earning
                </h2>
                <p className="text-lg mb-6 leading-relaxed max-w-2xl">
                  Expand your reach, serve more families, and simplify your admin with our platform.
                </p>
                <button 
                   
                  className="bg-[#00a9df] hover:bg-[#00b3eb] text-white font-semibold py-3 px-8 rounded-full transition-colors duration-200"
                >
                 REGISTER FOR PARLOUR
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterFuneralParlour;