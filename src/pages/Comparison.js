import React from 'react';
import ComparisonForm from '../components/ComparisonForm';
import Navbar from '../components/Navbar';

const Comparison = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">
            Funeral Policy Comparison
          </h1>
          <div className="bg-white/5 rounded-xl border-2 border-[#00c2ff] p-8 shadow-md">
            <ComparisonForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comparison;
