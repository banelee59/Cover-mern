import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    password: '',
    confirmPassword: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Signup attempted with:', formData);
    // Add your signup logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 bg-blue-200 rounded-full opacity-30 animate-bounce"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-cyan-200 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-60 left-1/4 w-8 h-8 bg-blue-300 rounded-full opacity-25 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-20 w-20 h-20 bg-cyan-300 rounded-full opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-60 left-16 w-14 h-14 bg-blue-200 rounded-full opacity-35 animate-bounce" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-32 right-1/4 w-6 h-6 bg-cyan-400 rounded-full opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="flex items-center justify-between max-w-6xl w-full">
          {/* Left side - Signup Form */}
          <div className="w-full max-w-md z-10">
            {/* Logo */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800">
                Cover<span className="text-cyan-500">Up</span>
              </h1>
            </div>

            {/* Signup Title */}
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
              Create Account
            </h2>

            {/* Signup Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="FULL NAME"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all duration-200"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all duration-200"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="contact"
                  placeholder="CONTACT NUMBER"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all duration-200"
                />
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all duration-200"
                />
              </div>

              <div>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="CONFIRM PASSWORD"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full px-4 py-4 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-all duration-200"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 active:scale-95"
              >
                SIGN UP
              </button>

              <div className="text-center mt-4">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <a href="/login" className="text-cyan-500 hover:text-cyan-600 font-semibold">
                    Login
                  </a>
                </p>
              </div>
            </form>
          </div>

          {/* Right side - Turtle Mascot */}
          <div className="hidden lg:flex items-center justify-center w-1/2 relative">
            <div className="relative">
              {/* Turtle SVG */}
              <div className="w-80 h-80 relative animate-pulse">
                <svg viewBox="0 0 400 400" className="w-full h-full">
                  {/* Turtle Shell */}
                  <ellipse cx="200" cy="220" rx="120" ry="100" fill="#4A5D23" />
                  <ellipse cx="200" cy="220" rx="100" ry="80" fill="#6B8E23" />
                  <ellipse cx="200" cy="220" rx="80" ry="60" fill="#556B2F" />
                  {/* Head */}
                  <ellipse cx="240" cy="160" rx="40" ry="30" fill="#98FB98" />
                  {/* Legs */}
                  <ellipse cx="140" cy="260" rx="30" ry="20" fill="#98FB98" />
                  <ellipse cx="260" cy="260" rx="30" ry="20" fill="#98FB98" />
                  {/* Tail */}
                  <ellipse cx="180" cy="280" rx="20" ry="15" fill="#98FB98" />
                  {/* Eyes */}
                  <circle cx="240" cy="150" r="5" fill="white" />
                  <circle cx="240" cy="150" r="3" fill="black" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;