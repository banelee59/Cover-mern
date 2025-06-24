import React, { useState } from 'react';
import { useForm, FormProvider, useWatch } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Oval } from 'react-loader-spinner';
import useFormSubmission from '../hooks/useFormSubmission';
import ProgressBar from './steps/ProgressBar';
import BusinessDetails from './steps/BusinessDetails';
import ContactDetails from './steps/ContactDetails';
import PhysicalAddress from './steps/PhysicalAddress';
import OperationalInformation from './steps/OperationalInformation';
import Extras from './steps/Extras';
import Declaration from './steps/Declaration';
import Review from './steps/Review';
import FormActions from './steps/FormActions';

const defaultValues = {
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
};

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

const steps = [
  { number: 1, title: "Business Details" },
  { number: 2, title: "Contact Details" },
  { number: 3, title: "Physical Address" },
  { number: 4, title: "Operational Information" },
  { number: 5, title: "Extras" },
  { number: 6, title: "Declaration" },
  { number: 7, title: "Review" }
];

const FuneralRegistration = () => {
  const methods = useForm({
    defaultValues,
    mode: 'onChange',
    reValidateMode: 'onChange'
  });
  
  const [currentStep, setCurrentStep] = useState(1);
  const { submitFuneralParlor, loading, error, success } = useFormSubmission();

  // Define required fields for each step
  const stepRequiredFields = {
    1: ['businessName', 'registrationNumber', 'businessType', 'dateEstablished', 'operatingRegion', 'association'],
    2: ['contactPerson.firstName', 'contactPerson.lastName', 'contactPerson.email', 'contactPerson.cellphone'],
    3: ['physicalAddress.streetNumber', 'physicalAddress.streetName', 'physicalAddress.suburb', 'physicalAddress.city', 'physicalAddress.province', 'physicalAddress.postalCode'],
    4: [], // Add operational info required fields
    5: [], // Add extras required fields  
    6: ['declaration.agreed', 'declaration.name', 'declaration.position'],
    7: [] // Review step
  };

  // Watch only current step fields
  const currentStepFields = stepRequiredFields[currentStep] || [];
  const watchedFields = useWatch({
    control: methods.control,
    name: currentStepFields
  });

  // Check if current step is valid
  const isCurrentStepValid = () => {
    if (currentStepFields.length === 0) return true;
    
    const formValues = methods.getValues();
    return currentStepFields.every(fieldPath => {
      const value = fieldPath.split('.').reduce((obj, key) => obj?.[key], formValues);
      return value !== undefined && value !== null && value.toString().trim() !== '';
    });
  };

  // Removed the debounced watch effect that was causing performance issues
  
  const handleStepChange = async (direction) => {
    if (direction === 'next') {
      const isValid = await methods.trigger();
      if (isValid) {
        setCurrentStep(prev => prev + 1);
      } else {
        const firstError = Object.keys(methods.formState.errors)[0];
        if (firstError) {
          document.querySelector(`[name="${firstError}"]`)?.focus();
        }
      }
    } else {
      setCurrentStep(prev => prev - 1);
    }
  };

  const onSubmit = async (data) => {
    try {
      const result = await submitFuneralParlor(data);
      if (result.success) {
        toast.success(result.message || 'Submitted successfully!');
        setCurrentStep(prev => prev + 1);
      } else {
        toast.error(result.error || 'Submission failed');
      }
    } catch (error) {
      console.error('Registration error:', error);
      toast.error(error.message || 'An error occurred during submission');
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <BusinessDetails />;
      case 2:
        return <ContactDetails />;
      case 3:
        return <PhysicalAddress provinces={PROVINCES} />;
      case 4:
        return <OperationalInformation />;
      case 5:
        return <Extras />;
      case 6:
        return <Declaration />;
      case 7:
        return <Review onEdit={(step) => setCurrentStep(step)} />;
      default:
        return null;
    }
  };

  const totalSteps = 7;

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
          
          <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6 w-full h-full">
              {loading && (
                <div className="flex justify-center items-center">
                  <Oval color="#00c2ff" height={50} width={50} />
                </div>
              )}
              
              {!loading && renderCurrentStep()}
              
              {currentStep <= totalSteps && !loading && (
                <FormActions
                  currentStep={currentStep}
                  totalSteps={totalSteps}
                  onNext={() => handleStepChange('next')}
                  onBack={() => handleStepChange('prev')}
                  onSubmit={methods.handleSubmit(onSubmit)}
                  isNextDisabled={!isCurrentStepValid()}
                  isSubmitDisabled={!methods.formState.isValid}
                />
              )}
              
              {error && (
                <div className="text-red-500 text-center mt-2">
                  {error}
                </div>
              )}
            </form>
          </FormProvider>
        </div>
      </div>
    </div>
  );
};

export default FuneralRegistration;