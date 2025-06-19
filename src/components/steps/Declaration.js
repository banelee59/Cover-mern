import React from 'react';
import { Upload } from 'lucide-react';
import { useFormContext, useWatch } from 'react-hook-form';

const Declaration = () => {
  const { register, setValue, formState: { errors } } = useFormContext();
  
  // Watch the declaration object to get current values
  const declarationValues = useWatch({ name: 'declaration' });

  const handleFileUpload = (fieldName, file) => {
    setValue(`declaration.documents.${fieldName}`, file, { shouldValidate: true });
  };

  const FileUploadButton = ({ label, fieldName, uploaded, required = false }) => (
    <div className="relative">
      <button
        type="button"
        className={`w-full p-4 border-2 border-dashed rounded-lg text-left transition-colors
          ${uploaded 
            ? 'border-green-300 bg-green-50 text-green-700' 
            : required
              ? 'border-red-300 bg-red-50 text-red-600 hover:border-red-400'
              : 'border-gray-300 bg-gray-50 text-gray-600 hover:border-[#00c2ff] hover:bg-blue-50'
          }`}
        onClick={() => {
          const input = document.createElement('input');
          input.type = 'file';
          input.accept = '.pdf,.doc,.docx,.jpg,.jpeg,.png';
          input.onchange = (e) => {
            if (e.target.files[0]) {
              handleFileUpload(fieldName, e.target.files[0]);
            }
          };
          input.click();
        }}
      >
        <div className="flex items-center justify-between">
          <span className={`text-sm font-medium ${required ? 'font-bold' : ''}`}>
            {label} {required && <span className="text-red-500">*</span>}
          </span>
          <Upload className={`w-5 h-5 ${uploaded ? 'text-green-500' : required ? 'text-red-500' : 'text-[#00c2ff]'}`} />
        </div>
        {uploaded && (
          <div className="mt-2 text-xs text-green-600">
            ✓ {uploaded.name || 'File uploaded'}
          </div>
        )}
        {required && !uploaded && (
          <div className="mt-2 text-xs text-red-500">
            This document is required
          </div>
        )}
      </button>
      {/* Hidden input for validation */}
      {required && (
        <input
          type="hidden"
          {...register(`declaration.documents.${fieldName}`, {
            required: `${label.replace('Upload ', '')} is required`
          })}
        />
      )}
      {/* Display validation error */}
      {errors.declaration?.documents?.[fieldName] && (
        <p className="mt-1 text-sm text-red-500">
          {errors.declaration.documents[fieldName].message}
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 bg-white">
        <div className="bg-white shadow-sm p-6 mb-8">
          <h2 className="text-xl text-left font-semibold text-gray-900 mb-6">Declaration</h2>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <input
                type="checkbox"
                id="declarationAgreement"
                {...register('declaration.agreed', {
                  required: 'You must agree to the declaration to proceed'
                })}
                className="mt-1 mr-2"
              />
              <label htmlFor="declarationAgreement" className="text-sm text-gray-700">
                I confirm that all the information provided is accurate and complete. I understand that any false information may result in my application being rejected or my policy being voided.
              </label>
            </div>
            
            {errors.declaration?.agreed && (
              <p className="text-sm text-red-500">{errors.declaration.agreed.message}</p>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  {...register('declaration.name', {
                    required: 'Full name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters'
                    }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
                />
                {errors.declaration?.name && (
                  <p className="text-sm text-red-500">{errors.declaration.name.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position *
                </label>
                <input
                  type="text"
                  {...register('declaration.position', {
                    required: 'Position is required',
                    minLength: {
                      value: 2,
                      message: 'Position must be at least 2 characters'
                    }
                  })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
                />
                {errors.declaration?.position && (
                  <p className="text-sm text-red-500">{errors.declaration.position.message}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Date
                </label>
                <input
                  type="date"
                  {...register('declaration.date')}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
                />
                {errors.declaration?.date && (
                  <p className="text-sm text-red-500">{errors.declaration.date.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-xl text-left font-semibold text-gray-900 mb-6">Documentation Uploads</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">Required Documents</h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <p>Please note that <strong>Business Registration Certificate</strong> and <strong>Company Logo</strong> are mandatory uploads and must be provided to proceed.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FileUploadButton 
              label="Upload Business Registration Certificate"
              fieldName="businessRegistration"
              uploaded={declarationValues?.documents?.businessRegistration}
              required={true}
            />
            <FileUploadButton 
              label="Upload Operating License"
              fieldName="operatingLicense"
              uploaded={declarationValues?.documents?.operatingLicense}
            />
            <FileUploadButton 
              label="Upload Insurance Certificate"
              fieldName="insuranceCertificate"
              uploaded={declarationValues?.documents?.insuranceCertificate}
            />
            <FileUploadButton 
              label="Upload Health and Safety Certificate"
              fieldName="healthSafetyCertificate"
              uploaded={declarationValues?.documents?.healthSafetyCertificate}
            />
            <FileUploadButton 
              label="Upload Environmental Compliance Certificate"
              fieldName="environmentalCompliance"
              uploaded={declarationValues?.documents?.environmentalCompliance}
            />
            <FileUploadButton 
              label="Upload BEE Certificate"
              fieldName="beeCertificate"
              uploaded={declarationValues?.documents?.beeCertificate}
            />
            <FileUploadButton 
              label="Upload Company Logo"
              fieldName="companyLogo"
              uploaded={declarationValues?.documents?.companyLogo}
              required={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Declaration;