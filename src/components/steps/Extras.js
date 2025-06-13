import React from 'react';

const Extras = ({ formData, setFormData, errors, touched }) => {
  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Extra Service Offerings</h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-700 border-b border-gray-200">Service</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-700 border-b border-gray-200">Yes</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-700 border-b border-gray-200">No</th>
              <th className="px-4 py-2 text-center text-sm font-medium text-gray-700 border-b border-gray-200">Price (R)</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: 'draping', label: 'Draping' },
              { name: 'mobileToilets', label: 'Mobile Toilets' },
              { name: 'groceryBenefit', label: 'Grocery Benefit' },
              { name: 'mobileFridge', label: 'Mobile Fridge' },
              { name: 'soundSystem', label: 'Sound System' },
              { name: 'videoStreaming', label: 'Video Streaming' },
              { name: 'airtimeAllowance', label: 'Airtime Allowance' },
              { name: 'tombstone', label: 'Tombstone' },
              { name: 'catering', label: 'Catering' },
              { name: 'griefCounselling', label: 'Grief Counselling' },
              { name: 'floralArrangements', label: 'Floral Arrangements (Flowers & Wreaths)' },
              { name: 'urns', label: 'Urns' },
              { name: 'funeralPrograms', label: 'Funeral Programs and Stationery' },
              { name: 'graveLiners', label: 'Grave Liners and Burial Vaults' },
              { name: 'graveDigging', label: 'Grave Digging' },
            ].map((service) => (
              <tr key={service.name} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-700 border-b border-gray-200">{service.label}</td>
                <td className="px-4 py-2 text-center border-b border-gray-200">
                  <input
                    type="radio"
                    name={`extras.${service.name}`}
                    checked={formData.extras[service.name].selected === true}
                    onChange={() => {
                      setFormData(prev => ({
                        ...prev,
                        extras: {
                          ...prev.extras,
                          [service.name]: {
                            ...prev.extras[service.name],
                            selected: true
                          }
                        }
                      }));
                    }}
                    className="w-4 h-4 text-[#00c2ff] rounded border-gray-300 focus:ring-[#00c2ff]"
                  />
                </td>
                <td className="px-4 py-2 text-center border-b border-gray-200">
                  <input
                    type="radio"
                    name={`extras.${service.name}`}
                    checked={formData.extras[service.name].selected === false}
                    onChange={() => {
                      setFormData(prev => ({
                        ...prev,
                        extras: {
                          ...prev.extras,
                          [service.name]: {
                            ...prev.extras[service.name],
                            selected: false,
                            price: '' // Clear price when service is not selected
                          }
                        }
                      }));
                    }}
                    className="w-4 h-4 text-[#00c2ff] rounded border-gray-300 focus:ring-[#00c2ff]"
                  />
                </td>
                <td className="px-4 py-2 text-center border-b border-gray-200">
                  <input
                    type="number"
                    min="0"
                    step="0.01"
                    placeholder="0.00"
                    value={formData.extras[service.name].price}
                    onChange={(e) => {
                      setFormData(prev => ({
                        ...prev,
                        extras: {
                          ...prev.extras,
                          [service.name]: {
                            ...prev.extras[service.name],
                            price: e.target.value
                          }
                        }
                      }));
                    }}
                    disabled={formData.extras[service.name].selected !== true}
                    className={`w-24 px-2 py-1 text-right border rounded-md
                      ${formData.extras[service.name].selected === true 
                        ? 'border-gray-300 focus:ring-[#00c2ff] focus:border-[#00c2ff]' 
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'}`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Error message if no selections made */}
      {errors.extras && touched.extras && (
        <p className="mt-2 text-sm text-red-600">{errors.extras}</p>
      )}
    </div>
  );
};

export default Extras;