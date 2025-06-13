import React from 'react';

const Declaration = ({ formData, errors, touched, handleChange, setTouched }) => {
  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Declaration</h3>
      <div className="space-y-8">
        <div className="flex items-center">
          <input
            type="checkbox"
            name="agreed"
            checked={formData.declaration.agreed}
            onChange={(e) => handleChange(e, 'declaration')}
            onBlur={() => setTouched(prev => ({ ...prev, 'declaration.agreed': true }))}
            className={`w-5 h-5 text-[#00c2ff] border-gray-300 rounded focus:ring-[#00c2ff]
              ${errors['declaration.agreed'] && touched['declaration.agreed'] 
                ? 'border-red-500' 
                : ''}`}
          />
          <label className="ml-2 text-sm text-gray-700">
            I agree to the terms and conditions of the Funeral Parlour Membership Application.
          </label>
        </div>
        {errors['declaration.agreed'] && touched['declaration.agreed'] && (
          <p className="mt-1 text-sm text-red-600">{errors['declaration.agreed']}</p>
        )}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name*</label>
          <input
            type="text"
            name="name"
            value={formData.declaration.name}
            onChange={(e) => handleChange(e, 'declaration')}
            onBlur={() => setTouched(prev => ({ ...prev, 'declaration.name': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['declaration.name'] && touched['declaration.name'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['declaration.name'] && touched['declaration.name'] && (
            <p className="mt-1 text-sm text-red-600">{errors['declaration.name']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Position*</label>
          <input
            type="text"
            name="position"
            value={formData.declaration.position}
            onChange={(e) => handleChange(e, 'declaration')}
            onBlur={() => setTouched(prev => ({ ...prev, 'declaration.position': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['declaration.position'] && touched['declaration.position'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['declaration.position'] && touched['declaration.position'] && (
            <p className="mt-1 text-sm text-red-600">{errors['declaration.position']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date*</label>
          <input
            type="date"
            name="date"
            value={formData.declaration.date}
            onChange={(e) => handleChange(e, 'declaration')}
            onBlur={() => setTouched(prev => ({ ...prev, 'declaration.date': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['declaration.date'] && touched['declaration.date'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['declaration.date'] && touched['declaration.date'] && (
            <p className="mt-1 text-sm text-red-600">{errors['declaration.date']}</p>
          )}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Signature*</label>
          <input
            type="text"
            name="signature"
            value={formData.declaration.signature}
            onChange={(e) => handleChange(e, 'declaration')}
            onBlur={() => setTouched(prev => ({ ...prev, 'declaration.signature': true }))}
            className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]
              ${errors['declaration.signature'] && touched['declaration.signature'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['declaration.signature'] && touched['declaration.signature'] && (
            <p className="mt-1 text-sm text-red-600">{errors['declaration.signature']}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Declaration;