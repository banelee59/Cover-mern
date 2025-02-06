import React, { useState } from "react";
import Confetti from 'react-confetti';


const provincialCoverOptions = {
  Gauteng: [
    { 
      value: "20000",
      label: "150",
      provider: "Old Mutual",
      rating: 4.5,
      features: ["No medical tests", "Immediate accident cover", "Family cover"]
    },
    { 
      value: "30000",
      label: "200",
      provider: "Avbob",
      rating: 4.2,
      features: ["Cash back benefits", "Double accident benefit", "Repatriation"]
    },
    { 
      value: "50000",
      label: "300",
      provider: "Metropolitan",
      rating: 4.0,
      features: ["Premium waiver", "Flexible payments", "Quick claims"]
    }
  ],
  "Western Cape": [
    { value: "12000", label: "R12,000 - R180/month", provider: "Provider D" },
    { value: "18000", label: "R18,000 - R220/month", provider: "Provider E" },
    { value: "25000", label: "R25,000 - R300/month", provider: "Provider F" },
  ],
  "KwaZulu-Natal": [
    { value: "8000", label: "R8,000 - R120/month", provider: "Provider G" },
    { value: "16000", label: "R16,000 - R190/month", provider: "Provider H" },
    { value: "22000", label: "R22,000 - R270/month", provider: "Provider I" },
  ],
  // Add more provinces with their specific cover options
};

const validateIdNumber = (idNumber) => {
  // South African ID number validation (13 digits)
  const idRegex = /^[0-9]{13}$/;
  return idRegex.test(idNumber);
};

const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhoneNumber = (phone) => {
  // South African phone number validation
  const phoneRegex = /^(\+27|0)[6-8][0-9]{8}$/;
  return phoneRegex.test(phone);
};

const validatePostalCode = (code) => {
  // South African postal code validation (4 digits)
  const postalRegex = /^[0-9]{4}$/;
  return postalRegex.test(code);
};

const ComparisonForm = () => {
  const [formData, setFormData] = useState({
    // Profile Details
    title: "",
    firstName: "",
    lastName: "",
    idNumber: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    alternativeNumber: "",
    address: {
      street: "",
      suburb: "",
      city: "",
      province: "",
      postalCode: "",
    },
    maritalStatus: "",
    employmentStatus: "",
    monthlyIncome: "",

    // Policy Details
    policyType: "",
    premiumFrequency: "",
    dependents: "",

    // Extra Benefits
    draping: false,
    soundSystem: false,
    groceryBenefit: false,
    mobileToilets: false,
    videoStreaming: false,
    airtimeAllowance: false,
    mobileFridge: false,
    tombstone: false,
    catering: false,
    griefCounselling: false,
    floralArrangements: false,
    urns: false,
    funeralPrograms: false,
    graveLiners: false,
    graveDigging: false,

    // Cover Options
    coverAmount: "",
    preferredCoverage: "",
  });

  // Add step tracking
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  // Add state for available cover options
  const [availableCoverOptions, setAvailableCoverOptions] = useState([]);

  // Add error state
  const [errors, setErrors] = useState({});
  const [showConfetti, setShowConfetti] = useState(false);

  const steps = [
    { number: 1, title: "Profile Details" },
    { number: 2, title: "Policy Details" },
    { number: 3, title: "Select extras Details" },
    { number: 4, title: "Cover Options" },
    { number: 5, title: "Confirmation" }, // New step
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    let newErrors = { ...errors };

    // Validate fields as they change
    if (name === "idNumber") {
      if (!validateIdNumber(value)) {
        newErrors.idNumber =
          "Please enter a valid 13-digit South African ID number";
      } else {
        delete newErrors.idNumber;
      }
    }

    if (name === "email") {
      if (!validateEmail(value)) {
        newErrors.email = "Please enter a valid email address";
      } else {
        delete newErrors.email;
      }
    }

    if (name === "phoneNumber" || name === "alternativeNumber") {
      if (value && !validatePhoneNumber(value)) {
        newErrors[name] = "Please enter a valid South African phone number";
      } else {
        delete newErrors[name];
      }
    }

    if (name === "address.postalCode") {
      if (!validatePostalCode(value)) {
        newErrors.postalCode = "Please enter a valid 4-digit postal code";
      } else {
        delete newErrors.postalCode;
      }
    }

    setErrors(newErrors);

    if (name === "address.province") {
      // Update available cover options when province changes
      setAvailableCoverOptions(provincialCoverOptions[value] || []);
    }

    if (name.includes(".")) {
      const [parent, child] = name.split(".");
      setFormData((prev) => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value,
        },
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      try {
        console.log("Form Data:", formData);
        setCurrentStep((prev) => prev + 1); // Move to the confirmation step
        setShowConfetti(true); // Show confetti
      } catch (error) {
        console.error("Form submission error:", error);
        setErrors((prev) => ({
          ...prev,
          submission:
            "There was an error submitting your form. Please try again.",
        }));
      }
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep(prev => prev + 1);
        console.log('Moving to step:', currentStep + 1);
        console.log('Step title:', steps[currentStep].title);
      }
    } else {
      console.log('Validation failed for step:', currentStep);
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        // Profile Details validation
        if (!formData.title) newErrors.title = 'Title is required';
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!validateIdNumber(formData.idNumber)) {
          newErrors.idNumber = 'Please enter a valid 13-digit South African ID number';
        }
        if (!formData.gender) newErrors.gender = 'Gender is required';
        if (!validateEmail(formData.email)) {
          newErrors.email = 'Please enter a valid email address';
        }
        if (!validatePhoneNumber(formData.phoneNumber)) {
          newErrors.phoneNumber = 'Please enter a valid South African phone number';
        }
        break;

      case 2:
        // Policy Details validation
        if (!formData.policyType) newErrors.policyType = 'Policy type is required';
        if (!formData.premiumFrequency) newErrors.premiumFrequency = 'Premium frequency is required';
        if (!formData.dependents && formData.dependents !== 0) {
          newErrors.dependents = 'Number of dependents is required';
        }
        break;

      case 3:
        // Extra Services validation - no required fields, can proceed
        break;

      case 4:
        // Cover Options validation
        if (!formData.coverAmount) newErrors.coverAmount = 'Please select a cover amount';
        break;

      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Add this helper function to render error messages
  const renderError = (fieldName) => {
    return (
      errors[fieldName] && (
        <p className="text-red-500 text-xs mt-1">{errors[fieldName]}</p>
      )
    );
  };

  const renderFormStep = () => {
    switch (currentStep) {
      case 1: // Profile Details
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Title
                </label>
                <select
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.title ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]`}
                  required
                >
                  <option value="">Select</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                  <option value="Ms">Ms</option>
                  <option value="Dr">Dr</option>
                </select>
                {renderError("title")}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]`}
                  required
                />
                {renderError("firstName")}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.lastName ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]`}
                  required
                />
                {renderError("lastName")}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  ID Number
                </label>
                <input
                  type="text"
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.idNumber ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]`}
                  required
                />
                {renderError("idNumber")}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.gender ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]`}
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {renderError("gender")}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]`}
                  required
                />
                {renderError("email")}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className={`w-full p-2 border ${
                    errors.phoneNumber ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]`}
                  required
                />
                {renderError("phoneNumber")}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Alternative Number
              </label>
              <input
                type="tel"
                name="alternativeNumber"
                value={formData.alternativeNumber}
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Marital Status
                </label>
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
              <h4 className="text-lg font-medium text-gray-800">
                Physical Address
              </h4>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address
                </label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Suburb
                  </label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City
                  </label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Province
                  </label>
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
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Postal Code
                  </label>
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
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Employment Status
                </label>
                <select
                  name="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
                  required
                >
                  <option value="">Select</option>
                  <option value="employed">Employed</option>
                  <option value="self-employed">Self-Employed</option>
                  <option value="unemployed">Unemployed</option>
                  <option value="retired">Retired</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Monthly Income
                </label>
                <input
                  type="text"
                  name="monthlyIncome"
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
                  required
                />
              </div>
            </div>
          </div>
        );

      case 2: // Policy Details
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Policy Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Policy Type
                </label>
                <select
                  name="policyType"
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
                  required
                >
                  <option value="">Select Policy Type</option>
                  <option value="individual">Individual</option>
                  <option value="family">Family</option>
                  <option value="extended">Extended Family</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Premium Frequency
                </label>
                <select
                  name="premiumFrequency"
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
                  required
                >
                  <option value="">Select Frequency</option>
                  <option value="monthly">Monthly</option>
                  <option value="annually">Annually</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Number of Dependents
              </label>
              <input
                type="number"
                name="dependents"
                min="0"
                max="10"
                onChange={handleChange}
                className="w-full p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
                required
              />
            </div>
          </div>
        );

        case 3: // Select Extras
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Extra Service Offerings</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Service</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-700 border-b border-gray-200">Yes</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-700 border-b border-gray-200">No</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Price</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'draping', label: 'Draping' },
              { name: 'mobileToilets', label: 'Mobile Toilets' },
              { name: 'groceryBenefit', label: 'Grocery Benefit' },
              { name: 'mobileFridge', label: 'Mobile Fridge' },
              { name: 'soundSystem', label: 'Sound System' },
              { name: 'videoStreaming', label: 'Video Streaming' },
              { name: 'airtimeAllowance', label: 'Airtime Allowance' },
              { name: 'tombstone', label: 'Tombstone' },
              { name: 'catering', label: 'Catering' },
              { name: 'griefCounselling', label: 'Grief Counselling' },
              { name: 'floralArrangements', label: 'Floral Arrangements (Flowers & Wreaths)' },
              { name: 'urns', label: 'Urns' },
              { name: 'funeralPrograms', label: 'Funeral Programs and Stationery' },
              { name: 'graveLiners', label: 'Grave Liners and Burial Vaults' },
              { name: 'graveDigging', label: 'Grave Digging' },
            ].map((service) => (
              <tr key={service.name} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">{service.label}</td>
                <td className="px-4 py-2 text-center border-b border-gray-200">
                  <input
                    type="radio"
                    name={service.name}
                    checked={formData[service.name] === true}
                    onChange={() => {
                      setFormData(prev => ({
                        ...prev,
                        [service.name]: true
                      }));
                    }}
                    className="w-4 h-4 text-[#00c2ff] rounded border-gray-300 focus:ring-[#00c2ff]"
                  />
                </td>
                <td className="px-4 py-2 text-center border-b border-gray-200">
                  <input
                    type="radio"
                    name={service.name}
                    checked={formData[service.name] === false}
                    onChange={() => {
                      setFormData(prev => ({
                        ...prev,
                        [service.name]: false
                      }));
                    }}
                    className="w-4 h-4 text-[#00c2ff] rounded border-gray-300 focus:ring-[#00c2ff]"
                  />
                </td>
                <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                  {/* Placeholder for price input */}
                  <input
                    type="text"
                    placeholder="Price"
                    className="w-20 p-1 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

      case 4: // Cover Options
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Compare Funeral Cover Options</h3>
            
            {formData.address.province ? (
              <>
                <div className="grid gap-6">
                  {availableCoverOptions.map((option) => (
                    <div 
                      key={option.value}
                      className="bg-white p-6 rounded-lg border-2 hover:border-[#00c2ff] transition-colors cursor-pointer"
                      onClick={() => {
                        setFormData(prev => ({
                          ...prev,
                          coverAmount: option.value,
                          preferredProvider: option.provider
                        }));
                      }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <input
                              type="radio"
                              name="coverAmount"
                              value={option.value}
                              checked={formData.coverAmount === option.value}
                              onChange={() => {}}
                              className="w-5 h-5 text-[#00c2ff]"
                            />
                            <div>
                              <h4 className="text-lg font-semibold text-gray-800">{option.provider}</h4>
                              <div className="mt-1 space-y-1">
                                <p className="text-2xl font-bold text-[#00c2ff]">R{option.value}</p>
                                <p className="text-sm text-gray-600">From R{option.label}/month</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm">No waiting period for accidental death</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm">Cover up to 13 family members</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm">Claims paid within 48 hours</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                              </svg>
                              <span className="text-sm">24/7 Support</span>
                            </div>
                          </div>
                        </div>

                        <div className="ml-6 flex flex-col items-end">
                          <div className="text-sm text-gray-500">Trustpilot Rating</div>
                          <div className="flex text-yellow-400">
                            {"★".repeat(4)}{"☆".repeat(1)}
                          </div>
                          <div className="text-sm text-gray-500">4.0/5</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <h4 className="font-medium text-gray-800 mb-2">Why choose us?</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Compare quotes from multiple providers</li>
                    <li>• Get covered in minutes</li>
                    <li>• Flexible payment options</li>
                    <li>• Add family members at any time</li>
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
      {showConfetti && <Confetti />} {/* Display confetti */}
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
                  <div className="flex items-center  w-full">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        currentStep >= step.number
                          ? "bg-[#00c2ff] text-white"
                          : "bg-gray-200 text-gray-500"
                      }`}
                    >
                      {step.number}
                    </div>
                    <div
                      className={`flex-1 h-1 ${
                        index < steps.length - 1
                          ? currentStep > step.number
                            ? "bg-[#00c2ff]"
                            : "bg-gray-200"
                          : "hidden"
                      }`}
                    />
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
              {currentStep < totalSteps ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="ml-auto px-6 py-3 bg-[#00c2ff] text-white rounded-lg font-semibold hover:bg-[#00b3eb] transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto px-6 py-3 bg-[#00c2ff] text-white rounded-lg font-semibold hover:bg-[#00b3eb] transition-colors"
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ComparisonForm;
