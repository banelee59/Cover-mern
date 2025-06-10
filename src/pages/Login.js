import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    contact: '',
    password: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Login attempted with:', formData);
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
          {/* Left side - Login Form */}
          <div className="w-full max-w-md z-10">
            {/* Logo */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-800">
                Cover<span className="text-cyan-500">Up</span>
              </h1>
            </div>

            {/* Login Title */}
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
              Login
            </h2>

            {/* Login Form */}
            <div className="space-y-6">
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

              <button
                onClick={handleSubmit}
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 transform hover:scale-105 active:scale-95"
              >
                LOGIN
              </button>
            </div>
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
                  
                  {/* Shell Pattern */}
                  <path d="M160 200 Q200 180 240 200 Q220 220 200 230 Q180 220 160 200" fill="#5A7A2A" />
                  <path d="M140 240 Q200 220 260 240 Q230 260 200 270 Q170 260 140 240" fill="#5A7A2A" />
                  <path d="M170 260 Q200 240 230 260 Q215 280 200 285 Q185 280 170 260" fill="#5A7A2A" />
                  
                  {/* Turtle Head */}
                  <ellipse cx="200" cy="140" rx="45" ry="40" fill="#7CB342" />
                  
                  {/* Eyes */}
                  <circle cx="185" cy="130" r="12" fill="white" />
                  <circle cx="215" cy="130" r="12" fill="white" />
                  <circle cx="187" cy="128" r="8" fill="black" />
                  <circle cx="217" cy="128" r="8" fill="black" />
                  <circle cx="189" cy="126" r="3" fill="white" />
                  <circle cx="219" cy="126" r="3" fill="white" />
                  
                  {/* Mouth */}
                  <path d="M190 150 Q200 160 210 150" stroke="#2E7D32" strokeWidth="3" fill="none" strokeLinecap="round" />
                  
                  {/* Front Legs */}
                  <ellipse cx="140" cy="200" rx="25" ry="35" fill="#7CB342" />
                  <ellipse cx="260" cy="200" rx="25" ry="35" fill="#7CB342" />
                  
                  {/* Back Legs */}
                  <ellipse cx="150" cy="280" rx="25" ry="30" fill="#7CB342" />
                  <ellipse cx="250" cy="280" rx="25" ry="30" fill="#7CB342" />
                  
                  {/* Tail */}
                  <ellipse cx="200" cy="320" rx="15" ry="20" fill="#7CB342" />
                  
                  {/* Belly */}
                  <ellipse cx="200" cy="240" rx="80" ry="60" fill="#FFF9C4" />
                  <ellipse cx="200" cy="240" rx="60" ry="40" fill="#FFEB3B" />
                </svg>
              </div>
              
              {/* Waving Hand Animation */}
              <div className="absolute top-16 right-16 animate-bounce">
                <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-lg">👋</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;