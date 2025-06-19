import React from 'react';
import { useNavigate } from 'react-router-dom';

const RegistrationSuccess = () => {
  const navigate = useNavigate();
  
  // Sample data - you would replace these with actual values from your form submission
  const referenceNumber = "FUN20250603-8374";
  const email = "kongana@gmail.com";

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-6">
      <div className="max-w-2xl w-full bg-white rounded-lg shadow-sm p-8">
       

        {/* Divider */}
        <div className="border-t border-gray-200 my-6"></div>

        {/* Progress Indicators */}
        <div className="text-center mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            General Information, Legal and Regulatory Compliance
          </h2>
          <h2 className="text-xl font-bold text-gray-800 mb-2">
            Services Offered & Documentation Update
          </h2>
          <h2 className="text-xl font-bold text-gray-800">
            Confirm your Details
          </h2>
        </div>

        {/* Success Message */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-green-600 mb-4">
            Registration Successfully Submitted!
          </h1>
          <p className="text-gray-600">
            We're excited to have you on board. Your application to be listed on our platform has been successfully received and is currently under review. We'll be in touch shortly with the next steps.
          </p>
        </div>

        {/* Reference Number Box */}
        <div className="bg-gray-50 p-6 rounded-lg mb-10">
          <h3 className="text-lg font-semibold text-gray-700 mb-2 text-center">
            YOUR REFERENCE NUMBER
          </h3>
          <p className="text-2xl font-bold text-blue-600 mb-4 text-center">
            {referenceNumber}
          </p>
          <p className="text-gray-600 text-center">
            A confirmation email has been sent to {email}<br />
            Please keep your reference number for future correspondence.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            onClick={() => navigate('/register')}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            NEW REGISTRATION
          </button>
          <button 
            onClick={() => navigate('/')}
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            GO TO HOMEPAGE
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;