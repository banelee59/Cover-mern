import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    contact: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    
    if (!formData.contact) {
      newErrors.contact = 'Contact number is required';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Login attempted with:', formData);
      // Handle successful form submission
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
      {/* Floating Bubbles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-20 w-16 h-16 bg-blue-200 rounded-full opacity-40 animate-pulse"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-cyan-200 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute top-60 left-1/4 w-8 h-8 bg-blue-300 rounded-full opacity-35 animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-40 right-20 w-20 h-20 bg-cyan-300 rounded-full opacity-30 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-60 left-16 w-14 h-14 bg-blue-200 rounded-full opacity-45 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute top-32 right-1/4 w-6 h-6 bg-cyan-400 rounded-full opacity-40 animate-bounce" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute bottom-80 left-1/3 w-10 h-10 bg-blue-400 rounded-full opacity-25 animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="w-full max-w-6xl flex items-center justify-between">
          
          {/* Center - Logo and Login Form */}
          <div className="flex-1 flex flex-col items-center justify-center space-y-8">
            {/* Logo */}
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-2">
                Cover<span className="text-cyan-500">Up</span>
              </h1>
            </div>

            {/* Login Title */}
            <h2 className="text-4xl font-bold text-gray-800 text-center mb-16">
              Login
            </h2>

            {/* Login Form */}
            <div className="w-full max-w-2xl space-y-8 bg-white/5 rounded-xl border-2 border-[#00c2ff] p-8 shadow-md hover:border-[#00c2ff] transition-all duration-200">
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL ADDRESS"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-6 py-4 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:bg-white transition-all duration-200 font-medium ${
                    errors.email ? 'focus:ring-red-500 ring-2 ring-red-300 border-2 border-[#00c2ff]' : 'focus:ring-[#00c2ff]'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-2 ml-2">{errors.email}</p>}
              </div>

              <div>
                <input
                  type="tel"
                  name="contact"
                  placeholder="CONTACT NUMBER"
                  value={formData.contact}
                  onChange={handleInputChange}
                  className={`w-full px-6 py-4 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:bg-white transition-all duration-200 font-medium ${
                    errors.contact ? 'focus:ring-red-500 ring-2 ring-red-300 border-2 border-[#00c2ff]' : 'focus:ring-[#00c2ff]'
                  }`}
                />
                {errors.contact && <p className="text-red-500 text-sm mt-2 ml-2">{errors.contact}</p>}
              </div>

              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="PASSWORD"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full px-6 py-4 bg-gray-100 border-0 rounded-lg text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:bg-white transition-all duration-200 font-medium ${
                    errors.password ? 'focus:ring-red-500 ring-2 ring-red-300 border-2 border-[#00c2ff]' : 'focus:ring-[#00c2ff]'
                  }`}
                />
                {errors.password && <p className="text-red-500 text-sm mt-2 ml-2">{errors.password}</p>}
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-[#00c2ff] to-[#00b3eb] hover:from-[#00b3eb] hover:to-[#00a3eb] text-white font-bold py-5 px-8 rounded-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-xl hover:shadow-2xl text-lg tracking-wide border-2 border-[#00c2ff]/50 hover:border-[#00c2ff]/70"
              >
                LOGIN
              </button>
            </div>
          </div>

          {/* Right side - Turtle Mascot */}
          <div className="hidden lg:flex items-center justify-center flex-1 relative">
            <div className="relative">
              {/* Enhanced 3D-style Turtle */}
              <div className="w-96 h-96 relative">
                <svg viewBox="0 0 400 400" className="w-full h-full drop-shadow-2xl">
                  {/* Shadow */}
                  <ellipse cx="200" cy="370" rx="80" ry="15" fill="rgba(0,0,0,0.2)" />
                  
                  {/* Turtle Shell - Main */}
                  <ellipse cx="200" cy="220" rx="120" ry="100" fill="url(#shellGradient)" />
                  
                  {/* Shell Highlight */}
                  <ellipse cx="180" cy="200" rx="90" ry="70" fill="url(#shellHighlight)" opacity="0.7" />
                  
                  {/* Shell Pattern - Hexagonal segments */}
                  <path d="M160 190 Q200 170 240 190 Q220 210 200 220 Q180 210 160 190" fill="#4A5D23" />
                  <path d="M140 230 Q200 210 260 230 Q230 250 200 260 Q170 250 140 230" fill="#4A5D23" />
                  <path d="M170 250 Q200 230 230 250 Q215 270 200 275 Q185 270 170 250" fill="#4A5D23" />
                  <path d="M160 270 Q200 250 240 270 Q220 290 200 295 Q180 290 160 270" fill="#4A5D23" />
                  
                  {/* Turtle Head */}
                  <ellipse cx="200" cy="130" rx="50" ry="45" fill="url(#headGradient)" />
                  
                  {/* Head highlight */}
                  <ellipse cx="185" cy="120" rx="30" ry="25" fill="url(#headHighlight)" opacity="0.6" />
                  
                  {/* Eyes */}
                  <circle cx="182" cy="125" r="16" fill="white" />
                  <circle cx="218" cy="125" r="16" fill="white" />
                  <circle cx="184" cy="122" r="12" fill="black" />
                  <circle cx="220" cy="122" r="12" fill="black" />
                  <circle cx="186" cy="118" r="4" fill="white" />
                  <circle cx="222" cy="118" r="4" fill="white" />
                  
                  {/* Cute smile */}
                  <path d="M185 145 Q200 155 215 145" stroke="#2E7D32" strokeWidth="4" fill="none" strokeLinecap="round" />
                  
                  {/* Front Legs */}
                  <ellipse cx="130" cy="200" rx="30" ry="40" fill="url(#limbGradient)" />
                  <ellipse cx="270" cy="200" rx="30" ry="40" fill="url(#limbGradient)" />
                  
                  {/* Back Legs */}
                  <ellipse cx="140" cy="290" rx="30" ry="35" fill="url(#limbGradient)" />
                  <ellipse cx="260" cy="290" rx="30" ry="35" fill="url(#limbGradient)" />
                  
                  {/* Tail */}
                  <ellipse cx="200" cy="330" rx="18" ry="25" fill="url(#limbGradient)" />
                  
                  {/* Belly */}
                  <ellipse cx="200" cy="250" rx="85" ry="65" fill="url(#bellyGradient)" />
                  
                  {/* Belly pattern */}
                  <ellipse cx="200" cy="250" rx="65" ry="45" fill="#F9A825" opacity="0.8" />
                  
                  {/* Gradients */}
                  <defs>
                    <radialGradient id="shellGradient" cx="0.3" cy="0.3">
                      <stop offset="0%" stopColor="#8BC34A" />
                      <stop offset="70%" stopColor="#689F38" />
                      <stop offset="100%" stopColor="#33691E" />
                    </radialGradient>
                    
                    <radialGradient id="shellHighlight" cx="0.2" cy="0.2">
                      <stop offset="0%" stopColor="#C8E6C9" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                    
                    <radialGradient id="headGradient" cx="0.3" cy="0.3">
                      <stop offset="0%" stopColor="#8BC34A" />
                      <stop offset="100%" stopColor="#689F38" />
                    </radialGradient>
                    
                    <radialGradient id="headHighlight" cx="0.2" cy="0.2">
                      <stop offset="0%" stopColor="#C8E6C9" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                    
                    <radialGradient id="limbGradient" cx="0.3" cy="0.3">
                      <stop offset="0%" stopColor="#8BC34A" />
                      <stop offset="100%" stopColor="#689F38" />
                    </radialGradient>
                    
                    <radialGradient id="bellyGradient" cx="0.3" cy="0.3">
                      <stop offset="0%" stopColor="#FFF176" />
                      <stop offset="70%" stopColor="#FFD54F" />
                      <stop offset="100%" stopColor="#FF8F00" />
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              
              {/* Waving Hand Animation */}
              <div className="absolute top-20 right-20 animate-bounce">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl">👋</span>
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