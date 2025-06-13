import React from 'react';

const PhysicalAddress = ({ formData, errors, touched, handleChange, setTouched, provinces }) => {
  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Physical Address</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Street Number*</label>
          <input
            type="text"
            name="streetNumber"
            value={formData.physicalAddress.streetNumber}
            onChange={(e) => handleChange(e, 'physicalAddress')}
            onBlur={() => setTouched(prev => ({ ...prev, 'physicalAddress.streetNumber': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['physicalAddress.streetNumber'] && touched['physicalAddress.streetNumber'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['physicalAddress.streetNumber'] && touched['physicalAddress.streetNumber'] && (
            <p className="mt-1 text-sm text-red-600">{errors['physicalAddress.streetNumber']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Street Name*</label>
          <input
            type="text"
            name="streetName"
            value={formData.physicalAddress.streetName}
            onChange={(e) => handleChange(e, 'physicalAddress')}
            onBlur={() => setTouched(prev => ({ ...prev, 'physicalAddress.streetName': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['physicalAddress.streetName'] && touched['physicalAddress.streetName'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['physicalAddress.streetName'] && touched['physicalAddress.streetName'] && (
            <p className="mt-1 text-sm text-red-600">{errors['physicalAddress.streetName']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Suburb*</label>
          <input
            type="text"
            name="suburb"
            value={formData.physicalAddress.suburb}
            onChange={(e) => handleChange(e, 'physicalAddress')}
            onBlur={() => setTouched(prev => ({ ...prev, 'physicalAddress.suburb': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['physicalAddress.suburb'] && touched['physicalAddress.suburb'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['physicalAddress.suburb'] && touched['physicalAddress.suburb'] && (
            <p className="mt-1 text-sm text-red-600">{errors['physicalAddress.suburb']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City*</label>
          <input
            type="text"
            name="city"
            value={formData.physicalAddress.city}
            onChange={(e) => handleChange(e, 'physicalAddress')}
            onBlur={() => setTouched(prev => ({ ...prev, 'physicalAddress.city': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['physicalAddress.city'] && touched['physicalAddress.city'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['physicalAddress.city'] && touched['physicalAddress.city'] && (
            <p className="mt-1 text-sm text-red-600">{errors['physicalAddress.city']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Province*</label>
          <select
            name="province"
            value={formData.physicalAddress.province}
            onChange={(e) => handleChange(e, 'physicalAddress')}
            onBlur={() => setTouched(prev => ({ ...prev, 'physicalAddress.province': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['physicalAddress.province'] && touched['physicalAddress.province']
                ? 'border-red-500'
                : 'border-gray-300'}`}
            required
          >
            <option value="">Select Province</option>
            {provinces.map(province => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
          {errors['physicalAddress.province'] && touched['physicalAddress.province'] && (
            <p className="mt-1 text-sm text-red-600">{errors['physicalAddress.province']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code*</label>
          <input
            type="text"
            name="postalCode"
            value={formData.physicalAddress.postalCode}
            onChange={(e) => handleChange(e, 'physicalAddress')}
            onBlur={() => setTouched(prev => ({ ...prev, 'physicalAddress.postalCode': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['physicalAddress.postalCode'] && touched['physicalAddress.postalCode'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['physicalAddress.postalCode'] && touched['physicalAddress.postalCode'] && (
            <p className="mt-1 text-sm text-red-600">{errors['physicalAddress.postalCode']}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhysicalAddress;