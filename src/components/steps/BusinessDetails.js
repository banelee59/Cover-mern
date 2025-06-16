// steps/BusinessDetails.js
import React from 'react';

const BusinessDetails = ({ formData, errors, touched, handleChange, setTouched, associations, regions }) => {
  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Business Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Business Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Funeral Parlour Name*
          </label>
          <input
            type="text"
            name="businessName"
            value={formData.businessName}
            onChange={handleChange}
            onBlur={() => setTouched(prev => ({ ...prev, businessName: true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors.businessName && touched.businessName 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors.businessName && touched.businessName && (
            <p className="mt-1 text-sm text-red-600">{errors.businessName}</p>
          )}
        </div>
        
        {/* Trading Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Trading Name (if different)
          </label>
          <input
            type="text"
            name="tradingName"
            value={formData.tradingName}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
          />
        </div>
        
        {/* Registration Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Company Registration Number*
          </label>
          <input
            type="text"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            onBlur={() => setTouched(prev => ({ ...prev, registrationNumber: true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors.registrationNumber && touched.registrationNumber 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors.registrationNumber && touched.registrationNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.registrationNumber}</p>
          )}
        </div>
        
        {/* VAT Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            VAT Registration Number
          </label>
          <input
            type="text"
            name="vatNumber"
            value={formData.vatNumber}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
          />
        </div>
        
        {/* Business Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Type of Business*
          </label>
          <select
            name="businessType"
            value={formData.businessType}
            onChange={handleChange}
            onBlur={() => setTouched(prev => ({ ...prev, businessType: true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors.businessType && touched.businessType
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          >
            <option value="">Select Business Type</option>
            <option value="Sole Proprietor">Sole Proprietor</option>
            <option value="Partnership">Partnership</option>
            <option value="Private Company">Private Company (Pty) Ltd</option>
            <option value="Close Corporation">Close Corporation</option>
          </select>
          {errors.businessType && touched.businessType && (
            <p className="mt-1 text-sm text-red-600">{errors.businessType}</p>
          )}
        </div>
        
        {/* Date Established */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date Established*
          </label>
          <input
            type="date"
            name="dateEstablished"
            value={formData.dateEstablished}
            onChange={handleChange}
            onBlur={() => setTouched(prev => ({ ...prev, dateEstablished: true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors.dateEstablished && touched.dateEstablished 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors.dateEstablished && touched.dateEstablished && (
            <p className="mt-1 text-sm text-red-600">{errors.dateEstablished}</p>
          )}
        </div>
        
        {/* Funeral Association */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Funeral Association*
          </label>
          <select
            name="association"
            value={formData.association}
            onChange={handleChange}
            onBlur={() => setTouched(prev => ({ ...prev, association: true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors.association && touched.association 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          >
            <option value="">Select Association</option>
            {associations.map((association) => (
              <option key={association} value={association}>
                {association}
              </option>
            ))}
          </select>
          {errors.association && touched.association && (
            <p className="mt-1 text-sm text-red-600">{errors.association}</p>
          )}
        </div>
        
        {/* Operating Region */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Primary Operating Region*
          </label>
          <select
            name="operatingRegion"
            value={formData.operatingRegion}
            onChange={handleChange}
            onBlur={() => setTouched(prev => ({ ...prev, operatingRegion: true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors.operatingRegion && touched.operatingRegion 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          >
            <option value="">Select Region</option>
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
          {errors.operatingRegion && touched.operatingRegion && (
            <p className="mt-1 text-sm text-red-600">{errors.operatingRegion}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;