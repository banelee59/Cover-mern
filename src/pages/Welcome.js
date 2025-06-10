import { useState } from 'react';
import SignUp from './SignUp';
import Login from './Login';

export default function Welcome() {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [isHovered, setIsHovered] = useState('');

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  if (showSignUp) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
        <SignUp />
      </div>
    );
  }

  if (showLogin) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
        <Login />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-blue-200 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute top-1/3 left-1/4 w-8 h-8 bg-blue-300 rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-blue-100 rounded-full opacity-50 animate-pulse" style={{animationDelay: '0.5s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-20 h-20 bg-blue-200 rounded-full opacity-25 animate-bounce" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-20 left-20 w-6 h-6 bg-blue-300 rounded-full opacity-40 animate-pulse" style={{animationDelay: '1.5s'}}></div>

      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Left side - Welcome content */}
        <div className="flex-1 max-w-lg">
          {/* Logo */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold text-gray-800">
              Cover<span className="text-cyan-500">Up</span>
            </h1>
          </div>

          {/* Welcome section */}
          <div className="space-y-8">
            <h2 className="text-5xl font-bold text-gray-800 leading-tight">
              Welcome
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Log in or sign up to manage your cover.
            </p>

            {/* Buttons */}
            <div className="space-y-4">
              <button 
                className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg"
                onMouseEnter={() => setIsHovered('signup')}
                onMouseLeave={() => setIsHovered('')}
                onClick={handleSignUpClick}
              >
                SIGN UP
              </button>
              
              <button 
                className="w-full bg-transparent border-2 border-cyan-500 text-cyan-500 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-lg"
                onMouseEnter={() => setIsHovered('login')}
                onMouseLeave={() => setIsHovered('')}
                onClick={handleLoginClick}
              >
                LOGIN
              </button>
            </div>

            {/* Forgot password link */}
            <div className="text-center mt-6">
              <a href="#" className="text-cyan-500 hover:text-cyan-600 transition-colors duration-300">
                Forgot password?
              </a>
              <span className="text-gray-600 ml-1">Click here to reset</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
