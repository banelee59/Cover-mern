import React from 'react';

const OperationalInformation = ({ formData, setFormData }) => {
  const serviceOptions = [
    { key: 'burial', label: 'Burial Services', description: 'Coordinating the burial process, including grave preparation, selecting a cemetery plot, and arranging for a graveside service.' },
    { key: 'cremation', label: 'Cremation Services', description: 'Arranging and managing the cremation process, including obtaining necessary permits, handling the deceased, and providing a variety of urns for ashes.' },
    { key: 'repatriation', label: 'Repatriation of Remains', description: 'Facilitating the transportation of the deceased back to their home country or location, handling all legal and logistical requirements involved in repatriation.' },
    { key: 'crossBorder', label: 'Cross-Border Funeral Services', description: 'Assisting with arrangements for funerals that involve multiple locations, including cross-border services.' },
    { key: 'documentPrep', label: 'Document Preparation and Notarization', description: 'Assisting with the preparation and notarization of necessary documents for the funeral and related arrangements.' },
    { key: 'personalized', label: 'Personalized Funeral Services', description: 'Customizing funeral services to reflect the personality, culture, and preferences of the deceased and their family, including themed services or incorporating unique elements.' },
    { key: 'legalAdmin', label: 'Legal and Administrative Assistance', description: 'Helping families with the necessary legal and administrative tasks following a death, such as obtaining death certificates, handling estate matters, and notifying government agencies.' },
    { key: 'memorial', label: 'Memorial Services', description: 'Planning and conducting memorial services, which may occur independently of a burial or cremation, focusing on celebrating the life of the deceased.' },
    { key: 'programDesign', label: 'Funeral Program Design and Printing', description: 'Creating and printing funeral programs, memorial cards, thank-you notes, and other necessary documents for the service.' },
    { key: 'embalming', label: 'Body Preparation and Embalming', description: 'Professional services for preparing the body for viewing or burial, including embalming, dressing, and cosmetic application to ensure the deceased is presented respectfully.' },
    { key: 'viewing', label: 'Viewing and Visitation Arrangements', description: 'Organizing times for family and friends to view the deceased and pay their respects, often including setup and coordination of a chapel or viewing room.' },
    { key: 'transport', label: 'Transport Services', description: 'Arranging for hearses and other vehicles needed to transport the deceased from the place of death to the funeral home, to the burial site, or crematorium, as well as transporting family members and guests.' },
  ];

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-[#00c2ff] border-b pb-2">Main Service</h3>
      <p className="text-sm text-gray-500">
        Please describe the primary services your funeral parlour offers
      </p>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Service</th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Description</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-700 border-b border-gray-200">Yes</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-700 border-b border-gray-200">No</th>
            </tr>
          </thead>
          <tbody>
            {serviceOptions.map((service) => (
              <tr key={service.key} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm font-medium text-gray-900 border-b border-gray-200">{service.label}</td>
                <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">{service.description}</td>
                <td className="px-4 py-2 text-center border-b border-gray-200">
                  <input
                    type="radio"
                    name={service.key}
                    checked={formData.services?.[service.key] === true}
                    onChange={() =>
                      setFormData((prev) => ({
                        ...prev,
                        services: { ...prev.services, [service.key]: true },
                      }))
                    }
                    className="w-4 h-4 text-[#00c2ff] border-gray-300 focus:ring-[#00c2ff]"
                  />
                </td>
                <td className="px-4 py-2 text-center border-b border-gray-200">
                  <input
                    type="radio"
                    name={service.key}
                    checked={formData.services?.[service.key] === false}
                    onChange={() =>
                      setFormData((prev) => ({
                        ...prev,
                        services: { ...prev.services, [service.key]: false },
                      }))
                    }
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
