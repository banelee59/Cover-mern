import React, { useState, useEffect, useRef } from "react";
import Confetti from "react-confetti";

const provincialCoverOptions = {
  "Gauteng": [
    {
      value: "standard_b",
      label: "75",
      provider: "Mpiti Funeral - Standard Package B",
      logo: "/images/providers/mpiti.png",
      rating: 4.8,
      features: [
        "Collection and Delivery of deceased",
        "Cleaning and preparation of corpse",
        "Administration of Death Certificate",
        "Flat-Lid Coffin",
        "Storage of deceased"
      ],
      coverageDetails: {
        singleMember: "R75 (Age 18-59) / R95 (Above 60)",
        memberWithChildren: "R85 (Age 18-59) / R105 (Above 60)",
        cashBenefit: "R4,000"
      },
      benefits: [
        "2 Pole Tent or R1000 cash",
        "Back deco",
        "Table",
        "50 Chairs",
        "50 Chair Covers",
        "Burial Service"
      ]
    },
    {
      value: "standard_ca",
      label: "85",
      provider: "Mpiti Funeral - Standard Package CA",
      logo: "/images/providers/mpiti.png",
      rating: 4.8,
      features: [
        "Collection and Delivery of deceased",
        "Cleaning and preparation of corpse",
        "Administration of Death Certificate",
        "Halfview casket",
        "Storage of deceased"
      ],
      coverageDetails: {
        singleMember: {
          age18_59: "R85",
          age60_74: "R105",
          age75_100: "R120"
        },
        memberWithChildren: {
          age18_59: "R95",
          age60_74: "R110",
          age75_100: "R135"
        },
        cashBenefit: "R2,000"
      },
      benefits: [
        "2 Pole Tent or R1000 cash",
        "Back deco",
        "Table",
        "50 Chairs",
        "50 Chair Covers",
        "50 Programmes",
        "Burial Service"
      ]
    },
    {
      value: "package_cb",
      label: "115",
      provider: "Mpiti Funeral - Package CB",
      logo: "/images/providers/mpiti.png",
      rating: 4.9,
      features: [
        "Collection and Delivery of deceased",
        "Cleaning and preparation of corpse",
        "Administration of Death Certificate",
        "Half-View Casket",
        "Storage of deceased"
      ],
      coverageDetails: {
        singleMember: {
          age18_59: "R115",
          age60_74: "R135",
          age75_up: "R160"
        },
        memberWithChildren: {
          age18_59: "R125",
          age60_105: "R145",
          age75_up: "R175"
        },
        cashBenefit: "R4,000"
      },
      benefits: [
        "2 Pole Tent or R1000 cash",
        "Back deco",
        "Table & 50 chairs",
        "50 Chair Covers",
        "50 Programmes",
        "Burial Service"
      ]
    },
    {
      value: "package_d",
      label: "180",
      provider: "Mpiti Funeral - Package D",
      logo: "/images/providers/mpiti.png",
      rating: 4.9,
      features: [
        "Collection and Delivery of deceased",
        "Cleaning and preparation of corpse",
        "Administration of Death Certificate",
        "Oval line casket",
        "Storage of deceased"
      ],
      coverageDetails: {
        member: {
          age18_59: "R180",
          age60_99: "R210"
        },
        cashBenefit: "R5,000"
      },
      benefits: [
        "2 Pole Tent or R1000 cash",
        "Back deco",
        "Table",
        "100 Chairs",
        "50 Chair Covers",
        "50 Programmes"
      ]
    },
    {
      value: "package_e",
      label: "215",
      provider: "Mpiti Funeral - Package E",
      logo: "/images/providers/mpiti.png",
      rating: 5.0,
      features: [
        "Collection and Delivery of deceased",
        "Cleaning and preparation of corpse",
        "Administration of Death Certificate",
        "Oval line casket",
        "Storage of deceased"
      ],
      coverageDetails: {
        singleMember: {
          age18_59: "R215",
          age60_99: "R245"
        },
        cashBenefit: "R6,000"
      },
      benefits: [
        "2 Pole Tent or R1000 cash",
        "Back deco",
        "Table",
        "100 Chairs",
        "50 Chair Covers",
        "50 Programmes"
      ]
    }
  ]
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
  const totalSteps = 6;

  // Add state for available cover options
  const [availableCoverOptions, setAvailableCoverOptions] = useState([]);

  // Add error state
  const [errors, setErrors] = useState({});
  const [showConfetti, setShowConfetti] = useState(false);

  // First, add a new state to track which option's details are being shown
  const [selectedOptionDetails, setSelectedOptionDetails] = useState(null);

  // Add this state at the top of your component
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Add this state for Google Places suggestions
  const [suggestions, setSuggestions] = useState([]);
  const autocompleteRef = useRef(null);
  const placeDetailsService = useRef(null);

  // Add this useEffect for Google Places initialization
  useEffect(() => {
    if (window.google && window.google.maps && window.google.maps.places) {
      autocompleteRef.current = new window.google.maps.places.AutocompleteService();
      placeDetailsService.current = new window.google.maps.places.PlacesService(document.createElement('div'));
    }
  }, []);

  const steps = [
    { number: 1, title: "Profile Details" },
    { number: 2, title: "Policy Details" },
    { number: 3, title: "Extras" },
    { number: 4, title: "Cover Options" },
    { number: 5, title: "Confirmation" },
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

  // Add this function to handle suburb input changes
  const handleSuburbChange = async (e) => {
    const value = e.target.value;
    setFormData(prev => ({
      ...prev,
      address: {
        ...prev.address,
        suburb: value
      }
    }));

    if (value.length > 2 && autocompleteRef.current) {
      try {
        const request = {
          input: value,
          componentRestrictions: { country: 'ZA' }, // Restrict to South Africa
          types: ['geocode', 'establishment'],
          language: 'en',
        };

        autocompleteRef.current.getPlacePredictions(request, (predictions, status) => {
          if (status === window.google.maps.places.PlacesServiceStatus.OK && predictions) {
            setSuggestions(predictions.map(p => ({
              description: p.description,
              placeId: p.place_id,
              mainText: p.structured_formatting.main_text,
              secondaryText: p.structured_formatting.secondary_text
            })));
          }
        });
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      }
    } else {
      setSuggestions([]);
    }
  };

  // Add this function to handle suggestion selection
  const handleSuggestionSelect = (suggestion) => {
    const request = {
      placeId: suggestion.placeId,
      fields: ['address_components', 'geometry']
    };

    placeDetailsService.current.getDetails(request, (place, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        const addressComponents = {};
        place.address_components.forEach(component => {
          const type = component.types[0];
          if (type === 'sublocality_level_1' || type === 'locality') {
            addressComponents.suburb = component.long_name;
          }
          if (type === 'administrative_area_level_1') {
            addressComponents.province = component.long_name;
          }
          if (type === 'postal_code') {
            addressComponents.postalCode = component.long_name;
          }
        });

        setFormData(prev => ({
          ...prev,
          address: {
            ...prev.address,
            suburb: addressComponents.suburb || suggestion.mainText,
            province: addressComponents.province || prev.address.province,
            postalCode: addressComponents.postalCode || prev.address.postalCode
          }
        }));
      }
    });

    setSuggestions([]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep(currentStep)) {
      try {
        console.log("Form Data:", formData);
        setIsSubmitted(true); // Set to true after successful submission
        setShowConfetti(true);
      } catch (error) {
        console.error("Form submission error:", error);
        setErrors((prev) => ({
          ...prev,
          submission: "There was an error submitting your form. Please try again.",
        }));
      }
    }
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep < totalSteps) {
        setCurrentStep((prev) => prev + 1);
        console.log("Moving to step:", currentStep + 1);
        
      }
    } else {
      console.log("Validation failed for step:", currentStep);
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        // Profile Details validation
        if (!formData.title) newErrors.title = "Title is required";
        if (!formData.firstName) newErrors.firstName = "First name is required";
        if (!formData.lastName) newErrors.lastName = "Last name is required";
        if (!validateIdNumber(formData.idNumber)) {
          newErrors.idNumber =
            "Please enter a valid 13-digit South African ID number";
        }
        if (!formData.gender) newErrors.gender = "Gender is required";
        if (!validateEmail(formData.email)) {
          newErrors.email = "Please enter a valid email address";
        }
        if (!validatePhoneNumber(formData.phoneNumber)) {
          newErrors.phoneNumber =
            "Please enter a valid South African phone number";
        }
        break;

      case 2:
        // Policy Details validation
        if (!formData.policyType)
          newErrors.policyType = "Policy type is required";
        if (!formData.premiumFrequency)
          newErrors.premiumFrequency = "Premium frequency is required";
        if (!formData.dependents && formData.dependents !== 0) {
          newErrors.dependents = "Number of dependents is required";
        }
        break;

      case 3:
        // Extra Services validation - no required fields, can proceed
        break;

      case 4:
        // Cover Options validation
        if (!formData.coverAmount)
          newErrors.coverAmount = "Please select a cover amount";
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

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Suburb
                </label>
                <input
                  type="text"
                  name="address.suburb"
                  value={formData.address.suburb || ''}
                  onChange={handleSuburbChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#00c2ff] focus:border-[#00c2ff]"
                  placeholder="Start typing your suburb..."
                  autoComplete="off"
                />
                {suggestions.length > 0 && (
                  <div className="absolute z-50 w-full mt-1 bg-white shadow-xl rounded-md border border-gray-200 max-h-60 overflow-y-auto">
                    {suggestions.map((suggestion) => (
                      <div
                        key={suggestion.placeId}
                        className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-100 last:border-0"
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            address: {
                              ...prev.address,
                              suburb: suggestion.mainText
                            }
                          }));
                          setSuggestions([]);
                        }}
                      >
                        <div className="font-medium text-gray-800">{suggestion.mainText}</div>
                        <div className="text-sm text-gray-500">{suggestion.secondaryText}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Extra Service Offerings
            </h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-50">
                    <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">
                      Service
                    </th>
                    <th className="px-4 py-2 text-center text-sm font-medium text-gray-700 border-b border-gray-200">
                      Yes
                    </th>
                    <th className="px-4 py-2 text-center text-sm font-medium text-gray-700 border-b border-gray-200">
                      No
                    </th>
            </tr>
          </thead>
          <tbody>
            {[
                    { name: "draping", label: "Draping" },
                    { name: "mobileToilets", label: "Mobile Toilets" },
                    { name: "groceryBenefit", label: "Grocery Benefit" },
                    { name: "mobileFridge", label: "Mobile Fridge" },
                    { name: "soundSystem", label: "Sound System" },
                    { name: "videoStreaming", label: "Video Streaming" },
                    { name: "airtimeAllowance", label: "Airtime Allowance" },
                    { name: "tombstone", label: "Tombstone" },
                    { name: "catering", label: "Catering" },
                    { name: "griefCounselling", label: "Grief Counselling" },
                    {
                      name: "floralArrangements",
                      label: "Floral Arrangements (Flowers & Wreaths)",
                    },
                    { name: "urns", label: "Urns" },
                    {
                      name: "funeralPrograms",
                      label: "Funeral Programs and Stationery",
                    },
                    {
                      name: "graveLiners",
                      label: "Grave Liners and Burial Vaults",
                    },
                    { name: "graveDigging", label: "Grave Digging" },
            ].map((service) => (
              <tr key={service.name} className="hover:bg-gray-50">
                      <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                        {service.label}
                      </td>
                <td className="px-4 py-2 text-center border-b border-gray-200">
                  <input
                    type="radio"
                    name={service.name}
                    checked={formData[service.name] === true}
                    onChange={() => {
                            setFormData((prev) => ({
                        ...prev,
                              [service.name]: true,
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
                            setFormData((prev) => ({
                        ...prev,
                              [service.name]: false,
                      }));
                    }}
                    className="w-4 h-4 text-[#00c2ff] rounded border-gray-300 focus:ring-[#00c2ff]"
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
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Compare Funeral Cover Options
            </h3>
            
            {formData.address.province ? (
              <>
                <div className="grid gap-6">
                  {availableCoverOptions.map((option) => (
                    <div key={option.value} className="space-y-4">
                      <div className="bg-white p-6 rounded-lg border-2 hover:border-[#00c2ff] transition-colors cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-4">
                            <input
                              type="radio"
                              name="coverAmount"
                                value={option.value} // Ensure this is unique and non-empty
                              checked={formData.coverAmount === option.value}
                                onChange={() => {
                                  setFormData((prev) => ({
                                    ...prev,
                                    coverAmount: option.value,
                                    preferredProvider: option.provider,
                                  }));
                                }}
                              className="w-5 h-5 text-[#00c2ff]"
                            />
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">
                                  {option.provider}
                                </h4>
                              <div className="mt-1 space-y-1">
                                  <p className="text-2xl font-bold text-[#00c2ff]">
                                    From R{option.label}/month
                                  </p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4 grid grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                                <svg
                                  className="w-5 h-5 text-green-500"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  />
                              </svg>
                                <span className="text-sm">
                                  No waiting period for accidental death
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg
                                  className="w-5 h-5 text-green-500"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  />
                              </svg>
                                <span className="text-sm">
                                  Cover up to 13 family members
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg
                                  className="w-5 h-5 text-green-500"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  />
                              </svg>
                                <span className="text-sm">
                                  Claims paid within 48 hours
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <svg
                                  className="w-5 h-5 text-green-500"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M5 13l4 4L19 7"
                                  />
                              </svg>
                              <span className="text-sm">24/7 Support</span>
                            </div>
                          </div>
                        </div>

                          <div className="flex flex-col items-end space-y-2">
                            <div className="w-12 h-12">
                              <img
                                src={option.logo}
                                alt={`${option.provider} logo`}
                                className="w-full h-full object-contain"
                                onError={(e) => {
                                  e.target.src = "/images/providers/mpiti.png";
                                  e.target.onerror = null;
                                }}
                              />
                            </div>
                            <div className="text-sm text-gray-500">
                              Trustpilot Rating
                            </div>
                          <div className="flex text-yellow-400">
                              {"★".repeat(4)}
                              {"☆".repeat(1)}
                          </div>
                          <div className="text-sm text-gray-500">4.0/5</div>
                        </div>
                      </div>
                    </div>

                      {/* Smaller Show More Button */}
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedOptionDetails(
                            selectedOptionDetails === option.provider
                              ? null
                              : option.provider
                          )
                        }
                        className="mt-2 px-3 py-1.5 bg-[#00c2ff] text-white rounded-lg text-sm font-medium 
                    hover:bg-[#00b3eb] transition-colors flex items-center justify-center gap-1 w-auto ml-auto"
                      >
                        {selectedOptionDetails === option.provider
                          ? "Hide Details"
                          : "Show More Details"}
                        <svg
                          className={`w-3 h-3 transition-transform ${
                            selectedOptionDetails === option.provider
                              ? "rotate-180"
                              : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>

                      {/* Detailed Information Panel */}
                      {selectedOptionDetails === option.provider && (
                        <div className="bg-gray-50 p-6 rounded-lg mt-2 space-y-4">
                          <h4 className="font-semibold text-lg text-gray-800">
                            {option.provider} Details
                          </h4>

                          {/* Coverage Details */}
                          <div className="space-y-4">
                            <div>
                              <h5 className="font-medium text-[#00c2ff] mb-2">
                                Coverage Details
                              </h5>
                              <div className="bg-white p-4 rounded-lg">
                                {option.value === 'standard_b' && (
                                  <>
                                    <p className="mb-2"><span className="font-medium text-[#00c2ff]">Single Member:</span> {option.coverageDetails.singleMember}</p>
                                    <p className="mb-2"><span className="font-medium text-[#00c2ff]">Member + Children:</span> {option.coverageDetails.memberWithChildren}</p>
                                    <p><span className="font-medium text-[#00c2ff]">Cash Benefit:</span> {option.coverageDetails.cashBenefit}</p>
                                  </>
                                )}
                                {(option.value === 'standard_ca' || option.value === 'package_cb') && (
                                  <>
                                    <p className="font-medium text-[#00c2ff] mb-2">Single Member:</p>
                                    <ul className="list-disc list-inside mb-3 ml-2">
                                      <li><span className="text-[#00c2ff]">Age 18-59:</span> {option.coverageDetails.singleMember.age18_59}</li>
                                      <li><span className="text-[#00c2ff]">Age 60-74:</span> {option.coverageDetails.singleMember.age60_74}</li>
                                      <li><span className="text-[#00c2ff]">Age 75+:</span> {option.coverageDetails.singleMember.age75_100 || option.coverageDetails.singleMember.age75_up}</li>
                                    </ul>
                                    <p className="font-medium text-[#00c2ff] mb-2">Member + Children:</p>
                                    <ul className="list-disc list-inside mb-3 ml-2">
                                      <li><span className="text-[#00c2ff]">Age 18-59:</span> {option.coverageDetails.memberWithChildren.age18_59}</li>
                                      <li><span className="text-[#00c2ff]">Age 60-74:</span> {option.coverageDetails.memberWithChildren.age60_74}</li>
                                      <li><span className="text-[#00c2ff]">Age 75+:</span> {option.coverageDetails.memberWithChildren.age75_100 || option.coverageDetails.memberWithChildren.age75_up}</li>
                                    </ul>
                                    <p><span className="font-medium text-[#00c2ff]">Cash Benefit:</span> {option.coverageDetails.cashBenefit}</p>
                                  </>
                                )}
                                {option.value === 'package_d' && (
                                  <>
                                    <p className="font-medium mb-2">Member:</p>
                                    <ul className="list-disc list-inside mb-3 ml-2">
                                      <li>Age 18-59: {option.coverageDetails.member.age18_59}</li>
                                      <li>Age 60-99: {option.coverageDetails.member.age60_99}</li>
                                    </ul>
                                    <p><span className="font-medium text-[#00c2ff]">Cash Benefit:</span> {option.coverageDetails.cashBenefit}</p>
                                  </>
                                )}
                                {option.value === 'package_e' && (
                                  <>
                                    <p className="font-medium mb-2">Single Member:</p>
                                    <ul className="list-disc list-inside mb-3 ml-2">
                                      <li>Age 18-59: {option.coverageDetails.singleMember.age18_59}</li>
                                      <li>Age 60-99: {option.coverageDetails.singleMember.age60_99}</li>
                                    </ul>
                                    <p><span className="font-medium text-[#00c2ff]">Cash Benefit:</span> {option.coverageDetails.cashBenefit}</p>
                                  </>
                                )}
                              </div>
                            </div>

                            {/* Features */}
                            <div>
                              <h5 className="font-medium text-[#00c2ff] mb-2">
                                Features
                              </h5>
                              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                                {option.features.map((feature, index) => (
                                  <li key={index}>{feature}</li>
                                ))}
                              </ul>
                            </div>

                            {/* Benefits */}
                            <div>
                              <h5 className="font-medium text-[#00c2ff] mb-2">
                                Benefits
                              </h5>
                              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 ml-2">
                                {option.benefits.map((benefit, index) => (
                                  <li key={index}>{benefit}</li>
                                ))}
                              </ul>
                            </div>

                            {/* Contact Information */}
                            <div className="bg-white p-4 rounded-lg">
                              <h5 className="font-medium text-[#00c2ff] mb-2">
                                Contact Information
                              </h5>
                              <div className="text-sm text-gray-600 space-y-1">
                                <p><span className="text-[#00c2ff]">Claims:</span> 0800 123 456</p>
                                <p><span className="text-[#00c2ff]">Email:</span> info@mpitifuneral.co.za</p>
                                <p><span className="text-[#00c2ff]">WhatsApp:</span> 072 123 4567</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800">
                  Please select your province in the Profile Details section to
                  see available cover options.
                </p>
              </div>
            )}
          </div>
        );

      case 5: // Confirmation Step
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Confirmation
            </h3>

            {/* Profile Details Summary */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Profile Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p>
                  <span className="font-medium">Title:</span> {formData.title}
                </p>
                <p>
                  <span className="font-medium">Name:</span>{" "}
                  {formData.firstName} {formData.lastName}
                </p>
                <p>
                  <span className="font-medium">ID Number:</span>{" "}
                  {formData.idNumber}
                </p>
                <p>
                  <span className="font-medium">Gender:</span> {formData.gender}
                </p>
                <p>
                  <span className="font-medium">Email:</span> {formData.email}
                </p>
                <p>
                  <span className="font-medium">Phone:</span>{" "}
                  {formData.phoneNumber}
                </p>
                <p>
                  <span className="font-medium">Address:</span>{" "}
                  {formData.address.street}, {formData.address.suburb},{" "}
                  {formData.address.city}, {formData.address.province},{" "}
                  {formData.address.postalCode}
                </p>
                <p>
                  <span className="font-medium">Marital Status:</span>{" "}
                  {formData.maritalStatus}
                </p>
                <p>
                  <span className="font-medium">Employment Status:</span>{" "}
                  {formData.employmentStatus}
                </p>
                <p>
                  <span className="font-medium">Monthly Income:</span> R
                  {formData.monthlyIncome}
                </p>
              </div>
            </div>

            {/* Policy Details Summary */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Policy Details
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <p>
                  <span className="font-medium">Policy Type:</span>{" "}
                  {formData.policyType}
                </p>
                <p>
                  <span className="font-medium">Premium Frequency:</span>{" "}
                  {formData.premiumFrequency}
                </p>
                <p>
                  <span className="font-medium">Dependents:</span>{" "}
                  {formData.dependents}
                </p>
              </div>
            </div>

            {/* Extra Benefits Summary */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Extra Benefits
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { name: "draping", label: "Draping" },
                  { name: "mobileToilets", label: "Mobile Toilets" },
                  { name: "groceryBenefit", label: "Grocery Benefit" },
                  { name: "mobileFridge", label: "Mobile Fridge" },
                  { name: "soundSystem", label: "Sound System" },
                  { name: "videoStreaming", label: "Video Streaming" },
                  { name: "airtimeAllowance", label: "Airtime Allowance" },
                  { name: "tombstone", label: "Tombstone" },
                  { name: "catering", label: "Catering" },
                  { name: "griefCounselling", label: "Grief Counselling" },
                  { name: "floralArrangements", label: "Floral Arrangements" },
                  { name: "urns", label: "Urns" },
                  { name: "funeralPrograms", label: "Funeral Programs" },
                  { name: "graveLiners", label: "Grave Liners" },
                  { name: "graveDigging", label: "Grave Digging" },
                ].map((service) => (
                  <p key={service.name}>
                    <span className="font-medium">{service.label}:</span>{" "}
                    {formData[service.name] ? "Yes" : "No"}
                  </p>
                ))}
              </div>
            </div>

            {/* Cover Options Summary */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Selected Cover Option
              </h4>
              {availableCoverOptions
                .filter((option) => option.value === formData.coverAmount)
                .map((option) => (
                  <div key={option.value} className="space-y-2">
                    <p>
                      <span className="font-medium">Provider:</span>{" "}
                      {option.provider}
                    </p>
                    <p>
                      <span className="font-medium">Cover Amount:</span> R
                      {option.label}/month
                    </p>
                    <p>
                      <span className="font-medium">Features:</span>{" "}
                      {option.features.join(", ")}
                    </p>
                  </div>
                ))}
            </div>

            {/* Confirmation Message */}
            <div className="bg-green-50 p-6 rounded-lg shadow-sm">
              <h4 className="text-lg font-semibold text-green-800 mb-4">
                Thank You!
              </h4>
              <p className="text-green-700">
                Please review your details above. If everything is correct,
                click <span className="font-semibold">Submit</span> to complete
                your application.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Add this success view component
  const SuccessView = () => (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg text-center relative">
        {/* Success Icon */}
        <div className="mx-auto w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
          <svg
            className="w-16 h-16 text-green-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        {/* Success Message */}
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Application Submitted!
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Thank you for choosing CoverUp. We'll be in touch with you shortly.
          </p>
        </div>

        {/* Reference Number */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <p className="text-sm text-gray-500">Reference Number</p>
          <p className="text-lg font-semibold text-gray-700">
            {`REF-${Date.now().toString().slice(-8)}`}
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-6">
          <button
            onClick={() => window.location.href = '/'}
            className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#00c2ff] hover:bg-[#00b3eb] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00c2ff]"
          >
            Return to Home
          </button>
        </div>

        {/* Additional Info */}
        <div className="mt-4 text-sm text-gray-500">
          <p>A confirmation email has been sent to your inbox.</p>
          <p className="mt-2">
            Need help? Contact us at{" "}
            <a
              href="mailto:support@coverup.co.za"
              className="text-[#00c2ff] hover:text-[#00b3eb]"
            >
              support@coverup.co.za
            </a>
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {showConfetti && <Confetti recycle={!isSubmitted} />}
      {isSubmitted ? (
        <SuccessView />
      ) : (
        <div 
          className="min-h-screen flex flex-col py-12 px-4 sm:px-6 lg:px-8 relative"
          style={{
            backgroundImage: 'url("/images/greeny.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundAttachment: 'fixed',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
          }}
        >
          {/* Update the overlay to be more transparent */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 to-indigo-50/40"></div>
          
          {/* Main content container */}
          <div className="max-w-3xl mx-auto w-full relative z-10">
            {/* Progress Steps */}
            <div className="mb-8 w-full">
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

            {/* Form Container - make slightly more transparent */}
            <div className="bg-white/85 rounded-xl shadow-lg p-8 w-full backdrop-blur-sm">
              <form onSubmit={handleSubmit} className="space-y-6 w-full">
                {renderFormStep()}

                {/* Navigation buttons */}
                <div className="flex justify-between pt-6">
                  {currentStep > 1 && (
                    <button
                      type="button"
                      onClick={() => setCurrentStep((prev) => prev - 1)}
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
                      {currentStep === totalSteps - 1 ? 'Submit' : 'Next'}
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
      )}
    </>
  );
};

export default ComparisonForm;
