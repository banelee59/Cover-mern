import React from 'react';
import { useFormContext } from 'react-hook-form';

const OperationalInformation = () => {
  const {
    watch,
    setValue
  } = useFormContext();

  const serviceOptions = [
    { key: 'burial', label: 'Burial Services' },
    { key: 'cremation', label: 'Cremation Services' },
    { key: 'repatriation', label: 'Repatriation of Remains' },
    { key: 'crossBorder', label: 'Cross-Border Funeral Services' },
    { key: 'documentPrep', label: 'Document Preparation and Notarization' },
    { key: 'personalized', label: 'Personalized Funeral Services' },
    { key: 'legalAdmin', label: 'Legal and Administrative Assistance' },
    { key: 'memorial', label: 'Memorial Services' },
    { key: 'programDesign', label: 'Funeral Program Design and Printing' },
    { key: 'embalming', label: 'Body Preparation and Embalming' },
    { key: 'viewing', label: 'Viewing and Visitation Arrangements' },
    { key: 'transport', label: 'Transport Services' },
  ];

  const services = watch('services') || {};

  const handleServiceChange = (serviceKey, value) => {
    setValue(`services.${serviceKey}`, value);
  };

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-[#00c2ff] border-b pb-2">Main Service</h3>
      <p className="text-sm text-gray-500">
        Please indicate which main services your funeral parlour offers
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Service</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-700 border-b border-gray-200">Yes</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-700 border-b border-gray-200">No</th>
            </tr>
          </thead>
          <tbody>
            {serviceOptions.map((service) => (
              <tr key={service.key} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm font-medium text-gray-900 border-b border-gray-200">
                  {service.label}
                </td>
                <td className="px-4 py-2 text-center border-b border-gray-200">
                  <input
                    type="radio"
                    name={`services.${service.key}`}
                    checked={services[service.key] === true}
                    onChange={() => handleServiceChange(service.key, true)}
                    className="w-4 h-4 text-[#00c2ff] border-gray-300 focus:ring-[#00c2ff]"
                  />
                </td>
                <td className="px-4 py-2 text-center border-b border-gray-200">
                  <input
                    type="radio"
                    name={`services.${service.key}`}
                    checked={services[service.key] === false}
                    onChange={() => handleServiceChange(service.key, false)}
                    className="w-4 h-4 text-[#00c2ff] border-gray-300 focus:ring-[#00c2ff]"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OperationalInformation;
