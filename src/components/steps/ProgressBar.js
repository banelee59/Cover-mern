// ProgressBar.js
import React from 'react';

const ProgressBar = ({ steps, currentStep }) => {
  return (
    <div className="mb-12 px-8">
      <div className="flex items-center justify-between relative">
      
        
        {/* Progress Line */}
        <div 
          className="absolute top-[20px] left-[50px] h-1 bg-[#00c2ff] transition-all duration-500 -z-1"
          style={{ 
            width: `calc(${((currentStep - 1) / (steps.length - 1)) * 100}% - ${currentStep === 1 ? 50 : 0}px)` 
          }}
        />
        
        {/* Step Indicators */}
        {steps.map((step) => (
          <div 
            key={step.number} 
            className="flex flex-col items-center relative min-w-[100px]"
          >
            <div 
              className={`
                w-10 h-10 rounded-full flex items-center justify-center 
                transition-all duration-300 border-2
                ${currentStep >= step.number 
                  ? 'bg-[#00c2ff] border-[#00c2ff] text-white' 
                  : 'bg-white border-gray-300 text-gray-500'
                }
                ${currentStep === step.number ? 'ring-4 ring-[#00c2ff]/20' : ''}
              `}
            >
              {currentStep > step.number ? (
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M5 13l4 4L19 7" 
                  />
                </svg>
              ) : (
                <span className="text-sm font-semibold">{step.number}</span>
              )}
            </div>
            <div className={`
              text-xs mt-2 font-medium text-center w-24
              ${currentStep >= step.number ? 'text-[#00c2ff]' : 'text-gray-500'}
            `}>
              {step.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;