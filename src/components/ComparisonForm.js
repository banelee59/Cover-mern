import React, { useState } from 'react';

const provincialCoverOptions = {
  Gauteng: [
    { value: "10000", label: "R10,000 - R150/month", provider: "Provider A" },
    { value: "15000", label: "R15,000 - R200/month", provider: "Provider B" },
    { value: "20000", label: "R20,000 - R250/month", provider: "Provider C" }
  ],
  "Western Cape": [
    { value: "12000", label: "R12,000 - R180/month", provider: "Provider D" },
    { value: "18000", label: "R18,000 - R220/month", provider: "Provider E" },
    { value: "25000", label: "R25,000 - R300/month", provider: "Provider F" }
  ],
  "KwaZulu-Natal": [
    { value: "8000", label: "R8,000 - R120/month", provider: "Provider G" },
    { value: "16000", label: "R16,000 - R190/month", provider: "Provider H" },
    { value: "22000", label: "R22,000 - R270/month", provider: "Provider I" }
  ],
  // Add more provinces with their specific cover options
};

const ComparisonForm = () => {
  const [formData, setFormData] = useState({
    // Profile Details
    title: '',
    firstName: '',
    lastName: '',
    idNumber: '',
    gender: '',
    dateOfBirth: '',
    email: '',
    phoneNumber: '',
    alternativeNumber: '',
    address: {
      street: '',
      suburb: '',
      city: '',
      province: '',
      postalCode: ''
    },
    maritalStatus: '',
    employmentStatus: '',
    monthlyIncome: '',
    
    // Policy Details
    policyType: '',
    premiumFrequency: '',
    dependents: '',
    
    // Extra Benefits
    groceries: false,
    airtime: false,
    transport: false,
    tombstone: false,
    
    // Cover Options
    coverAmount: '',
    preferredCoverage: ''
  });

  // Add step tracking
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  // Add state for available cover options
  const [availableCoverOptions, setAvailableCoverOptions] = useState([]);

  const steps = [
    { number: 1, title: 'Profile Details' },
    { number: 2, title: 'Policy Details' },
    { number: 3, title: 'Select extras Details' },
    { number: 4, title: 'Cover Options' }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'address.province') {
      // Update available cover options when province changes
      setAvailableCoverOptions(provincialCoverOptions[value] || []);
    }

    if (name.includes('.')) {
      const [parent, child] = name.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Handle form submission
  };

  const renderFormStep = () => {
    switch(currentStep) {
      case 1: // Profile Details
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                <select name="title" value={formData.title} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]" required>
                  <option value="">Select</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]" required />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">ID Number</label>
                <input type="text" name="idNumber" value={formData.idNumber} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                <select name="gender" value={formData.gender} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]" required>
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]" required />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Alternative Number</label>
              <input type="tel" name="alternativeNumber" value={formData.alternativeNumber} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Marital Status</label>
                <select 
                  name="maritalStatus" 
                  value={formData.maritalStatus} 
                  onChange={handleChange} 
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]" 
                  required
                >
                  <option value="">Select Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-gray-800">Physical Address</h4>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Street Address</label>
                <input 
                  type="text" 
                  name="address.street" 
                  value={formData.address.street} 
                  onChange={handleChange} 
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]" 
                  required 
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Suburb</label>
                  <input 
                    type="text" 
                    name="address.suburb" 
                    value={formData.address.suburb} 
                    onChange={handleChange} 
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]" 
                    required 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                  <input 
                    type="text" 
                    name="address.city" 
                    value={formData.address.city} 
                    onChange={handleChange} 
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]" 
                    required 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Province</label>
                  <select 
                    name="address.province" 
                    value={formData.address.province} 
                    onChange={handleChange} 
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]" 
                    required
                  >
                    <option value="">Select Province</option>
                    <option value="Gauteng">Gauteng</option>
                    <option value="Western Cape">Western Cape</option>
                    <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                    <option value="Eastern Cape">Eastern Cape</option>
                    <option value="Free State">Free State</option>
                    <option value="Limpopo">Limpopo</option>
                    <option value="Mpumalanga">Mpumalanga</option>
                    <option value="North West">North West</option>
                    <option value="Northern Cape">Northern Cape</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code</label>
                  <input 
                    type="text" 
                    name="address.postalCode" 
                    value={formData.address.postalCode} 
                    onChange={handleChange} 
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]" 
                    required 
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Employment Status</label>
                <select name="employmentStatus" value={formData.employmentStatus} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]" required>
                  <option value="">Select</option>
                  <option value="employed">Employed</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="unemployed">Unemployed</option>
                  <option value="retired">Retired</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Income</label>
                <input type="text" name="monthlyIncome" value={formData.monthlyIncome} onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]" required />
              </div>
            </div>
          </div>
        );

      case 2: // Policy Details
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Policy Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Policy Type</label>
                <select name="policyType" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]" required>
                  <option value="">Select Policy Type</option>
                  <option value="individual">Individual</option>
                  <option value="family">Family</option>
                  <option value="extended">Extended Family</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Premium Frequency</label>
                <select name="premiumFrequency" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]" required>
                  <option value="">Select Frequency</option>
                  <option value="monthly">Monthly</option>
                  <option value="annually">Annually</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Number of Dependents</label>
              <input type="number" name="dependents" min="0" max="10" onChange={handleChange} className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]" required />
            </div>
          </div>
        );

      case 3: // Select Extras
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Additional Benefits</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <input type="checkbox" name="groceries" id="groceries" className="w-4 h-4 text-[#00c2ff]" />
                <label htmlFor="groceries" className="text-sm font-medium text-gray-700">Monthly Groceries Benefit</label>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" name="airtime" id="airtime" className="w-4 h-4 text-[#00c2ff]" />
                <label htmlFor="airtime" className="text-sm font-medium text-gray-700">Airtime Benefit</label>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" name="transport" id="transport" className="w-4 h-4 text-[#00c2ff]" />
                <label htmlFor="transport" className="text-sm font-medium text-gray-700">Transport Benefit</label>
              </div>
              <div className="flex items-center gap-3">
                <input type="checkbox" name="tombstone" id="tombstone" className="w-4 h-4 text-[#00c2ff]" />
                <label htmlFor="tombstone" className="text-sm font-medium text-gray-700">Tombstone Benefit</label>
              </div>
            </div>
          </div>
        );

      case 4: // Cover Options
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Coverage Selection</h3>
            
            {formData.address.province ? (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Available Cover Options for {formData.address.province}
                  </label>
                  <div className="space-y-4">
                    {availableCoverOptions.map((option) => (
                      <div key={option.value} className="bg-white p-4 rounded-lg border border-gray-200 hover:border-[#00c2ff] transition-colors">
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-gray-800">{option.provider}</h4>
                            <p className="text-sm text-gray-600">{option.label}</p>
                          </div>
                          <input
                            type="radio"
                            name="coverAmount"
                            value={option.value}
                            onChange={handleChange}
                            className="w-4 h-4 text-[#00c2ff]"
                            required
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Coverage Details</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Available at all major funeral parlors in {formData.address.province}</li>
                    <li>• 6 months waiting period for natural death</li>
                    <li>• No waiting period for accidental death</li>
                    <li>• 24/7 support in your area</li>
                  </ul>
                </div>
              </>
            ) : (
              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  Please select your province in the Profile Details section to see available cover options.
                </p>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto relative">
        {/* Turtle Image */}
        <div className="absolute -left-32 top-40">
          <img 
            src="/images/greeny.png" 
            alt="Greeny Turtle" 
            className="w-44 h-44 object-contain opacity-90"
          />
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex-1 relative">
                <div className="flex flex-col">
                  <div className="flex items-center w-full">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      currentStep >= step.number 
                        ? 'bg-[#00c2ff] text-white' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      {step.number}
                    </div>
                    <div className={`flex-1 h-1 ${
                      index < steps.length - 1 
                        ? currentStep > step.number 
                          ? 'bg-[#00c2ff]' 
                          : 'bg-gray-200'
                        : 'hidden'
                    }`} />
                  </div>
                  <div className="text-sm mt-2 font-bold text-gray-700 ml-0">
                    {step.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            {steps[currentStep - 1].title}
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            {renderFormStep()}

            {/* Navigation buttons */}
            <div className="flex justify-between pt-6">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(prev => prev - 1)}
                  className="px-6 py-3 border border-[#00c2ff] text-[#00c2ff] rounded-lg font-semibold hover:bg-[#00c2ff]/10 transition-colors"
                >
                  Previous
                </button>
              )}
              <button
                type={currentStep === totalSteps ? 'submit' : 'button'}
                onClick={() => {
                  if (currentStep < totalSteps) {
                    setCurrentStep(prev => prev + 1);
                  }
                }}
                className="ml-auto px-6 py-3 bg-[#00c2ff] text-white rounded-lg font-semibold hover:bg-[#00b3eb] transition-colors"
              >
                {currentStep === totalSteps ? 'Submit' : 'Next'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComparisonForm; 