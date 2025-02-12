import React, { useState } from 'react';

const FuneralParlorRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6; // Updated to match PDF sections

  const steps = [
    { number: 1, title: "Business Details" },
    { number: 2, title: "Contact Details" },
    { number: 3, title: "Physical Address" },
    { number: 4, title: "Operational Information" },
    { number: 5, title: "Documentation" },
    { number: 6, title: "Declaration" }
  ];

  const [formData, setFormData] = useState({
    // Business Details
    businessName: '',
    tradingName: '',
    registrationNumber: '',
    vatNumber: '',
    businessType: '',
    dateEstablished: '',
    
    // Contact Details
    contactPerson: {
      title: '',
      firstName: '',
      lastName: '',
      position: '',
      idNumber: '',
      email: '',
      cellphone: '',
      telephone: ''
    },
    
    // Physical Address
    physicalAddress: {
      streetNumber: '',
      streetName: '',
      suburb: '',
      city: '',
      province: '',
      postalCode: '',
      gpsCoordinates: ''
    },
    
    // Operational Information
    operationalHours: {
      weekdays: '',
      weekends: '',
      publicHolidays: ''
    },
    facilities: {
      mortuary: false,
      storageFacility: false,
      refrigeration: '',
      chapel: false,
      chapelCapacity: '',
      parking: false,
      parkingCapacity: '',
      disabledAccess: false,
      kitchen: false,
      restrooms: false
    },
    
    // Documentation
    documents: {
      businessRegistration: false,
      taxClearance: false,
      municipalPermit: false,
      healthCertificate: false,
      directorIdentity: false,
      proofOfAddress: false,
      bankStatement: false
    },
    
    // Declaration
    declaration: {
      agreed: false,
      name: '',
      position: '',
      date: '',
      signature: ''
    }
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const getCurrentStepFields = () => {
    switch (currentStep) {
      case 1: // Business Details
        return [
          { name: 'businessName' },
          { name: 'registrationNumber' },
          { name: 'businessType' },
          { name: 'dateEstablished' }
        ];
      case 2: // Contact Details
        return [
          { name: 'title', section: 'contactPerson' },
          { name: 'firstName', section: 'contactPerson' },
          { name: 'lastName', section: 'contactPerson' },
          { name: 'position', section: 'contactPerson' },
          { name: 'idNumber', section: 'contactPerson' },
          { name: 'email', section: 'contactPerson' },
          { name: 'cellphone', section: 'contactPerson' }
        ];
      case 3: // Physical Address
        return [
          { name: 'streetNumber', section: 'physicalAddress' },
          { name: 'streetName', section: 'physicalAddress' },
          { name: 'suburb', section: 'physicalAddress' },
          { name: 'city', section: 'physicalAddress' },
          { name: 'province', section: 'physicalAddress' },
          { name: 'postalCode', section: 'physicalAddress' }
        ];
      case 4: // Operational Information
        return [
          { name: 'weekdays', section: 'operationalHours' }
        ];
      case 5: // Documentation
        return Object.keys(formData.documents).map(doc => ({
          name: doc,
          section: 'documents'
        }));
      case 6: // Declaration
        return [
          { name: 'agreed', section: 'declaration' },
          { name: 'name', section: 'declaration' },
          { name: 'position', section: 'declaration' },
          { name: 'date', section: 'declaration' },
          { name: 'signature', section: 'declaration' }
        ];
      default:
        return [];
    }
  };

  const getAllFields = () => {
    return [
      ...getCurrentStepFields(1),
      ...getCurrentStepFields(2),
      ...getCurrentStepFields(3),
      ...getCurrentStepFields(4),
      ...getCurrentStepFields(5),
      ...getCurrentStepFields(6)
    ];
  };

  const validateField = (name, value, section = null) => {
    let error = '';
    
    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const isValidPhone = (phone) => {
      return /^[0-9]{10}$/.test(phone.replace(/[^0-9]/g, ''));
    };

    const isValidIDNumber = (id) => {
      return /^[0-9]{13}$/.test(id.replace(/[^0-9]/g, ''));
    };

    const fieldValue = section ? value[section][name] : value[name];

    switch (name) {
      case 'businessName':
        if (!fieldValue) error = 'Business name is required';
        else if (fieldValue.length < 3) error = 'Business name must be at least 3 characters';
        break;

      case 'registrationNumber':
        if (!fieldValue) error = 'Registration number is required';
        break;

      case 'businessType':
        if (!fieldValue) error = 'Business type is required';
        break;

      case 'dateEstablished':
        if (!fieldValue) error = 'Date established is required';
        break;

      case 'title':
        if (!fieldValue) error = 'Title is required';
        break;

      case 'firstName':
        if (!fieldValue) error = 'First name is required';
        break;

      case 'lastName':
        if (!fieldValue) error = 'Last name is required';
        break;

      case 'position':
        if (!fieldValue) error = 'Position is required';
        break;

      case 'idNumber':
        if (!fieldValue) error = 'ID number is required';
        else if (!isValidIDNumber(fieldValue)) error = 'Please enter a valid 13-digit ID number';
        break;

      case 'email':
        if (!fieldValue) error = 'Email is required';
        else if (!isValidEmail(fieldValue)) error = 'Please enter a valid email address';
        break;

      case 'cellphone':
        if (!fieldValue) error = 'Cell phone is required';
        else if (!isValidPhone(fieldValue)) error = 'Please enter a valid 10-digit phone number';
        break;

      case 'streetNumber':
      case 'streetName':
      case 'suburb':
      case 'city':
      case 'province':
      case 'postalCode':
        if (!fieldValue) error = `${name.replace(/([A-Z])/g, ' $1').trim()} is required`;
        break;

      default:
        break;
    }

    return error;
  };

  const handleChange = (e, section) => {
    const { name, value, type, checked } = e.target;
    
    if (section) {
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [name]: type === 'checkbox' ? checked : value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    setTouched(prev => ({
      ...prev,
      [section ? `${section}.${name}` : name]: true
    }));

    const error = validateField(name, formData, section);
    setErrors(prev => ({
      ...prev,
      [section ? `${section}.${name}` : name]: error
    }));
  };

  const handleNext = () => {
    const currentFields = getCurrentStepFields();
    const newErrors = {};
    let hasErrors = false;

    currentFields.forEach(field => {
      const error = validateField(field.name, formData, field.section);
      if (error) {
        newErrors[field.section ? `${field.section}.${field.name}` : field.name] = error;
        hasErrors = true;
        setTouched(prev => ({
          ...prev,
          [field.section ? `${field.section}.${field.name}` : field.name]: true
        }));
      }
    });

    setErrors(prev => ({ ...prev, ...newErrors }));

    if (!hasErrors) {
      setCurrentStep(prev => prev + 1);
    } else {
      const errorSection = document.querySelector('.form-errors');
      if (errorSection) {
        errorSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const allFields = getAllFields();
    const newErrors = {};
    let hasErrors = false;

    allFields.forEach(field => {
      const error = validateField(field.name, formData, field.section);
      if (error) {
        newErrors[field.section ? `${field.section}.${field.name}` : field.name] = error;
        hasErrors = true;
      }
    });

    setErrors(newErrors);

    if (hasErrors) {
      alert('Please fill in all required fields correctly before submitting.');
      return;
    }

    try {
      const response = await fetch('/api/parlors/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        alert('Registration successful!');
      } else {
        alert('Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  // Improved Progress Bar with better connections
  const ProgressBar = () => (
    <div className="mb-12 px-8">
      <div className="flex items-center justify-between relative">
        {/* Background Line */}
        <div 
          className="absolute top-[20px] left-[50px] right-[50px] h-1 bg-gray-200 -z-1"
          style={{ width: 'calc(100% - 100px)' }}
        />
        
        {/* Progress Line */}
        <div 
          className="absolute top-[20px] left-[50px] h-1 bg-[#00c2ff] transition-all duration-500 -z-1"
          style={{ 
            width: `calc(${((currentStep - 1) / (steps.length - 1)) * 100}% - ${currentStep === 1 ? 50 : 0}px)` 
          }}
        />
        
        {/* Step Indicators */}
        {steps.map((step, index) => (
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

  const renderBusinessDetails = () => (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Business Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Registered Business Name*
          </label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            onBlur={() => setTouched(prev => ({ ...prev, businessName: true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors.businessName && touched.businessName 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors.businessName && touched.businessName && (
            <p className="mt-1 text-sm text-red-600">{errors.businessName}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Trading Name (if different)
          </label>
          <input
            type="text"
            name="tradingName"
            value={formData.tradingName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Registration Number*
          </label>
          <input
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            VAT Registration Number
          </label>
          <input
            type="text"
            name="vatNumber"
            value={formData.vatNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type of Business*
          </label>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors.businessType && touched.businessType 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          >
            <option value="">Select Business Type</option>
            <option value="Sole Proprietor">Sole Proprietor</option>
            <option value="Partnership">Partnership</option>
            <option value="Private Company">Private Company (Pty) Ltd</option>
            <option value="Close Corporation">Close Corporation</option>
          </select>
          {errors.businessType && touched.businessType && (
            <p className="mt-1 text-sm text-red-600">{errors.businessType}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date Established*
          </label>
          <input
            type="date"
            name="dateEstablished"
            value={formData.dateEstablished}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors.dateEstablished && touched.dateEstablished 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors.dateEstablished && touched.dateEstablished && (
            <p className="mt-1 text-sm text-red-600">{errors.dateEstablished}</p>
          )}
        </div>
      </div>
    </div>
  );

  const renderContactDetails = () => (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Contact Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title*</label>
          <select
            name="title"
            value={formData.contactPerson.title}
            onChange={(e) => handleChange(e, 'contactPerson')}
            onBlur={() => setTouched(prev => ({ ...prev, 'contactPerson.title': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['contactPerson.title'] && touched['contactPerson.title'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          >
            <option value="">Select Title</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
          </select>
          {errors['contactPerson.title'] && touched['contactPerson.title'] && (
            <p className="mt-1 text-sm text-red-600">{errors['contactPerson.title']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
          <input
            type="text"
            name="firstName"
            value={formData.contactPerson.firstName}
            onChange={(e) => handleChange(e, 'contactPerson')}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['contactPerson.firstName'] && touched['contactPerson.firstName'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['contactPerson.firstName'] && touched['contactPerson.firstName'] && (
            <p className="mt-1 text-sm text-red-600">{errors['contactPerson.firstName']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
          <input
            type="text"
            name="lastName"
            value={formData.contactPerson.lastName}
            onChange={(e) => handleChange(e, 'contactPerson')}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['contactPerson.lastName'] && touched['contactPerson.lastName'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['contactPerson.lastName'] && touched['contactPerson.lastName'] && (
            <p className="mt-1 text-sm text-red-600">{errors['contactPerson.lastName']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Position*</label>
          <input
            type="text"
            name="position"
            value={formData.contactPerson.position}
            onChange={(e) => handleChange(e, 'contactPerson')}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['contactPerson.position'] && touched['contactPerson.position'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['contactPerson.position'] && touched['contactPerson.position'] && (
            <p className="mt-1 text-sm text-red-600">{errors['contactPerson.position']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">ID Number*</label>
          <input
            type="text"
            name="idNumber"
            value={formData.contactPerson.idNumber}
            onChange={(e) => handleChange(e, 'contactPerson')}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['contactPerson.idNumber'] && touched['contactPerson.idNumber'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['contactPerson.idNumber'] && touched['contactPerson.idNumber'] && (
            <p className="mt-1 text-sm text-red-600">{errors['contactPerson.idNumber']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email*</label>
          <input
            type="email"
            name="email"
            value={formData.contactPerson.email}
            onChange={(e) => handleChange(e, 'contactPerson')}
            onBlur={() => setTouched(prev => ({ ...prev, 'contactPerson.email': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['contactPerson.email'] && touched['contactPerson.email'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['contactPerson.email'] && touched['contactPerson.email'] && (
            <p className="mt-1 text-sm text-red-600">{errors['contactPerson.email']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Cellphone*</label>
          <input
            type="text"
            name="cellphone"
            value={formData.contactPerson.cellphone}
            onChange={(e) => handleChange(e, 'contactPerson')}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['contactPerson.cellphone'] && touched['contactPerson.cellphone'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['contactPerson.cellphone'] && touched['contactPerson.cellphone'] && (
            <p className="mt-1 text-sm text-red-600">{errors['contactPerson.cellphone']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Telephone</label>
          <input
            type="text"
            name="telephone"
            value={formData.contactPerson.telephone}
            onChange={(e) => handleChange(e, 'contactPerson')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
          />
        </div>
      </div>
    </div>
  );

  const renderPhysicalAddress = () => (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Physical Address</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Street Number*</label>
          <input
            type="text"
            name="streetNumber"
            value={formData.physicalAddress.streetNumber}
            onChange={(e) => handleChange(e, 'physicalAddress')}
            onBlur={() => setTouched(prev => ({ ...prev, 'physicalAddress.streetNumber': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['physicalAddress.streetNumber'] && touched['physicalAddress.streetNumber'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['physicalAddress.streetNumber'] && touched['physicalAddress.streetNumber'] && (
            <p className="mt-1 text-sm text-red-600">{errors['physicalAddress.streetNumber']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Street Name*</label>
          <input
            type="text"
            name="streetName"
            value={formData.physicalAddress.streetName}
            onChange={(e) => handleChange(e, 'physicalAddress')}
            onBlur={() => setTouched(prev => ({ ...prev, 'physicalAddress.streetName': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['physicalAddress.streetName'] && touched['physicalAddress.streetName'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['physicalAddress.streetName'] && touched['physicalAddress.streetName'] && (
            <p className="mt-1 text-sm text-red-600">{errors['physicalAddress.streetName']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Suburb*</label>
          <input
            type="text"
            name="suburb"
            value={formData.physicalAddress.suburb}
            onChange={(e) => handleChange(e, 'physicalAddress')}
            onBlur={() => setTouched(prev => ({ ...prev, 'physicalAddress.suburb': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['physicalAddress.suburb'] && touched['physicalAddress.suburb'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['physicalAddress.suburb'] && touched['physicalAddress.suburb'] && (
            <p className="mt-1 text-sm text-red-600">{errors['physicalAddress.suburb']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City*</label>
          <input
            type="text"
            name="city"
            value={formData.physicalAddress.city}
            onChange={(e) => handleChange(e, 'physicalAddress')}
            onBlur={() => setTouched(prev => ({ ...prev, 'physicalAddress.city': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['physicalAddress.city'] && touched['physicalAddress.city'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['physicalAddress.city'] && touched['physicalAddress.city'] && (
            <p className="mt-1 text-sm text-red-600">{errors['physicalAddress.city']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Province*</label>
          <input
            type="text"
            name="province"
            value={formData.physicalAddress.province}
            onChange={(e) => handleChange(e, 'physicalAddress')}
            onBlur={() => setTouched(prev => ({ ...prev, 'physicalAddress.province': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['physicalAddress.province'] && touched['physicalAddress.province'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['physicalAddress.province'] && touched['physicalAddress.province'] && (
            <p className="mt-1 text-sm text-red-600">{errors['physicalAddress.province']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code*</label>
          <input
            type="text"
            name="postalCode"
            value={formData.physicalAddress.postalCode}
            onChange={(e) => handleChange(e, 'physicalAddress')}
            onBlur={() => setTouched(prev => ({ ...prev, 'physicalAddress.postalCode': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['physicalAddress.postalCode'] && touched['physicalAddress.postalCode'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['physicalAddress.postalCode'] && touched['physicalAddress.postalCode'] && (
            <p className="mt-1 text-sm text-red-600">{errors['physicalAddress.postalCode']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">GPS Coordinates</label>
          <input
            type="text"
            name="gpsCoordinates"
            value={formData.physicalAddress.gpsCoordinates}
            onChange={(e) => handleChange(e, 'physicalAddress')}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
          />
        </div>
      </div>
    </div>
  );

  const renderOperationalInformation = () => (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Operational Information</h3>
      <div className="space-y-8">
        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-4">Operating Hours</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Weekdays*</label>
              <input
                type="text"
                name="weekdays"
                value={formData.operationalHours.weekdays}
                onChange={(e) => handleChange(e, 'operationalHours')}
                onBlur={() => setTouched(prev => ({ ...prev, 'operationalHours.weekdays': true }))}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
                  ${errors['operationalHours.weekdays'] && touched['operationalHours.weekdays'] 
                    ? 'border-red-500' 
                    : 'border-gray-300'}`}
                placeholder="e.g., 08:00 - 17:00"
                required
              />
              {errors['operationalHours.weekdays'] && touched['operationalHours.weekdays'] && (
                <p className="mt-1 text-sm text-red-600">{errors['operationalHours.weekdays']}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Weekends</label>
              <input
                type="text"
                name="weekends"
                value={formData.operationalHours.weekends}
                onChange={(e) => handleChange(e, 'operationalHours')}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
              />
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium text-gray-800 mb-4">Facilities</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="mortuary"
                  checked={formData.facilities.mortuary}
                  onChange={(e) => handleChange(e, 'facilities')}
                  onBlur={() => setTouched(prev => ({ ...prev, 'facilities.mortuary': true }))}
                  className={`w-5 h-5 text-[#00c2ff] border-gray-300 rounded focus:ring-[#00c2ff]
                    ${errors['facilities.mortuary'] && touched['facilities.mortuary'] 
                      ? 'border-red-500' 
                      : ''}`}
                />
                <label className="ml-2 text-sm text-gray-700">Mortuary</label>
              </div>
              {errors['facilities.mortuary'] && touched['facilities.mortuary'] && (
                <p className="mt-1 text-sm text-red-600">{errors['facilities.mortuary']}</p>
              )}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="storageFacility"
                  checked={formData.facilities.storageFacility}
                  onChange={(e) => handleChange(e, 'facilities')}
                  onBlur={() => setTouched(prev => ({ ...prev, 'facilities.storageFacility': true }))}
                  className={`w-5 h-5 text-[#00c2ff] border-gray-300 rounded focus:ring-[#00c2ff]
                    ${errors['facilities.storageFacility'] && touched['facilities.storageFacility'] 
                      ? 'border-red-500' 
                      : ''}`}
                />
                <label className="ml-2 text-sm text-gray-700">Storage Facility</label>
              </div>
              {errors['facilities.storageFacility'] && touched['facilities.storageFacility'] && (
                <p className="mt-1 text-sm text-red-600">{errors['facilities.storageFacility']}</p>
              )}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="refrigeration"
                  checked={formData.facilities.refrigeration}
                  onChange={(e) => handleChange(e, 'facilities')}
                  onBlur={() => setTouched(prev => ({ ...prev, 'facilities.refrigeration': true }))}
                  className={`w-5 h-5 text-[#00c2ff] border-gray-300 rounded focus:ring-[#00c2ff]
                    ${errors['facilities.refrigeration'] && touched['facilities.refrigeration'] 
                      ? 'border-red-500' 
                      : ''}`}
                />
                <label className="ml-2 text-sm text-gray-700">Refrigeration</label>
              </div>
              {errors['facilities.refrigeration'] && touched['facilities.refrigeration'] && (
                <p className="mt-1 text-sm text-red-600">{errors['facilities.refrigeration']}</p>
              )}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="chapel"
                  checked={formData.facilities.chapel}
                  onChange={(e) => handleChange(e, 'facilities')}
                  onBlur={() => setTouched(prev => ({ ...prev, 'facilities.chapel': true }))}
                  className={`w-5 h-5 text-[#00c2ff] border-gray-300 rounded focus:ring-[#00c2ff]
                    ${errors['facilities.chapel'] && touched['facilities.chapel'] 
                      ? 'border-red-500' 
                      : ''}`}
                />
                <label className="ml-2 text-sm text-gray-700">Chapel</label>
              </div>
              {errors['facilities.chapel'] && touched['facilities.chapel'] && (
                <p className="mt-1 text-sm text-red-600">{errors['facilities.chapel']}</p>
              )}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="chapelCapacity"
                  checked={formData.facilities.chapelCapacity}
                  onChange={(e) => handleChange(e, 'facilities')}
                  onBlur={() => setTouched(prev => ({ ...prev, 'facilities.chapelCapacity': true }))}
                  className={`w-5 h-5 text-[#00c2ff] border-gray-300 rounded focus:ring-[#00c2ff]
                    ${errors['facilities.chapelCapacity'] && touched['facilities.chapelCapacity'] 
                      ? 'border-red-500' 
                      : ''}`}
                />
                <label className="ml-2 text-sm text-gray-700">Chapel Capacity</label>
              </div>
              {errors['facilities.chapelCapacity'] && touched['facilities.chapelCapacity'] && (
                <p className="mt-1 text-sm text-red-600">{errors['facilities.chapelCapacity']}</p>
              )}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="parking"
                  checked={formData.facilities.parking}
                  onChange={(e) => handleChange(e, 'facilities')}
                  onBlur={() => setTouched(prev => ({ ...prev, 'facilities.parking': true }))}
                  className={`w-5 h-5 text-[#00c2ff] border-gray-300 rounded focus:ring-[#00c2ff]
                    ${errors['facilities.parking'] && touched['facilities.parking'] 
                      ? 'border-red-500' 
                      : ''}`}
                />
                <label className="ml-2 text-sm text-gray-700">Parking</label>
              </div>
              {errors['facilities.parking'] && touched['facilities.parking'] && (
                <p className="mt-1 text-sm text-red-600">{errors['facilities.parking']}</p>
              )}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="parkingCapacity"
                  checked={formData.facilities.parkingCapacity}
                  onChange={(e) => handleChange(e, 'facilities')}
                  onBlur={() => setTouched(prev => ({ ...prev, 'facilities.parkingCapacity': true }))}
                  className={`w-5 h-5 text-[#00c2ff] border-gray-300 rounded focus:ring-[#00c2ff]
                    ${errors['facilities.parkingCapacity'] && touched['facilities.parkingCapacity'] 
                      ? 'border-red-500' 
                      : ''}`}
                />
                <label className="ml-2 text-sm text-gray-700">Parking Capacity</label>
              </div>
              {errors['facilities.parkingCapacity'] && touched['facilities.parkingCapacity'] && (
                <p className="mt-1 text-sm text-red-600">{errors['facilities.parkingCapacity']}</p>
              )}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="disabledAccess"
                  checked={formData.facilities.disabledAccess}
                  onChange={(e) => handleChange(e, 'facilities')}
                  onBlur={() => setTouched(prev => ({ ...prev, 'facilities.disabledAccess': true }))}
                  className={`w-5 h-5 text-[#00c2ff] border-gray-300 rounded focus:ring-[#00c2ff]
                    ${errors['facilities.disabledAccess'] && touched['facilities.disabledAccess'] 
                      ? 'border-red-500' 
                      : ''}`}
                />
                <label className="ml-2 text-sm text-gray-700">Disabled Access</label>
              </div>
              {errors['facilities.disabledAccess'] && touched['facilities.disabledAccess'] && (
                <p className="mt-1 text-sm text-red-600">{errors['facilities.disabledAccess']}</p>
              )}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="kitchen"
                  checked={formData.facilities.kitchen}
                  onChange={(e) => handleChange(e, 'facilities')}
                  onBlur={() => setTouched(prev => ({ ...prev, 'facilities.kitchen': true }))}
                  className={`w-5 h-5 text-[#00c2ff] border-gray-300 rounded focus:ring-[#00c2ff]
                    ${errors['facilities.kitchen'] && touched['facilities.kitchen'] 
                      ? 'border-red-500' 
                      : ''}`}
                />
                <label className="ml-2 text-sm text-gray-700">Kitchen</label>
              </div>
              {errors['facilities.kitchen'] && touched['facilities.kitchen'] && (
                <p className="mt-1 text-sm text-red-600">{errors['facilities.kitchen']}</p>
              )}
              <div className="flex items-center">
                <input
                  type="checkbox"
                  name="restrooms"
                  checked={formData.facilities.restrooms}
                  onChange={(e) => handleChange(e, 'facilities')}
                  onBlur={() => setTouched(prev => ({ ...prev, 'facilities.restrooms': true }))}
                  className={`w-5 h-5 text-[#00c2ff] border-gray-300 rounded focus:ring-[#00c2ff]
                    ${errors['facilities.restrooms'] && touched['facilities.restrooms'] 
                      ? 'border-red-500' 
                      : ''}`}
                />
                <label className="ml-2 text-sm text-gray-700">Restrooms</label>
              </div>
              {errors['facilities.restrooms'] && touched['facilities.restrooms'] && (
                <p className="mt-1 text-sm text-red-600">{errors['facilities.restrooms']}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderDocumentation = () => (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Required Documentation</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-4">
          {Object.keys(formData.documents).map(doc => (
            <div key={doc} className="flex items-center">
              <input
                type="checkbox"
                name={doc}
                checked={formData.documents[doc]}
                onChange={(e) => handleChange(e, 'documents')}
                onBlur={() => setTouched(prev => ({ ...prev, 'documents.doc': true }))}
                className={`w-5 h-5 text-[#00c2ff] border-gray-300 rounded focus:ring-[#00c2ff]
                  ${errors['documents.doc'] && touched['documents.doc'] 
                    ? 'border-red-500' 
                    : ''}`}
              />
              <label className="ml-2 text-sm text-gray-700">
                {doc.replace(/([A-Z])/g, ' $1').trim()}*
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderDeclaration = () => (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Declaration</h3>
      <div className="space-y-8">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="agreed"
            checked={formData.declaration.agreed}
            onChange={(e) => handleChange(e, 'declaration')}
            onBlur={() => setTouched(prev => ({ ...prev, 'declaration.agreed': true }))}
            className={`w-5 h-5 text-[#00c2ff] border-gray-300 rounded focus:ring-[#00c2ff]
              ${errors['declaration.agreed'] && touched['declaration.agreed'] 
                ? 'border-red-500' 
                : ''}`}
          />
          <label className="ml-2 text-sm text-gray-700">
            I agree to the terms and conditions of the Funeral Parlor Membership Application.
          </label>
        </div>
        {errors['declaration.agreed'] && touched['declaration.agreed'] && (
          <p className="mt-1 text-sm text-red-600">{errors['declaration.agreed']}</p>
        )}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
          <input
            type="text"
            name="name"
            value={formData.declaration.name}
            onChange={(e) => handleChange(e, 'declaration')}
            onBlur={() => setTouched(prev => ({ ...prev, 'declaration.name': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['declaration.name'] && touched['declaration.name'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['declaration.name'] && touched['declaration.name'] && (
            <p className="mt-1 text-sm text-red-600">{errors['declaration.name']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Position*</label>
          <input
            type="text"
            name="position"
            value={formData.declaration.position}
            onChange={(e) => handleChange(e, 'declaration')}
            onBlur={() => setTouched(prev => ({ ...prev, 'declaration.position': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['declaration.position'] && touched['declaration.position'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['declaration.position'] && touched['declaration.position'] && (
            <p className="mt-1 text-sm text-red-600">{errors['declaration.position']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date*</label>
          <input
            type="date"
            name="date"
            value={formData.declaration.date}
            onChange={(e) => handleChange(e, 'declaration')}
            onBlur={() => setTouched(prev => ({ ...prev, 'declaration.date': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['declaration.date'] && touched['declaration.date'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['declaration.date'] && touched['declaration.date'] && (
            <p className="mt-1 text-sm text-red-600">{errors['declaration.date']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Signature*</label>
          <input
            type="text"
            name="signature"
            value={formData.declaration.signature}
            onChange={(e) => handleChange(e, 'declaration')}
            onBlur={() => setTouched(prev => ({ ...prev, 'declaration.signature': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['declaration.signature'] && touched['declaration.signature'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['declaration.signature'] && touched['declaration.signature'] && (
            <p className="mt-1 text-sm text-red-600">{errors['declaration.signature']}</p>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Funeral Parlor Membership Application
          </h2>

          <ProgressBar />

          <form onSubmit={handleSubmit} className="space-y-8">
            {currentStep === 1 && renderBusinessDetails()}
            {currentStep === 2 && renderContactDetails()}
            {currentStep === 3 && renderPhysicalAddress()}
            {currentStep === 4 && renderOperationalInformation()}
            {currentStep === 5 && renderDocumentation()}
            {currentStep === 6 && renderDeclaration()}

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
                  Submit Application
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FuneralParlorRegistration; 