import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterFuneralParlour = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 flex flex-col flex items-center justify-center px-4">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Choose Your Path
          </h2>
          <p className="text-gray-600 mb-8">
            Select whether you want to compare funeral policies or register your funeral parlour
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* User Comparison Option */}
          <div 
            onClick={() => navigate('/comparison')}
            className="bg-white rounded-xl shadow-lg p-8 cursor-pointer hover:shadow-xl transition-shadow border-2 hover:border-[#00c2ff]"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-[#00c2ff]/10 rounded-full flex items-center justify-center">
                <svg 
                  className="w-10 h-10 text-[#00c2ff]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Compare Funeral Policies
              </h3>
              <p className="text-gray-600">
                Compare different funeral policies and find the best coverage for you and your family
              </p>
              <button
                className="mt-4 px-6 py-3 bg-[#00c2ff] text-white rounded-lg font-semibold hover:bg-[#00b3eb] transition-colors"
              >
                Start Comparison
              </button>
            </div>
          </div>

          {/* Store Application Option */}
          <div 
            onClick={() => navigate('/store-registration')}
            className="bg-white rounded-xl shadow-lg p-8 cursor-pointer hover:shadow-xl transition-shadow border-2 hover:border-[#00c2ff]"
          >
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="w-20 h-20 bg-[#00c2ff]/10 rounded-full flex items-center justify-center">
                <svg 
                  className="w-10 h-10 text-[#00c2ff]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Register Your Funeral Parlour
              </h3>
              <p className="text-gray-600">
                Register your funeral parlour business and reach more customers through our platform
              </p>
              <button
                className="mt-4 px-6 py-3 bg-[#00c2ff] text-white rounded-lg font-semibold hover:bg-[#00b3eb] transition-colors"
              >
                Start Registration
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterFuneralParlour; 