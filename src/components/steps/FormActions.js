import React from 'react';

const FormActions = ({
  currentStep,
  totalSteps,
  onNext,
  onBack,
  onSubmit,
  isNextDisabled,
  isSubmitDisabled
}) => {
  return (
    <div className="flex justify-between pt-6">
      {currentStep > 1 && (
        <button
          type="button"
          onClick={onBack}
          className="px-6 py-3 border border-[#00c2ff] text-[#00c2ff] rounded-lg font-semibold hover:bg-[#00c2ff]/10 transition-colors"
        >
          Previous
        </button>
      )}
      {currentStep < totalSteps ? (
        <button
          type="button"
          onClick={onNext}
          disabled={isNextDisabled}
          className={`ml-auto px-6 py-3 rounded-lg font-semibold transition-colors ${
            isNextDisabled
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-[#00c2ff] text-white hover:bg-[#00b3eb]'
          }`}
        >
          Next
        </button>
      ) : (
        <button
          type="submit"
          disabled={isSubmitDisabled}
          className={`ml-auto px-6 py-3 rounded-lg font-semibold transition-colors ${
            isSubmitDisabled
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-[#00c2ff] text-white hover:bg-[#00b3eb]'
          }`}
        >
          Submit Application
        </button>
      )}
    </div>
  );
};

export default FormActions;