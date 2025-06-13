// FuneralRegistration.js
import React, { useState } from 'react';
import useFormSubmission from '../hooks/useFormSubmission';
import ProgressBar from './ProgressBar';
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
  const { submitFuneralParlor, loading, error, success } = useFormSubmission();

  // All the handler functions (handleChange, handleNext, handleSubmit, etc.)
  // Validation functions
  // Step navigation functions

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