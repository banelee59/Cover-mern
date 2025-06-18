// steps/Review.js
import React from 'react';
import { Check, Edit } from 'lucide-react';

const Review = ({ formData, onEdit }) => {
  const formatAddress = (address) => {
    return `${address.streetNumber} ${address.streetName}, ${address.suburb}, ${address.city}, ${address.province}, ${address.postalCode}`;
  };

  const formatContact = (contact) => {
    return `${contact.title} ${contact.firstName} ${contact.lastName}, ${contact.position}`;
  };

  const formatServices = (services) => {
    return Object.entries(services)
      .filter(([_, value]) => value === true)
      .map(([key]) => key)
      .join(', ');
  };

  const formatExtras = (extras) => {
    return Object.entries(extras)
      .filter(([_, value]) => value.selected === true)
      .map(([key]) => key)
      .join(', ');
  };

  const SectionRow = ({ label, value, onEdit, stepNumber }) => (
    <div className="flex items-start justify-between py-4 border-b border-gray-100 last:border-b-0">
      <div className="flex-1 pr-8">
        <h4 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-1">
          {label}
        </h4>
      </div>
      <div className="flex-2 flex items-center justify-between">
        <div className="text-gray-900 font-medium">
          {value}
        </div>
        <button 
          onClick={() => onEdit(stepNumber)}
          className="ml-4 text-[#00c2ff] hover:text-blue-600 flex items-center text-sm transition-colors"
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
            value={formData.businessName}
            onEdit={onEdit}
            stepNumber={1}
          />
          <SectionRow 
            label="Trading Name" 
            value={formData.tradingName}
            onEdit={onEdit}
            stepNumber={1}
          />
          <SectionRow 
            label="Registration Number" 
            value={formData.registrationNumber}
            onEdit={onEdit}
            stepNumber={1}
          />
          <SectionRow 
            label="Date Established" 
            value={formData.dateEstablished}
            onEdit={onEdit}
            stepNumber={1}
          />
        </SectionHeader>

        {/* Contact Details */}
        <SectionHeader title="Contact Information">
          <SectionRow 
            label="Contact Person" 
            value={formatContact(formData.contactPerson)}
            onEdit={onEdit}
            stepNumber={2}
          />
          <SectionRow 
            label="Email Address" 
            value={formData.contactPerson.email}
            onEdit={onEdit}
            stepNumber={2}
          />
          <SectionRow 
            label="Cellphone" 
            value={formData.contactPerson.cellphone}
            onEdit={onEdit}
            stepNumber={2}
          />
          <SectionRow 
            label="Telephone" 
            value={formData.contactPerson.telephone}
            onEdit={onEdit}
            stepNumber={2}
          />
        </SectionHeader>

        {/* Physical Address */}
        <SectionHeader title="Physical Address">
          <SectionRow 
            label="Business Address" 
            value={formatAddress(formData.physicalAddress)}
            onEdit={onEdit}
            stepNumber={3}
          />
        </SectionHeader>

        {/* Services */}
        <SectionHeader title="Services Offered">
          <SectionRow 
            label="Selected Services" 
            value={formatServices(formData.services)}
            onEdit={onEdit}
            stepNumber={4}
          />
        </SectionHeader>

        {/* Additional Services */}
        <SectionHeader title="Additional Services">
          <SectionRow 
            label="Extra Services" 
            value={formatExtras(formData.extras)}
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
                <p className="font-semibold text-gray-900">{formData.declaration.name}</p>
                <p className="text-sm text-gray-600 mt-1">{formData.declaration.position}</p>
                <p className="text-sm text-gray-500 mt-1">{formData.declaration.date}</p>
              </div>
              
              <button 
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
            {formData.declaration.documents?.businessRegistration && (
              <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-green-800 font-medium">Business Registration Certificate</span>
              </div>
            )}
            {formData.declaration.documents?.operatingLicense && (
              <div className="flex items-center p-3 bg-green-50 border border-green-200 rounded-lg">
                <Check className="w-5 h-5 text-green-500 mr-3" />
                <span className="text-green-800 font-medium">Operating License</span>
              </div>
            )}
            {/* Add other document checks similarly */}
          </div>
        </SectionHeader>

        {/* Final Confirmation */}
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mt-8">
          <h4 className="font-semibold text-gray-800 mb-4">Final Confirmation</h4>
          <label className="flex items-start space-x-3 text-sm text-gray-700 cursor-pointer">
            <input
              type="checkbox"
              required
              className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
            />
            <span className="leading-relaxed">
              By clicking 'Submit', you confirm that all information provided is accurate and complete, and that this action serves as your electronic signature on this application form.
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Review;