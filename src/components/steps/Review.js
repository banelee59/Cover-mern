import React from 'react';
import { Check, Edit } from 'lucide-react';
import { useFormContext, useWatch } from 'react-hook-form';

const Review = ({ onEdit }) => {
  const { register, formState: { errors } } = useFormContext();
  
  // Watch all form values for the review
  const formValues = useWatch();

  const formatAddress = (address) => {
    if (!address) return 'Not provided';
    return `${address.streetNumber || ''} ${address.streetName || ''}, ${address.suburb || ''}, ${address.city || ''}, ${address.province || ''}, ${address.postalCode || ''}`.replace(/,\s*,/g, ',').replace(/^,\s*|,\s*$/g, '');
  };

  const formatContact = (contact) => {
    if (!contact) return 'Not provided';
    return `${contact.title || ''} ${contact.firstName || ''} ${contact.lastName || ''}, ${contact.position || ''}`.replace(/,\s*,/g, ',').replace(/^,\s*|,\s*$/g, '');
  };

  const formatServices = (services) => {
    if (!services) return 'No services selected';
    const selectedServices = Object.entries(services)
      .filter(([_, value]) => value === true)
      .map(([key]) => {
        // Convert camelCase to readable format
        return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
      });
    return selectedServices.length > 0 ? selectedServices.join(', ') : 'No services selected';
  };

  const formatExtras = (extras) => {
    if (!extras) return 'No extra services selected';
    const selectedExtras = Object.entries(extras)
      .filter(([_, value]) => value?.selected === true)
      .map(([key, value]) => {
        const readableKey = key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase());
        return value.price ? `${readableKey} (R${value.price})` : readableKey;
      });
    return selectedExtras.length > 0 ? selectedExtras.join(', ') : 'No extra services selected';
  };

  const formatFacilities = (facilities) => {
    if (!facilities) return 'No facilities information';
    const facilityList = [];
    
    if (facilities.mortuary) facilityList.push('Mortuary');
    if (facilities.storageFacility) facilityList.push('Storage Facility');
    if (facilities.chapel) facilityList.push(`Chapel (Capacity: ${facilities.chapelCapacity || 'Not specified'})`);
    if (facilities.parking) facilityList.push(`Parking (Capacity: ${facilities.parkingCapacity || 'Not specified'})`);
    if (facilities.disabledAccess) facilityList.push('Disabled Access');
    if (facilities.kitchen) facilityList.push('Kitchen');
    if (facilities.restrooms) facilityList.push('Restrooms');
    if (facilities.refrigeration) facilityList.push(`Refrigeration: ${facilities.refrigeration}`);
    
    return facilityList.length > 0 ? facilityList.join(', ') : 'No facilities selected';
  };

  const SectionRow = ({ label, value, onEdit, stepNumber }) => (
    <div className="flex items-start justify-between py-4 border-b border-gray-100 last:border-b-0">
      <div className="flex-1 pr-8">
        <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-1">
          {label}
        </h4>
      </div>
      <div className="flex-2 flex items-center justify-between">
        <div className="text-gray-900 font-medium max-w-md">
          {value || 'Not provided'}
        </div>
        <button 
          type="button"
          onClick={() => onEdit(stepNumber)}
          className="ml-4 text-[#00c2ff] hover:text-blue-600 flex items-center text-sm transition-colors flex-shrink-0"
        >
          <Edit className="w-4 h-4 mr-1" />
          Edit
        </button>
      </div>
    </div>
  );

  const SectionHeader = ({ title, children }) => (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6 overflow-hidden">
      <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );

  const documentFields = [
    { key: 'businessRegistration', label: 'Business Registration Certificate' },
    { key: 'operatingLicense', label: 'Operating License' },
    { key: 'insuranceCertificate', label: 'Insurance Certificate' },
    { key: 'healthSafetyCertificate', label: 'Health and Safety Certificate' },
    { key: 'environmentalCompliance', label: 'Environmental Compliance Certificate' },
    { key: 'beeCertificate', label: 'BEE Certificate' },
    { key: 'companyLogo', label: 'Company Logo' }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Application Review</h2>
          <p className="text-gray-600">Please review all information before submitting your application</p>
        </div>
        
        {/* Business Details */}
        <SectionHeader title="Business Information">
          <SectionRow 
            label="Business Name" 
            value={formValues?.businessName}
            onEdit={onEdit}
            stepNumber={1}
          />
          <SectionRow 
            label="Trading Name" 
            value={formValues?.tradingName}
            onEdit={onEdit}
            stepNumber={1}
          />
          <SectionRow 
            label="Registration Number" 
            value={formValues?.registrationNumber}
            onEdit={onEdit}
            stepNumber={1}
          />
          <SectionRow 
            label="Business Type" 
            value={formValues?.businessType}
            onEdit={onEdit}
            stepNumber={1}
          />
          <SectionRow 
            label="Date Established" 
            value={formValues?.dateEstablished}
            onEdit={onEdit}
            stepNumber={1}
          />
          <SectionRow 
            label="Operating Region" 
            value={formValues?.operatingRegion}
            onEdit={onEdit}
            stepNumber={1}
          />
          <SectionRow 
            label="Association" 
            value={formValues?.association}
            onEdit={onEdit}
            stepNumber={1}
          />
        </SectionHeader>

        {/* Contact Details */}
        <SectionHeader title="Contact Information">
          <SectionRow 
            label="Contact Person" 
            value={formatContact(formValues?.contactPerson)}
            onEdit={onEdit}
            stepNumber={2}
          />
          <SectionRow 
            label="Email Address" 
            value={formValues?.contactPerson?.email}
            onEdit={onEdit}
            stepNumber={2}
          />
          <SectionRow 
            label="Cellphone" 
            value={formValues?.contactPerson?.cellphone}
            onEdit={onEdit}
            stepNumber={2}
          />
          <SectionRow 
            label="Telephone" 
            value={formValues?.contactPerson?.telephone}
            onEdit={onEdit}
            stepNumber={2}
          />
          {formValues?.manager?.firstName && (
            <SectionRow 
              label="Manager" 
              value={formatContact(formValues?.manager)}
              onEdit={onEdit}
              stepNumber={2}
            />
          )}
        </SectionHeader>

        {/* Physical Address */}
        <SectionHeader title="Physical Address">
          <SectionRow 
            label="Business Address" 
            value={formatAddress(formValues?.physicalAddress)}
            onEdit={onEdit}
            stepNumber={3}
          />
        </SectionHeader>

        {/* Operational Information */}
        <SectionHeader title="Operational Information">
          <SectionRow 
            label="Facilities" 
            value={formatFacilities(formValues?.facilities)}
            onEdit={onEdit}
            stepNumber={4}
          />
          <SectionRow 
            label="Services Offered" 
            value={formatServices(formValues?.services)}
            onEdit={onEdit}
            stepNumber={4}
          />
        </SectionHeader>

        {/* Additional Services */}
        <SectionHeader title="Additional Services">
          <SectionRow 
            label="Extra Services" 
            value={formatExtras(formValues?.extras)}
            onEdit={onEdit}
            stepNumber={5}
          />
        </SectionHeader>

        {/* Declaration */}
        <SectionHeader title="Declaration & Signature">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <div className="flex items-start mb-4">
              <Check className="text-green-500 mt-1 mr-3 flex-shrink-0 w-5 h-5" />
              <p className="text-gray-700 leading-relaxed">
                I confirm that all the information provided is accurate and complete. I understand that any false information may result in my application being rejected or my policy being voided.
              </p>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="bg-white p-4 rounded-lg border border-gray-200 flex-1 mr-4">
                <p className="font-semibold text-gray-900">
                  {formValues?.declaration?.name || 'Not provided'}
                </p>
                <p className="text-sm text-gray-600 mt-1">
                  {formValues?.declaration?.position || 'Position not provided'}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {formValues?.declaration?.date || 'Date not provided'}
                </p>
              </div>
              
              <button 
                type="button"
                onClick={() => onEdit(6)}
                className="text-[#00c2ff] hover:text-blue-600 flex items-center text-sm transition-colors"
              >
                <Edit className="w-4 h-4 mr-1" />
                Edit
              </button>
            </div>
          </div>
        </SectionHeader>

        {/* Documentation Status */}
        <SectionHeader title="Documentation Status">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {documentFields.map(({ key, label }) => {
              const document = formValues?.declaration?.documents?.[key];
              return document ? (
                <div key={key} className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                  <Check className="w-5 h-5 text-green-500 mr-3" />
                  <span className="text-green-800 font-medium">{label}</span>
                </div>
              ) : (
                <div key={key} className="flex items-center p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <div className="w-5 h-5 bg-gray-300 rounded-full mr-3"></div>
                  <span className="text-gray-500">{label} (Not uploaded)</span>
                </div>
              );
            })}
          </div>
        </SectionHeader>

        {/* Final Confirmation */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
          <h4 className="font-semibold text-gray-800 mb-4">Final Confirmation</h4>
          <label className="flex items-start space-x-3 text-sm text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              {...register('finalConfirmation', {
                required: 'You must confirm the final submission to proceed'
              })}
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span className="leading-relaxed">
              By clicking 'Submit', you confirm that all information provided is accurate and complete, and that this action serves as your electronic signature on this application form.
            </span>
          </label>
          {errors.finalConfirmation && (
            <p className="mt-2 text-sm text-red-600">{errors.finalConfirmation.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;