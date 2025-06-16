// FuneralRegistration.js
import React, { useState } from 'react';
import useFormSubmission from '../hooks/useFormSubmission';
import ProgressBar from './steps/ProgressBar';
import BusinessDetails from './steps/BusinessDetails';
import ContactDetails from './steps/ContactDetails';
import PhysicalAddress from './steps/PhysicalAddress';
import OperationalInformation from './steps/OperationalInformation';
import Extras from './steps/Extras';
import Declaration from './steps/Declaration';

const FuneralRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;

  const steps = [
    { number: 1, title: "Business Details" },
    { number: 2, title: "Contact Details" },
    { number: 3, title: "Physical Address" },
    { number: 4, title: "Operational Information" },
    { number: 5, title: "Extras" },
    { number: 6, title: "Declaration" }
  ];

  const ASSOCIATIONS = [
    'NFDA (National Funeral Directors Association)',
    'SAFPA (South African Funeral Practitioners Association)',
    'FFSA (Funeral Federation of South Africa)',
    'NAFUPA (National Funeral Practitioners Association)',
    'SAFPS (South African Funeral Parlour Society)',
    'Other'
  ];

  const REGIONS = [
    'Johannesburg North',
    'Johannesburg South',
    'Johannesburg East',
    'Johannesburg West',
    'Pretoria',
    'East Rand',
    'West Rand',
    'Vaal Triangle',
    'Soweto',
    'Alexandra',
    'Other Gauteng Regions'
  ];

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

  const [formData, setFormData] = useState({
    // Business Details
    businessName: '',
    tradingName: '',
    registrationNumber: '',
    vatNumber: '',
    businessType: '',
    dateEstablished: '',
    association: '',
    operatingRegion: '',

    // Contact Details
    contactPerson: {
      title: '',
      firstName: '',
      lastName: '',
      position: '',
      idNumber: '',
      email: '',
      cellphone: '',
      telephone: '',
      initials: '',
      gender: '',
      race: ''
    },

    // Manager object
    manager: {
      title: '',
      firstName: '',
      lastName: '',
      email: '',
      cellphone: '',
      telephone: '',
      initials: '',
      gender: '',
      race: ''
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
  const { submitFuneralParlor, loading, error, success } = useFormSubmission();

  const getCurrentStepFields = () => {
    switch (currentStep) {
      case 1: // Business Details
        return [
          { name: 'businessName' },
          { name: 'registrationNumber' },
          { name: 'businessType' },
          { name: 'dateEstablished' },
          { name: 'association' },
          { name: 'operatingRegion' }
        ];
      case 2: // Contact Details
        return [
          // Contact Person fields
          { name: 'title', section: 'contactPerson' },
          { name: 'firstName', section: 'contactPerson' },
          { name: 'lastName', section: 'contactPerson' },
          { name: 'email', section: 'contactPerson' },
          { name: 'cellphone', section: 'contactPerson' },
          // Manager fields (if you want them required)
          { name: 'title', section: 'manager' },
          { name: 'firstName', section: 'manager' },
          { name: 'lastName', section: 'manager' },
          { name: 'email', section: 'manager' },
          { name: 'cellphone', section: 'manager' },
          { name: 'gender', section: 'manager' },
          { name: 'race', section: 'manager' }
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
        return []; // Handle extras validation separately if needed
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
      const digitsOnly = phone.replace(/\D/g, '');
      return /^\d{10}$/.test(digitsOnly);
    };

    const isValidIDNumber = (id) => {
      return /^[0-9]{13}$/.test(id.replace(/[^0-9]/g, ''));
    };

    const fieldValue = section ? value[section]?.[name] : value[name];

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

      case 'association':
        if (!fieldValue) error = 'Funeral association is required';
        break;

      case 'operatingRegion':
        if (!fieldValue) error = 'Operating region is required';
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
        if (!fieldValue) {
          error = 'Cell phone is required';
        } else if (!isValidPhone(fieldValue)) {
          error = 'Please enter a valid 10-digit phone number';
        }
        break;

      case 'gender':
        if (!fieldValue) error = 'Gender is required';
        break;

      case 'race':
        if (!fieldValue) error = 'Race is required';
        break;

      case 'streetNumber':
      case 'streetName':
      case 'suburb':
      case 'city':
      case 'province':
      case 'postalCode':
        if (!fieldValue) error = `${name.replace(/([A-Z])/g, ' $1').trim()} is required`;
        break;

      // Declaration fields
      case 'agreed':
        if (!fieldValue) error = 'You must agree to the declaration';
        break;

      case 'signature':
        if (!fieldValue) error = 'Signature is required';
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
      const updatedFormData = {
        ...formData,
        operationalHours: {
          ...formData.operationalHours,
          [period]: {
            ...formData.operationalHours[period],
            [timeType]: value
          }
        }
      };

      setFormData(updatedFormData);

      setTouched(prev => ({
        ...prev,
        [`operationalHours.${period}.${timeType}`]: true
      }));

      const error = validateField(name, updatedFormData, section);
      setErrors(prev => ({
        ...prev,
        [`operationalHours.${period}.${timeType}`]: error
      }));
    } else if (section) {
      const updatedFormData = {
        ...formData,
        [section]: {
          ...formData[section],
          [name]: type === 'checkbox' ? checked : value
        }
      };

      setFormData(updatedFormData);

      setTouched(prev => ({
        ...prev,
        [section ? `${section}.${name}` : name]: true
      }));

      const error = validateField(name, updatedFormData, section);
      setErrors(prev => ({
        ...prev,
        [section ? `${section}.${name}` : name]: error
      }));
    } else {
      const updatedFormData = {
        ...formData,
        [name]: value
      };

      setFormData(updatedFormData);

      setTouched(prev => ({
        ...prev,
        [name]: true
      }));

      const error = validateField(name, updatedFormData);
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

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <BusinessDetails
          formData={formData}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          setTouched={setTouched}
          associations={ASSOCIATIONS}
          regions={REGIONS}
        />;
      case 2:
        return <ContactDetails
          formData={formData}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          setTouched={setTouched}
        />;
      case 3:
        return <PhysicalAddress
          formData={formData}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          setTouched={setTouched}
          provinces={PROVINCES}
        />;
      case 4:
        return <OperationalInformation
          formData={formData}
          setFormData={setFormData}
        />;
      case 5:
        return <Extras
          formData={formData}
          setFormData={setFormData}
          errors={errors}
          touched={touched}
        />;
      case 6:
        return <Declaration
          formData={formData}
          errors={errors}
          touched={touched}
          handleChange={handleChange}
          setTouched={setTouched}
        />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-indigo-50 flex flex-col py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Funeral Parlour Membership Application
          </h2>

          <ProgressBar steps={steps} currentStep={currentStep} />

          <form onSubmit={handleSubmit} className="space-y-8">
            {renderCurrentStep()}

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

export default FuneralRegistration;