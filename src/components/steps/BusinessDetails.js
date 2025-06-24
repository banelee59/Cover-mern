  // Updated BusinessDetails component with enhanced validation
  import React from 'react';
  import { useFormContext, Controller } from 'react-hook-form';
  import { validateSARegistrationNumber, formatRegistrationNumber } from '../../utils/registrationValidation';
  
  const BusinessDetails = () => {
    const { control, formState: { errors }, setValue, watch } = useFormContext();
    
    // Watch registration number for formatting
    const registrationNumber = watch('registrationNumber');
    
    const associations = [
      'NFDA (National Funeral Directors Association)',
      'SAFPA (South African Funeral Practitioners Association)',
      'FFSA (Funeral Federation of South Africa)',
      'NAFUPA (National Funeral Practitioners Association)',
      'SAFPS (South African Funeral Parlour Society)',
      'Other'
    ];
  
    const regions = [
      'Johannesburg North',
      'Johannesburg South',
      'Johannesburg East',
      'Johannesburg West',
      'Pretoria',
      'East Rand',
      'West Rand',
      'Vaal Triangle',
      'Soweto',
      'Alexandra',
      'Other Gauteng Regions'
    ];
  
    // Enhanced registration number validation
    const registrationNumberValidation = {
      required: 'Company registration number is required',
      validate: (value) => {
        const result = validateSARegistrationNumber(value);
        return result.isValid || result.message;
      }
    };
  
    // Handle registration number formatting on blur
    const handleRegistrationNumberBlur = (field) => (e) => {
      const formatted = formatRegistrationNumber(e.target.value);
      field.onChange(formatted);
      field.onBlur(e);
    };
  
    return (
      <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold text-gray-900 border-b pb-2">Business Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Business Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Funeral Parlour Name*</label>
            <Controller
              name="businessName"
              control={control}
              rules={{ required: 'Business name is required' }}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff] ${
                    errors.businessName ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              )}
            />
            {errors.businessName && (
              <p className="mt-1 text-sm text-red-600">{errors.businessName.message}</p>
            )}
          </div>
  
          {/* Trading Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Trading Name (if different)</label>
            <Controller
              name="tradingName"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
                />
              )}
            />
          </div>
  
          {/* Enhanced Registration Number with SA validation */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Company Registration Number*
              <span className="block text-xs text-gray-500 font-normal">
                
              </span>
            </label>
            <Controller
              name="registrationNumber"
              control={control}
              rules={registrationNumberValidation}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  placeholder=" "
                  onBlur={handleRegistrationNumberBlur(field)}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff] ${
                    errors.registrationNumber ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              )}
            />
            {errors.registrationNumber && (
              <p className="mt-1 text-sm text-red-600">{errors.registrationNumber.message}</p>
            )}
            {registrationNumber && !errors.registrationNumber && (
              <p className="mt-1 text-xs text-green-600">✓ Valid SA registration format</p>
            )}
          </div>
  
          {/* VAT Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">VAT Registration Number</label>
            <Controller
              name="vatNumber"
              control={control}
              render={({ field }) => (
                <input
                  {...field}
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff]"
                />
              )}
            />
          </div>
  
          {/* Business Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Type of Business*</label>
            <Controller
              name="businessType"
              control={control}
              rules={{ required: 'Business type is required' }}
              render={({ field }) => (
                <select
                  {...field}
                  className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff] ${
                    errors.businessType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select Business Type</option>
                  <option value="Sole Proprietor">Sole Proprietor</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Private Company">Private Company (Pty) Ltd</option>
                  <option value="Close Corporation">Close Corporation</option>
                </select>
              )}
            />
            {errors.businessType && (
              <p className="mt-1 text-sm text-red-600">{errors.businessType.message}</p>
            )}
          </div>
  
          {/* Date Established */}
          <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Date Established*</label>
          <Controller
            name="dateEstablished"
            control={control}
            rules={{ 
              required: 'Date established is required',
              validate: (value) => {
                if (!value) return 'Date established is required';
                
                const selectedDate = new Date(value);
                const today = new Date();
                
                // Set today to end of day for comparison
                today.setHours(23, 59, 59, 999);
                
                if (selectedDate > today) {
                  return 'Date established cannot be in the future';
                }
                
                // Optional: Check if date is too far in the past (e.g., before 1800)
                const minDate = new Date('1800-01-01');
                if (selectedDate < minDate) {
                  return 'Date established cannot be before 1800';
                }
                
                return true;
              }
            }}
            render={({ field }) => (
              <input
                {...field}
                type="date"
                max={new Date().toISOString().split('T')[0]} // Hide future dates - only show today and backwards
                min="1800-01-01" // Set reasonable minimum date
                className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff] ${
                  errors.dateEstablished ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            )}
          />
          {errors.dateEstablished && (
            <p className="mt-1 text-sm text-red-600">{errors.dateEstablished.message}</p>
          )}
        </div>
      </div>
      
        {/* Operating Region */}
<div className="w-full max-w-md">
  <label className="block text-sm font-medium text-gray-700 mb-1">Operating Region*</label>
  <Controller
    name="operatingRegion"
    control={control}
    rules={{ required: 'Operating region is required' }}
    render={({ field }) => (
      <select
        {...field}
        className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff] ${
          errors.operatingRegion ? 'border-red-500' : 'border-gray-300'
        }`}
      >
        <option value="">Select Region</option>
        <option value="Eastern Cape">Eastern Cape</option>
        <option value="Free State">Free State</option>
        <option value="Gauteng">Gauteng</option>
        <option value="KwaZulu-Natal">KwaZulu-Natal</option>
        <option value="Limpopo">Limpopo</option>
        <option value="Mpumalanga">Mpumalanga</option>
        <option value="Northern Cape">Northern Cape</option>
        <option value="North West">North West</option>
        <option value="Western Cape">Western Cape</option>
      </select>
    )}
  />
  {errors.operatingRegion && (
    <p className="mt-1 text-sm text-red-600">{errors.operatingRegion.message}</p>
  )}
</div>

        {/* Funeral Association */}
        <div className="w-full max-w-md">
          <label className="block text-sm font-medium text-gray-700 mb-1">Funeral Association*</label>
          <Controller
            name="association"
            control={control}
            rules={{ required: 'Association is required' }}
            render={({ field }) => (
              <select
                {...field}
                className={`w-full px-4 py-2 border rounded-lg focus:ring-[#00c2ff] focus:border-[#00c2ff] ${
                  errors.association ? 'border-red-500' : 'border-gray-300'
                }`}
              >
                <option value="">Select Association</option>
                {associations.map((association) => (
                  <option key={association} value={association}>
                    {association}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.association && (
            <p className="mt-1 text-sm text-red-600">{errors.association.message}</p>
          )}
        </div>
      </div>
    );
  };
  
  export default BusinessDetails;