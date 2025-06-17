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

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-xl text-left font-semibold text-gray-900 mb-6">Review Your Application</h2>
      
      <div className="space-y-8">
        {/* Business Details */}
        <div className="border-b pb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">Business Details</h3>
            <button 
              onClick={() => onEdit(1)}
              className="text-[#00c2ff] flex items-center text-sm"
            >
              <Edit className="w-4 h-4 mr-1" /> Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Business Name</p>
              <p className="font-medium">{formData.businessName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Trading Name</p>
              <p className="font-medium">{formData.tradingName}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Registration Number</p>
              <p className="font-medium">{formData.registrationNumber}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Date Established</p>
              <p className="font-medium">{formData.dateEstablished}</p>
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="border-b pb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">Contact Details</h3>
            <button 
              onClick={() => onEdit(2)}
              className="text-[#00c2ff] flex items-center text-sm"
            >
              <Edit className="w-4 h-4 mr-1" /> Edit
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-500">Contact Person</p>
              <p className="font-medium">{formatContact(formData.contactPerson)}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-medium">{formData.contactPerson.email}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Cellphone</p>
              <p className="font-medium">{formData.contactPerson.cellphone}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Telephone</p>
              <p className="font-medium">{formData.contactPerson.telephone}</p>
            </div>
          </div>
        </div>

        {/* Physical Address */}
        <div className="border-b pb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">Physical Address</h3>
            <button 
              onClick={() => onEdit(3)}
              className="text-[#00c2ff] flex items-center text-sm"
            >
              <Edit className="w-4 h-4 mr-1" /> Edit
            </button>
          </div>
          <div>
            <p className="font-medium">{formatAddress(formData.physicalAddress)}</p>
          </div>
        </div>

        {/* Services */}
        <div className="border-b pb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">Services Offered</h3>
            <button 
              onClick={() => onEdit(4)}
              className="text-[#00c2ff] flex items-center text-sm"
            >
              <Edit className="w-4 h-4 mr-1" /> Edit
            </button>
          </div>
          <div>
            <p className="font-medium">{formatServices(formData.services)}</p>
          </div>
        </div>

        {/* Extras */}
        <div className="border-b pb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">Additional Services</h3>
            <button 
              onClick={() => onEdit(5)}
              className="text-[#00c2ff] flex items-center text-sm"
            >
              <Edit className="w-4 h-4 mr-1" /> Edit
            </button>
          </div>
          <div>
            <p className="font-medium">{formatExtras(formData.extras)}</p>
          </div>
        </div>

        {/* Declaration */}
        <div className="pb-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-800">Declaration</h3>
            <button 
              onClick={() => onEdit(6)}
              className="text-[#00c2ff] flex items-center text-sm"
            >
              <Edit className="w-4 h-4 mr-1" /> Edit
            </button>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="flex items-start">
              <Check className="text-green-500 mt-1 mr-2 flex-shrink-0" />
              <p className="text-sm text-gray-700">
                I confirm that all the information provided is accurate and complete. I understand that any false information may result in my application being rejected or my policy being voided.
              </p>
            </div>
            <div className="mt-4 pl-8">
              <p className="font-medium">{formData.declaration.name}</p>
              <p className="text-sm text-gray-600">{formData.declaration.position}</p>
              <p className="text-sm text-gray-600">{formData.declaration.date}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 p-4 rounded-lg">
        <h4 className="font-medium text-gray-800 mb-2">Documentation Uploaded</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {formData.declaration.documents?.businessRegistration && (
            <div className="flex items-center text-sm text-gray-600">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              Business Registration Certificate
            </div>
          )}
          {formData.declaration.documents?.operatingLicense && (
            <div className="flex items-center text-sm text-gray-600">
              <Check className="w-4 h-4 text-green-500 mr-2" />
              Operating License
            </div>
          )}
          {/* Add other document checks similarly */}
        </div>
      </div>
    </div>
  );
};

export default Review;