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

  const FileUploadButton = ({ label, fieldName, uploaded }) => (
    <div className="relative">
      <button
        type="button"
        className={`w-full p-4 border-2 border-dashed rounded-lg text-left transition-colors
          ${uploaded 
            ? 'border-green-300 bg-green-50 text-green-700' 
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
          <span className="text-sm font-medium">{label}</span>
          <Upload className={`w-5 h-5 ${uploaded ? 'text-green-500' : 'text-[#00c2ff]'}`} />
        </div>
        {uploaded && (
          <div className="mt-2 text-xs text-green-600">
            ✓ {uploaded.name || 'File uploaded'}
          </div>
        )}
      </button>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FileUploadButton 
              label="Upload Business Registration Certificate"
              fieldName="businessRegistration"
              uploaded={declarationValues?.documents?.businessRegistration}
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
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Declaration;