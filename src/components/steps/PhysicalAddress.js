import React from 'react';
import { useFormContext } from 'react-hook-form';

const PhysicalAddress = ({ provinces }) => {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Physical Address</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Street Number*</label>
          <input
            type="text"
            {...register('physicalAddress.streetNumber', {
              required: 'Street number is required',
              pattern: {
                value: /^[0-9]+$/,
                message: 'Street number must contain only numbers'
              }
            })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors.physicalAddress?.streetNumber ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.physicalAddress?.streetNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.physicalAddress.streetNumber.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Street Name*</label>
          <input
            type="text"
            {...register('physicalAddress.streetName', {
              required: 'Street name is required',
              pattern: {
                value: /^[A-Za-z\s]+$/,
                message: 'Street name must contain only letters'
              }
            })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors.physicalAddress?.streetName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.physicalAddress?.streetName && (
            <p className="mt-1 text-sm text-red-600">{errors.physicalAddress.streetName.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Suburb*</label>
          <input
            type="text"
            {...register('physicalAddress.suburb', { required: 'Suburb is required' })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors.physicalAddress?.suburb ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.physicalAddress?.suburb && (
            <p className="mt-1 text-sm text-red-600">{errors.physicalAddress.suburb.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">City*</label>
          <input
            type="text"
            {...register('physicalAddress.city', { required: 'City is required' })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors.physicalAddress?.city ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.physicalAddress?.city && (
            <p className="mt-1 text-sm text-red-600">{errors.physicalAddress.city.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Province*</label>
          <select
            {...register('physicalAddress.province', { required: 'Province is required' })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors.physicalAddress?.province ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Select Province</option>
            {provinces.map(province => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
          {errors.physicalAddress?.province && (
            <p className="mt-1 text-sm text-red-600">{errors.physicalAddress.province.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Postal Code*</label>
          <input
            type="text"
            {...register('physicalAddress.postalCode', {
              required: 'Postal code is required',
              pattern: {
                value: /^[0-9]{4}$/,
                message: 'Please enter a valid 4-digit postal code'
              }
            })}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors.physicalAddress?.postalCode ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.physicalAddress?.postalCode && (
            <p className="mt-1 text-sm text-red-600">{errors.physicalAddress.postalCode.message}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhysicalAddress;
