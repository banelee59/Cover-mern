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

  // Add this state for price range filter
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  // Add this useEffect for Google Places initialization
  useEffect(() => {
    if (!window.google || !window.google.maps || !window.google.maps.places) {
      console.error('Google Places API not loaded');
      return;
    }

    try {
      autocompleteRef.current = new window.google.maps.places.AutocompleteService();
      placeDetailsService.current = new window.google.maps.places.PlacesService(
        document.createElement('div')
      );
    } catch (error) {
      console.error('Error initializing Google Places:', error);
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
  const handleSuggestionSelect = async (suggestion) => {
    if (!placeDetailsService.current) {
      console.error('Place Details service not initialized');
      return;
    }

    try {
      placeDetailsService.current.getDetails(
        { placeId: suggestion.placeId },
        (place, status) => {
          if (status === 'OK' && place) {
            // Process address components
            const addressComponents = {};
            place.address_components.forEach((component) => {
              const type = component.types[0];
              addressComponents[type] = component.long_name;
            });

            setFormData((prev) => ({
              ...prev,
              address: {
                street: `${addressComponents.street_number || ''} ${addressComponents.route || ''
                  }`.trim(),
                suburb: addressComponents.sublocality || '',
                city: addressComponents.locality || '',
                province: addressComponents.administrative_area_level_1 || '',
                postalCode: addressComponents.postal_code || '',
              },
            }));
          } else {
            console.error('Error fetching place details:', status);
          }
        }
      );
    } catch (error) {
      console.error('Error selecting address:', error);
    }

    setSuggestions([]);
  };

  const [referenceNumber, setReferenceNumber] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateStep(currentStep)) {
      setShowConfetti(true);

      try {
        // First API call to save form data
        const formResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/submit-application`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            ...formData,
            totalPremium: calculateTotalPremium(formData),
          }),
        });

        if (!formResponse.ok) {
          throw new Error('Form submission failed');
        }

        const responseData = await formResponse.json();
        setReferenceNumber(responseData.referenceNumber);

        // Second API call to send email notification
        const emailResponse = await fetch(`${process.env.REACT_APP_API_URL}/send-email`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: formData.email,
            subject: 'CoverUp Insurance Application Confirmation',
            name: `${formData.firstName} ${formData.lastName}`,
            referenceNumber: `REF-${Date.now().toString().slice(-8)}`,
            selectedPlan: formData.coverAmount,
            totalPremium: calculateTotalPremium(formData)
          }),
        });

        if (!emailResponse.ok) {
          console.warn('Email notification failed, but form was submitted');
        }

        // Show success state
        setIsSubmitted(true);

      } catch (error) {
        console.error('Submission error:', error);
        setErrors(prev => ({
          ...prev,
          submission: 'There was an error submitting your application. Please try again.'
        }));
        setShowConfetti(false);
      }
    } else {
      console.log("Validation failed for step:", currentStep);
      setErrors(prev => ({
        ...prev,
        submission: 'Please complete all required fields before submitting.'
      }));
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
    console.log('Validating step:', step);
    console.log('Current form data:', formData);

    switch (step) {
      case 1:
        // Profile Details validation
        if (!formData.title?.trim()) newErrors.title = "Title is required";
        if (!formData.firstName?.trim()) newErrors.firstName = "First name is required";
        if (!formData.lastName?.trim()) newErrors.lastName = "Last name is required";
        if (!formData.idNumber?.trim() || !validateIdNumber(formData.idNumber)) {
          newErrors.idNumber = "Please enter a valid 13-digit South African ID number";
        }
        if (!formData.gender?.trim()) newErrors.gender = "Gender is required";
        if (!formData.email?.trim() || !validateEmail(formData.email)) {
          newErrors.email = "Please enter a valid email address";
        }
        if (!formData.phoneNumber?.trim() || !validatePhoneNumber(formData.phoneNumber)) {
          newErrors.phoneNumber = "Please enter a valid South African phone number";
        }
        // Make address fields optional
        break;

      case 2:
        // Policy Details validation
        if (!formData.policyType?.trim()) {
          newErrors.policyType = "Policy type is required";
        }
        if (!formData.premiumFrequency?.trim()) {
          newErrors.premiumFrequency = "Premium frequency is required";
        }
        // Allow dependents to be 0
        if (formData.dependents === "" || formData.dependents === undefined) {
          newErrors.dependents = "Number of dependents is required";
        }
        break;

      case 3:
        // Extra Services validation - no required fields
        break;

      case 4:
        //  if (!formData.coverAmount || isNaN(formData.coverAmount) || formData.coverAmount <= 0) {
        //     newErrors.coverAmount = "Please select a valid cover amount";
        //   }
        break;

      default:
        break;
    }

    console.log('Validation errors:', newErrors);
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

  // Add this constant for extra service prices
  const extraServices = [
    { name: "draping", label: "Draping", price: 10 },
    { name: "mobileToilets", label: "Mobile Toilets", price: 10 },
    { name: "groceryBenefit", label: "Grocery Benefit", price: 10 },
    { name: "mobileFridge", label: "Mobile Fridge", price: 10 },
    { name: "soundSystem", label: "Sound System", price: 10 },
    { name: "videoStreaming", label: "Video Streaming", price: 10 },
    { name: "airtimeAllowance", label: "Airtime Allowance", price: 10 },
    { name: "tombstone", label: "Tombstone", price: 10 },
    { name: "catering", label: "Catering", price: 10 },
    { name: "griefCounselling", label: "Grief Counselling", price: 10 },
    { name: "floralArrangements", label: "Floral Arrangements", price: 10 },
    { name: "urns", label: "Urns", price: 10 },
    { name: "funeralPrograms", label: "Funeral Programs", price: 10 },
    { name: "graveLiners", label: "Grave Liners", price: 10 },
    { name: "graveDigging", label: "Grave Digging", price: 10 }
  ];

  // Add this function to filter options by price
  const getFilteredOptions = () => {
    return availableCoverOptions.filter(option => {
      const price = parseInt(option.label);
      if (priceRange.min && priceRange.max) {
        return price >= parseInt(priceRange.min) && price <= parseInt(priceRange.max);
      }
      if (priceRange.min) {
        return price >= parseInt(priceRange.min);
      }
      if (priceRange.max) {
        return price <= parseInt(priceRange.max);
      }
      return true;
    });
  };

  // Update the table in case 3
  const renderFormStep = () => {
    switch (currentStep) {
      case 1: // Profile Details
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Personal Information
            </h3>

            {/* First Row - Title, First Name, Last Name */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Title
                </label>
              <select
                name="title"
                value={formData.title}
                onChange={handleChange}
                className={`w-full p-3 border ${errors.title ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-[#00c2ff] focus:border-[#00c2ff] bg-white`}
                required
              >
                  <option value="">Title</option>
                  <option value="Mr">Mr</option>
                  <option value="Mrs">Mrs</option>
                <option value="Ms">Ms</option>
                <option value="Dr">Dr</option>
                </select>
                {renderError("title")}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name"
                  className={`w-full p-3 border ${errors.firstName ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-[#00c2ff] focus:border-[#00c2ff]`}
                  required
                />
                {renderError("firstName")}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last Name"
                  className={`w-full p-3 border ${errors.lastName ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-[#00c2ff] focus:border-[#00c2ff]`}
                  required
                />
                {renderError("lastName")}
              </div>
            </div>

            {/* Second Row - ID Number, Gender, Email */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  ID Number
                </label>
                <input
                  type="text"
                  name="idNumber"
                  value={formData.idNumber}
                  onChange={handleChange}
                  placeholder="ID Number"
                  className={`w-full p-3 border ${errors.idNumber ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-[#00c2ff] focus:border-[#00c2ff]`}
                  required
                />
                {renderError("idNumber")}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={`w-full p-3 border ${errors.gender ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-[#00c2ff] focus:border-[#00c2ff] bg-white`}
                  required
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
                {renderError("gender")}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className={`w-full p-3 border ${errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-[#00c2ff] focus:border-[#00c2ff]`}
                  required
                />
                {renderError("email")}
              </div>
            </div>

            {/* Third Row - Phone Number, Alternative Number, Marital Status */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className={`w-full p-3 border ${errors.phoneNumber ? "border-red-500" : "border-gray-300"
                    } rounded-lg focus:ring-2 focus:ring-[#00c2ff] focus:border-[#00c2ff]`}
                  required
                />
                {renderError("phoneNumber")}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Alternative Number
                </label>
                <input
                  type="tel"
                  name="alternativeNumber"
                  value={formData.alternativeNumber}
                  onChange={handleChange}
                  placeholder="Alternative number"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c2ff] focus:border-[#00c2ff]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Marital Status
                </label>
                <select
                  name="maritalStatus"
                  value={formData.maritalStatus}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c2ff] focus:border-[#00c2ff] bg-white"
                  required
                >
                  <option value="">Marital status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>
            </div>

            {/* Physical Address Section */}
            <div className="space-y-4 pt-4">
              <h4 className="text-lg font-semibold text-gray-800">
                Physical address
              </h4>

              {/* Address Row 1 - Street Address, Suburb, City */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address.street"
                    value={formData.address.street}
                    onChange={handleChange}
                    placeholder="Street Address"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c2ff] focus:border-[#00c2ff]"
                    required
                  />
                </div>
                <div className="relative">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Suburb
                  </label>
                  <input
                    type="text"
                    name="address.suburb"
                    value={formData.address.suburb || ''}
                    onChange={handleSuburbChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c2ff] focus:border-[#00c2ff]"
                    placeholder="Suburb"
                    autoComplete="off"
                  />
                  {suggestions.length > 0 && (
                    <div className="absolute z-50 w-full mt-1 bg-white shadow-xl rounded-lg border border-gray-200 max-h-60 overflow-y-auto">
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
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="address.city"
                    value={formData.address.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c2ff] focus:border-[#00c2ff]"
                    required
                  />
                </div>
              </div>

              {/* Address Row 2 - Province, Postal Code, Employment Status */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Province
                  </label>
                  <select
                    name="address.province"
                    value={formData.address.province}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c2ff] focus:border-[#00c2ff] bg-white"
                    required
                  >
                    <option value="">Select Province</option>
                    <option value="Gauteng">Gauteng</option>
                    <option value="Western Cape">Western Cape</option>
                    <option value="Eastern Cape">Eastern Cape</option>
                    <option value="KwaZulu-Natal">KwaZulu-Natal</option>
                    <option value="Free State">Free State</option>
                    <option value="Limpopo">Limpopo</option>
                    <option value="Mpumalanga">Mpumalanga</option>
                    <option value="North West">North West</option>
                    <option value="Northern Cape">Northern Cape</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="address.postalCode"
                    value={formData.address.postalCode}
                    onChange={handleChange}
                    placeholder="Postal code"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c2ff] focus:border-[#00c2ff]"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Employment Status
                  </label>
                  <select
                    name="employmentStatus"
                    value={formData.employmentStatus}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c2ff] focus:border-[#00c2ff] bg-white"
                    required
                  >
                    <option value="">Employment status</option>
                    <option value="employed">Employed</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="retired">Retired</option>
                  </select>
                </div>
              </div>

              {/* Monthly Income Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Monthly Income
                  </label>
                  <input
                    type="text"
                    name="monthlyIncome"
                    value={formData.monthlyIncome}
                    onChange={handleChange}
                    placeholder="Monthly income"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00c2ff] focus:border-[#00c2ff]"
                    required
                  />
                </div>
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
                      Price
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
                  {extraServices.map((service) => (
                    <tr key={service.name} className="hover:bg-gray-50">
                      <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">
                        {service.label}
                      </td>
                      <td className="px-4 py-2 text-center text-sm text-gray-700 border-b border-gray-200">
                        R{service.price}
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
                              totalPremium: calculateTotalPremium(prev, service.name, true)
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
                              totalPremium: calculateTotalPremium(prev, service.name, false)
                            }));
                          }}
                          className="w-4 h-4 text-[#00c2ff] rounded border-gray-300 focus:ring-[#00c2ff]"
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Total Premium Display */}
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <p className="text-lg font-semibold text-gray-800">
                  Total Monthly Premium:
                  <span className="text-[#00c2ff] ml-2">
                    R{calculateTotalPremium(formData)}
                  </span>
                </p>
              </div>
            </div>
          </div>
        );

      case 4: // Cover Options
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Compare Funeral Cover Options
            </h3>

            {/* Price Range Filter */}
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h4 className="text-sm font-medium text-gray-700 mb-3">
                Filter by Monthly Premium
              </h4>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">R</span>
                  <input
                    type="number"
                    placeholder="Min"
                    value={priceRange.min}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                    className="w-24 p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
                  />
                </div>
                <span className="text-gray-400">to</span>
                <div className="flex items-center gap-2">
                  <span className="text-gray-600">R</span>
                  <input
                    type="number"
                    placeholder="Max"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                    className="w-24 p-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
                  />
                </div>
                <button
                  onClick={() => setPriceRange({ min: '', max: '' })}
                  className="px-3 py-2 text-sm text-gray-600 hover:text-[#00c2ff] transition-colors"
                >
                  Reset
                </button>
              </div>
            </div>

            {formData.address.province ? (
              <>
                <div className="grid gap-6">
                  {getFilteredOptions().map((option) => (
                    <div key={option.value} className="space-y-4">
                      <div className="bg-white p-6 rounded-lg border-2 hover:border-[#00c2ff] transition-colors cursor-pointer">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-4">
                              <input
                                type="radio"
                                name="coverAmount"
                                value={option.value}
                                checked={formData.coverAmount === option.value}
                                onChange={() => {
                                  setFormData(prev => ({
                                    ...prev,
                                    coverAmount: option.value,
                                    totalPremium: calculateTotalPremium({
                                      ...prev,
                                      coverAmount: option
                                    })
                                  }));
                                }}
                                className="w-4 h-4 text-[#00c2ff] border-gray-300 focus:ring-[#00c2ff]"
                              />
                              <div>
                                <h4 className="text-lg font-semibold text-gray-800">
                                  {option.provider}
                                </h4>
                                <div className="flex flex-col gap-1">
                                  <p className="text-sm text-gray-600">
                                    From{" "}
                                    <span className="font-semibold text-[#00c2ff]">
                                      R{option.label}
                                    </span>
                                    /month
                                  </p>
                                  {/* Add new premium breakdown */}
                                  <div className="flex items-center gap-2 text-sm">
                                    <span className="text-gray-600">Selected extras:</span>
                                    <span className="font-medium text-[#00c2ff]">
                                      +R{calculateTotalPremium({
                                        ...formData,
                                        coverAmount: option
                                      }) - parseInt(option.label)}
                                    </span>
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <span className="text-gray-600 font-medium">Total monthly premium:</span>
                                    <span className="font-bold text-[#00c2ff]">
                                      R{calculateTotalPremium({
                                        ...formData,
                                        coverAmount: option
                                      })}
                                    </span>
                                  </div>
                                  <p className="text-xs text-gray-500 italic">
                                    * Includes base premium and selected extra benefits (R10 each)
                                  </p>
                                </div>
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
                              {"★".repeat(Math.floor(option.rating))}
                              {"☆".repeat(5 - Math.floor(option.rating))}
                            </div>
                            <div className="text-sm text-gray-500">{option.rating}/5</div>
                          </div>
                        </div>
                      </div>

                      {/* Smaller Show More Button */}
                      <div className="mt-4 flex justify-end">
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
                            className={`w-3 h-3 transition-transform ${selectedOptionDetails === option.provider
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
                      </div>

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

                {/* No Results Message */}
                {getFilteredOptions().length === 0 && (
                  <div className="text-center py-8">
                    <p className="text-gray-500">
                      No cover options found in this price range.
                    </p>
                    <button
                      onClick={() => setPriceRange({ min: '', max: '' })}
                      className="mt-2 text-[#00c2ff] hover:text-[#00b3eb] transition-colors"
                    >
                      Reset Filters
                    </button>
                  </div>
                )}
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
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Review Your Application
            </h3>

            {/* Selected Plan Summary - Highlighted Box */}
            <div className="bg-[#00c2ff]/10 p-6 rounded-lg border border-[#00c2ff]/20">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-[#00c2ff]">
                    Selected Plan
                  </h4>
                  {availableCoverOptions
                    .filter((option) => option.value === formData.coverAmount)
                    .map((option) => (
                      <div key={option.value} className="mt-2 space-y-1">
                        <p className="text-xl font-bold text-gray-800">
                          {option.provider}
                        </p>
                        <p className="text-gray-600">
                          Base Premium: <span className="font-semibold">R{option.label}/month</span>
                        </p>
                        <p className="text-[#00c2ff] font-semibold">
                          Total Premium: R{calculateTotalPremium(formData)}/month
                        </p>
                      </div>
                    ))}
                </div>
                <img
                  src="/images/providers/mpiti.png"
                  alt="Provider Logo"
                  className="w-20 h-20 object-contain"
                />
              </div>
            </div>

            {/* Main Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00c2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Personal Information
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Full Name:</span>
                    <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ID Number:</span>
                    <span className="font-medium">{formData.idNumber}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Email:</span>
                    <span className="font-medium">{formData.email}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Phone:</span>
                    <span className="font-medium">{formData.phoneNumber}</span>
                  </div>
                </div>
              </div>

              {/* Address Information */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00c2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Address Details
                </h4>
                <div className="space-y-3">
                  <p className="text-gray-600">
                    {formData.address.street},<br />
                    {formData.address.suburb},<br />
                    {formData.address.city},<br />
                    {formData.address.province}, {formData.address.postalCode}
                  </p>
                </div>
              </div>

              {/* Selected Extras */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00c2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                  Selected Extra Benefits
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {Object.entries(formData)
                    .filter(([key, value]) => typeof value === 'boolean' && value === true)
                    .map(([key]) => (
                      <div key={key} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-gray-600">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Policy Details */}
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <svg className="w-5 h-5 text-[#00c2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Policy Details
                </h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Policy Type:</span>
                    <span className="font-medium">{formData.policyType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Premium Frequency:</span>
                    <span className="font-medium">{formData.premiumFrequency}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Dependents:</span>
                    <span className="font-medium">{formData.dependents}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Terms and Confirmation */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-[#00c2ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-600">
                  By clicking Submit, you confirm that all the information provided is accurate and complete.
                  You understand that any false information may result in your application being rejected or
                  your policy being voided.
                </p>
              </div>
            </div>
          </div>
        );

      case 6: // Success Step
        return (
          <div className="text-center space-y-6 py-8">
            <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center">
              <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-gray-800">
              Application Successfully Submitted!
            </h3>

            <div className="bg-gray-50 p-6 rounded-lg max-w-md mx-auto">
              <p className="text-gray-600 mb-4">
                Thank you for choosing CoverUp Insurance. Your application has been received and is being processed.
              </p>

              <div className="bg-white p-4 rounded-lg border border-gray-200">
                <p className="text-sm text-gray-500">Your Reference Number</p>
                <p className="text-xl font-bold text-[#00c2ff]">{referenceNumber}</p>
              </div>
            </div>

            <div className="text-sm text-gray-600 space-y-2">
              <p>A confirmation email has been sent to {formData.email}</p>
              <p>Please keep your reference number for future correspondence.</p>
            </div>

            <div className="mt-8">
              <button
                onClick={() => window.location.reload()}
                className="px-6 py-2 bg-[#00c2ff] text-white rounded-lg hover:bg-[#00b3eb] transition-colors"
              >
                Start New Application
              </button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  // Update the SuccessView component to include the reference number from form data
  const SuccessView = () => {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
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
              {referenceNumber}
            </p>
          </div>

          {/* Selected Plan Details */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-500">Selected Plan</p>
            <p className="text-lg font-semibold text-gray-700">
              {formData.coverAmount}
            </p>
            <p className="text-sm text-gray-500 mt-2">Monthly Premium</p>
            <p className="text-lg font-semibold text-[#00c2ff]">
              R{calculateTotalPremium(formData)}
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
  };

  // Add this function to calculate total premium
  const calculateTotalPremium = (formData, changedService = null, newValue = null) => {
    let basePremium = parseInt(formData.coverAmount?.label || 0);

    let extrasCost = 0;
    extraServices.forEach(service => {
      if (service.name === changedService ? newValue : formData[service.name]) {
        extrasCost += service.price;
      }
    });

    return basePremium + extrasCost;
  };

  return (
    <>
      {showConfetti && <Confetti recycle={!isSubmitted} />}
      {isSubmitted ? (
        <SuccessView />
      ) : (
        <div
          className="min-h-screen flex flex-col relative bg-white overflow-hidden"
        >
          {/* Main content container */}
          <div className="w-full relative mb-24 mt-0 z-10">
            {/* Background Image */}
            <div className="absolute top-0 left-0 right-0 z-0" style={{
              backgroundImage: 'url("/images/turtle-9.jpg")',
              backgroundSize: 'cover',
              backgroundPosition: ' top',
              backgroundRepeat: 'no-repeat',
              width: '1440px',
              height: '129px',
              flexShrink: 0
            }}></div>

            {/* Progress Bar */}
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full max-w-md">
              <div className="flex justify-center">
                <div className="flex items-center space-x-8">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-[#00c2ff] text-white' : 'bg-gray-200 text-gray-500'}`}>
                      <span>1</span>
                    </div>
                    <span className="mt-1 text-xs text-white whitespace-nowrap">Personal Details</span>
                  </div>
                  <div className="flex-1 border-t border-gray-300"></div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-[#00c2ff] text-white' : 'bg-gray-200 text-gray-500'}`}>
                      <span>2</span>
                    </div>
                    <span className="mt-1 text-xs text-white whitespace-nowrap">Policy Details</span>
                  </div>
                  <div className="flex-1 border-t border-gray-300"></div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 3 ? 'bg-[#00c2ff] text-white' : 'bg-gray-200 text-gray-500'}`}>
                      <span>3</span>
                    </div>
                    <span className="mt-1 text-xs text-white whitespace-nowrap">Extra Options</span>
                  </div>
                  <div className="flex-1 border-t border-gray-300"></div>

                  {/* Step 4 */}
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 4 ? 'bg-[#00c2ff] text-white' : 'bg-gray-200 text-gray-500'}`}>
                      <span>4</span>
                    </div>
                    <span className="mt-1 text-xs text-white whitespace-nowrap">Cover Options</span>
                  </div>
                  <div className="flex-1 border-t border-gray-300"></div>

                  {/* Step 5 */}
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${currentStep >= 5 ? 'bg-[#00c2ff] text-white' : 'bg-gray-200 text-gray-500'}`}>
                      <span>5</span>
                    </div>
                    <span className="mt-1 text-xs text-white whitespace-nowrap">Confirmation</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-xl shadow-lg p-8 mt-40 w-full">
              <form onSubmit={handleSubmit} className="space-y-6 w-full h-full">
                {renderFormStep()}

                {/* Navigation buttons */}
                <div className="flex justify-between pt-6 w-full">
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
