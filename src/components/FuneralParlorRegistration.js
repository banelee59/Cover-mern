import React, { useState } from 'react';
import useFormSubmission from '../hooks/useFormSubmission';

const FuneralParlorRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6; // Updated to match PDF sections

  const steps = [
    { number: 1, title: "Business Details" },
    { number: 2, title: "Contact Details" },
    { number: 3, title: "Physical Address" },
    { number: 4, title: "Operational Information" },
    { number: 5, title: "Extras" },
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
      
    },
    
    // Operational Information
    operationalHours: {
      weekdays: {
        start: '',
        end: '',
        isClosed: false
      },
      weekends: {
        start: '',
        end: '',
        isClosed: false
      },
      publicHolidays: {
        start: '',
        end: '',
        isClosed: false
      }
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
    
    // Extras
    extras: {
      draping: { selected: null, price: '' },
      mobileToilets: { selected: null, price: '' },
      groceryBenefit: { selected: null, price: '' },
      mobileFridge: { selected: null, price: '' },
      soundSystem: { selected: null, price: '' },
      videoStreaming: { selected: null, price: '' },
      airtimeAllowance: { selected: null, price: '' },
      tombstone: { selected: null, price: '' },
      catering: { selected: null, price: '' },
      griefCounselling: { selected: null, price: '' },
      floralArrangements: { selected: null, price: '' },
      urns: { selected: null, price: '' },
      funeralPrograms: { selected: null, price: '' },
      graveLiners: { selected: null, price: '' },
      graveDigging: { selected: null, price: '' }
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

  const PROVINCES = [
    'Eastern Cape',
    'Free State',
    'Gauteng',
    'KwaZulu-Natal',
    'Limpopo',
    'Mpumalanga',
    'Northern Cape',
    'North West',
    'Western Cape'
  ];

  const { submitFuneralParlor, loading, error, success } = useFormSubmission();

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
          { name: 'weekdays.start', section: 'operationalHours' },
          { name: 'weekdays.end', section: 'operationalHours' },
          { name: 'weekends.start', section: 'operationalHours' },
          { name: 'weekends.end', section: 'operationalHours' },
          { name: 'publicHolidays.start', section: 'operationalHours' },
          { name: 'publicHolidays.end', section: 'operationalHours' }
        ];
      case 5: // Extras
        return [
          { name: 'draping', section: 'extras' },
          { name: 'mobileToilets', section: 'extras' },
          { name: 'groceryBenefit', section: 'extras' },
          { name: 'mobileFridge', section: 'extras' },
          { name: 'soundSystem', section: 'extras' },
          { name: 'videoStreaming', section: 'extras' },
          { name: 'airtimeAllowance', section: 'extras' },
          { name: 'tombstone', section: 'extras' },
          { name: 'catering', section: 'extras' },
          { name: 'griefCounselling', section: 'extras' },
          { name: 'floralArrangements', section: 'extras' },
          { name: 'urns', section: 'extras' },
          { name: 'funeralPrograms', section: 'extras' },
          { name: 'graveLiners', section: 'extras' },
          { name: 'graveDigging', section: 'extras' }
        ];
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

    if (section === 'extras') {
      const hasSelection = Object.values(value.extras).some(val => val !== null);
      if (!hasSelection) {
        error = 'Please select Yes or No for at least one service';
      }
    }

    if (section === 'operationalHours') {
      const timeValue = value[section][name];
      if (name.endsWith('.start') || name.endsWith('.end')) {
        const [period, timeType] = name.split('.');
        const periodTimes = value[section][period];
        
        if (!periodTimes.isClosed) {
          if (!timeValue) {
            error = `${timeType.charAt(0).toUpperCase() + timeType.slice(1)} time is required`;
          } else if (timeType === 'end' && periodTimes.start && periodTimes.start >= timeValue) {
            error = 'End time must be after start time';
          }
        }
      }
    }

    return error;
  };

  const handleChange = (e, section) => {
    const { name, value, type, checked } = e.target;
    
    if (section === 'operationalHours') {
      const [period, timeType] = name.split('.');
      setFormData(prev => ({
        ...prev,
        operationalHours: {
          ...prev.operationalHours,
          [period]: {
            ...prev.operationalHours[period],
            [timeType]: value
          }
        }
      }));

      setTouched(prev => ({
        ...prev,
        [`operationalHours.${period}.${timeType}`]: true
      }));

      const error = validateField(name, formData, section);
      setErrors(prev => ({
        ...prev,
        [`operationalHours.${period}.${timeType}`]: error
      }));
    } else if (section) {
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [name]: type === 'checkbox' ? checked : value
        }
      }));
      
      setTouched(prev => ({
        ...prev,
        [section ? `${section}.${name}` : name]: true
      }));

      const error = validateField(name, formData, section);
      setErrors(prev => ({
        ...prev,
        [section ? `${section}.${name}` : name]: error
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));

    setTouched(prev => ({
      ...prev,
        [name]: true
    }));

      const error = validateField(name, formData);
    setErrors(prev => ({
      ...prev,
        [name]: error
    }));
    }
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
      const result = await submitFuneralParlor(formData);
      if (result.success) {
        alert(result.message);
        // Optional: Reset form or redirect
      }
    } catch (error) {
      console.error('Registration error:', error);
      alert(error.error);
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
          <select
            name="province"
            value={formData.physicalAddress.province}
            onChange={(e) => handleChange(e, 'physicalAddress')}
            onBlur={() => setTouched(prev => ({ ...prev, 'physicalAddress.province': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['physicalAddress.province'] && touched['physicalAddress.province']
                ? 'border-red-500'
                : 'border-gray-300'}`}
            required
          >
            <option value="">Select Province</option>
            {PROVINCES.map(province => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
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
       
      </div>
    </div>
  );

  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += 30) {
        const formattedHour = hour.toString().padStart(2, '0');
        const formattedMinute = minute.toString().padStart(2, '0');
        const time = `${formattedHour}:${formattedMinute}`;
        
        // Create 12-hour format for display
        const displayHour = hour % 12 || 12;
        const ampm = hour < 12 ? 'AM' : 'PM';
        const displayTime = `${displayHour}:${formattedMinute.padStart(2, '0')} ${ampm}`;
        
        times.push({
          value: time,
          display: displayTime
        });
      }
    }
    return times;
  };

  const renderTimeSelect = (period, timeType) => (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {timeType === 'start' ? 'Start Time*' : 'End Time*'}
      </label>
      <select
        name={`${period}.${timeType}`}
        value={formData.operationalHours[period][timeType]}
        onChange={(e) => handleChange(e, 'operationalHours')}
        onBlur={() => setTouched(prev => ({ 
          ...prev, 
          [`operationalHours.${period}.${timeType}`]: true 
        }))}
        className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
          ${errors[`operationalHours.${period}.${timeType}`] && 
            touched[`operationalHours.${period}.${timeType}`]
            ? 'border-red-500'
            : 'border-gray-300'}`}
        required={!formData.operationalHours[period].isClosed}
        disabled={formData.operationalHours[period].isClosed}
      >
        <option value="">Select Time</option>
        {generateTimeOptions().map(time => (
          <option 
            key={`${timeType}-${time.value}`} 
            value={time.value}
            selected={formData.operationalHours[period][timeType] === time.value}
          >
            {time.display}
          </option>
        ))}
      </select>
      {errors[`operationalHours.${period}.${timeType}`] && 
       touched[`operationalHours.${period}.${timeType}`] && (
        <p className="mt-1 text-sm text-red-600">
          {errors[`operationalHours.${period}.${timeType}`]}
        </p>
      )}
    </div>
  );

  const renderOperationalInformation = () => (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Operational Information</h3>
      
      <div className="space-y-6">
        {/* Weekdays */}
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-gray-800">Weekdays Operating Hours</h4>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="weekdaysClosed"
              checked={formData.operationalHours.weekdays.isClosed}
              onChange={(e) => {
                setFormData(prev => ({
                  ...prev,
                  operationalHours: {
                    ...prev.operationalHours,
                    weekdays: {
                      ...prev.operationalHours.weekdays,
                      isClosed: e.target.checked,
                      start: '',
                      end: ''
                    }
                  }
                }));
              }}
              className="w-4 h-4 text-[#00c2ff] border-gray-300 rounded focus:ring-[#00c2ff]"
            />
            <label htmlFor="weekdaysClosed" className="ml-2 text-sm text-gray-700">Closed on Weekdays</label>
          </div>
          {!formData.operationalHours.weekdays.isClosed && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderTimeSelect('weekdays', 'start')}
              {renderTimeSelect('weekdays', 'end')}
            </div>
          )}
        </div>

        {/* Weekends */}
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-gray-800">Weekend Operating Hours</h4>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="weekendsClosed"
              checked={formData.operationalHours.weekends.isClosed}
              onChange={(e) => {
                setFormData(prev => ({
                  ...prev,
                  operationalHours: {
                    ...prev.operationalHours,
                    weekends: {
                      ...prev.operationalHours.weekends,
                      isClosed: e.target.checked,
                      start: '',
                      end: ''
                    }
                  }
                }));
              }}
              className="w-4 h-4 text-[#00c2ff] border-gray-300 rounded focus:ring-[#00c2ff]"
            />
            <label htmlFor="weekendsClosed" className="ml-2 text-sm text-gray-700">Closed on Weekends</label>
          </div>
          {!formData.operationalHours.weekends.isClosed && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderTimeSelect('weekends', 'start')}
              {renderTimeSelect('weekends', 'end')}
            </div>
          )}
        </div>

        {/* Public Holidays */}
        <div className="space-y-4">
          <h4 className="text-lg font-medium text-gray-800">Public Holiday Operating Hours</h4>
          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="holidaysClosed"
              checked={formData.operationalHours.publicHolidays.isClosed}
              onChange={(e) => {
                setFormData(prev => ({
                  ...prev,
                  operationalHours: {
                    ...prev.operationalHours,
                    publicHolidays: {
                      ...prev.operationalHours.publicHolidays,
                      isClosed: e.target.checked,
                      start: '',
                      end: ''
                    }
                  }
                }));
              }}
              className="w-4 h-4 text-[#00c2ff] border-gray-300 rounded focus:ring-[#00c2ff]"
            />
            <label htmlFor="holidaysClosed" className="ml-2 text-sm text-gray-700">Closed on Public Holidays</label>
          </div>
          {!formData.operationalHours.publicHolidays.isClosed && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {renderTimeSelect('publicHolidays', 'start')}
              {renderTimeSelect('publicHolidays', 'end')}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const renderExtras = () => (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Extra Service Offerings</h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Service</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-700 border-b border-gray-200">Yes</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-700 border-b border-gray-200">No</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-700 border-b border-gray-200">Price (R)</th>
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
                    name={`extras.${service.name}`}
                    checked={formData.extras[service.name].selected === true}
                    onChange={() => {
                      setFormData(prev => ({
                        ...prev,
                        extras: {
                          ...prev.extras,
                          [service.name]: {
                            ...prev.extras[service.name],
                            selected: true
                          }
                        }
                      }));
                    }}
                    className="w-4 h-4 text-[#00c2ff] rounded border-gray-300 focus:ring-[#00c2ff]"
                  />
                </td>
                <td className="px-4 py-2 text-center border-b border-gray-200">
                  <input
                    type="radio"
                    name={`extras.${service.name}`}
                    checked={formData.extras[service.name].selected === false}
                    onChange={() => {
                      setFormData(prev => ({
                        ...prev,
                        extras: {
                          ...prev.extras,
                          [service.name]: {
                            ...prev.extras[service.name],
                            selected: false,
                            price: '' // Clear price when service is not selected
                          }
                        }
                      }));
                    }}
                    className="w-4 h-4 text-[#00c2ff] rounded border-gray-300 focus:ring-[#00c2ff]"
                  />
                </td>
                <td className="px-4 py-2 text-center border-b border-gray-200">
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.extras[service.name].price}
                    onChange={(e) => {
                      setFormData(prev => ({
                        ...prev,
                        extras: {
                          ...prev.extras,
                          [service.name]: {
                            ...prev.extras[service.name],
                            price: e.target.value
                          }
                        }
                      }));
                    }}
                    disabled={formData.extras[service.name].selected !== true}
                    className={`w-24 px-2 py-1 text-right border rounded-md
                      ${formData.extras[service.name].selected === true 
                        ? 'border-gray-300 focus:ring-[#00c2ff] focus:border-[#00c2ff]' 
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Error message if no selections made */}
      {errors.extras && touched.extras && (
        <p className="mt-2 text-sm text-red-600">{errors.extras}</p>
      )}
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
            {currentStep === 5 && renderExtras()}
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