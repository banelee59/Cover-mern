import React, { useState } from 'react';
import useFormSubmission from '../hooks/useFormSubmission';
import ProgressBar from './steps/ProgressBar';
import BusinessDetails from './steps/BusinessDetails';
import ContactDetails from './steps/ContactDetails';
import PhysicalAddress from './steps/PhysicalAddress';
import OperationalInformation from './steps/OperationalInformation';
import Extras from './steps/Extras';
import Declaration from './steps/Declaration';
import Review from './steps/Review';

const FuneralRegistration = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;

  const steps = [
    { number: 1, title: "Business Details" },
    { number: 2, title: "Contact Details" },
    { number: 3, title: "Physical Address" },
    { number: 4, title: "Operational Information" },
    { number: 5, title: "Extras" },
    { number: 6, title: "Declaration" },
    { number: 7, title: "Review" }
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
    businessName: '',
    tradingName: '',
    registrationNumber: '',
    vatNumber: '',
    businessType: '',
    dateEstablished: '',
    association: '',
    operatingRegion: '',

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

    physicalAddress: {
      streetNumber: '',
      streetName: '',
      suburb: '',
      city: '',
      province: '',
      postalCode: '',
    },

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

    services: {
      burial: null,
      cremation: null,
      repatriation: null,
      crossBorder: null,
      documentPrep: null,
      personalized: null,
      legalAdmin: null,
      memorial: null,
      programDesign: null,
      embalming: null,
      viewing: null,
      transport: null
    },

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

    declaration: {
      agreed: false,
      name: '',
      position: '',
      date: '',
      signature: '',
      documents: {
        businessRegistration: null,
        operatingLicense: null,
        insuranceCertificate: null,
        healthSafetyCertificate: null,
        environmentalCompliance: null,
        beeCertificate: null,
        companyLogo: null
      }
    }
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const { submitFuneralParlor, loading, error, success } = useFormSubmission();

  const getCurrentStepFields = () => {
    switch (currentStep) {
      case 1:
        return [
          { name: 'businessName' },
          { name: 'registrationNumber' },
          { name: 'businessType' },
          { name: 'dateEstablished' },
          { name: 'association' },
          { name: 'operatingRegion' }
        ];
      case 2:
        return [
          { name: 'title', section: 'contactPerson' },
          { name: 'firstName', section: 'contactPerson' },
          { name: 'lastName', section: 'contactPerson' },
          { name: 'email', section: 'contactPerson' },
          { name: 'cellphone', section: 'contactPerson' },
          { name: 'title', section: 'manager' },
          { name: 'firstName', section: 'manager' },
          { name: 'lastName', section: 'manager' },
          { name: 'email', section: 'manager' },
          { name: 'cellphone', section: 'manager' },
          { name: 'gender', section: 'manager' },
          { name: 'race', section: 'manager' }
        ];
      case 3:
        return [
          { name: 'streetNumber', section: 'physicalAddress' },
          { name: 'streetName', section: 'physicalAddress' },
          { name: 'suburb', section: 'physicalAddress' },
          { name: 'city', section: 'physicalAddress' },
          { name: 'province', section: 'physicalAddress' },
          { name: 'postalCode', section: 'physicalAddress' }
        ];
      case 4:
        return [
          { name: 'burial', section: 'services' },
          { name: 'cremation', section: 'services' },
          { name: 'repatriation', section: 'services' },
          { name: 'crossBorder', section: 'services' },
          { name: 'documentPrep', section: 'services' },
          { name: 'personalized', section: 'services' },
          { name: 'legalAdmin', section: 'services' },
          { name: 'memorial', section: 'services' },
          { name: 'programDesign', section: 'services' },
          { name: 'embalming', section: 'services' },
          { name: 'viewing', section: 'services' },
          { name: 'transport', section: 'services' }
        ];
      case 5:
        return [];
      case 6:
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
        if (!fieldValue) error = 'Cell phone is required';
        else if (!isValidPhone(fieldValue)) error = 'Please enter a valid 10-digit phone number';
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
      case 'agreed':
        if (!fieldValue) error = 'You must agree to the declaration';
        break;
      case 'signature':
        if (!fieldValue) error = 'Signature is required';
        break;
      case 'burial':
      case 'cremation':
      case 'repatriation':
      case 'crossBorder':
      case 'documentPrep':
      case 'personalized':
      case 'legalAdmin':
      case 'memorial':
      case 'programDesign':
      case 'embalming':
      case 'viewing':
      case 'transport':
        if (section === 'services') {
          if (fieldValue === null || fieldValue === undefined) {
            error = 'Please select Yes or No for this service';
          }
        }
        break;
      default:
        break;
    }

    if (section === 'services') {
      const services = value.services || {};
      const hasAnyServiceSelected = Object.values(services).some(val => val === true);
      if (!hasAnyServiceSelected && name === 'burial') {
        error = 'Please select "Yes" for at least one service your funeral parlour offers';
      }
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

  const handleFileUpload = (fieldName, file) => {
    setFormData(prev => ({
      ...prev,
      declaration: {
        ...prev.declaration,
        documents: {
          ...prev.declaration.documents,
          [fieldName]: file
        }
      }
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

    const allFields = [
      ...getCurrentStepFields(1),
      ...getCurrentStepFields(2),
      ...getCurrentStepFields(3),
      ...getCurrentStepFields(4),
      ...getCurrentStepFields(5),
      ...getCurrentStepFields(6)
    ];

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
          handleFileUpload={handleFileUpload}
        />;
      case 7:
        return <Review
          formData={formData}
          onEdit={(step) => setCurrentStep(step)}
        />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative bg-white overflow-hidden">
      <div className="w-full relative mb-0 mt-0 z-10">
        <div className="absolute top-0 left-0 right-0 z-0" style={{
          backgroundImage: 'url("/images/turtle-9.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'top',
          backgroundRepeat: 'no-repeat',
          width: '1440px',
          height: '129px',
          flexShrink: 0
        }}></div>
        
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-full">
          <ProgressBar steps={steps} currentStep={currentStep} />
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-8 mt-24 w-full">
        <div className="bg-white rounded-xl p-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
            Funeral Parlour Membership Application
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-6 w-full h-full">
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
              {currentStep < totalSteps && currentStep !== 7 ? (
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