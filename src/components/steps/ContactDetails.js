import React from 'react';
import { useFormContext } from 'react-hook-form';

const ContactDetails = () => {
  const {
    register,
    formState: { errors },
    watch,
    setValue
  } = useFormContext();

  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <div className="text-black mb-4">
        <h3 className="text-lg font-semibold">FUNERAL PARLOUR OWNER DETAILS</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title :</label>
          <select
            {...register('contactPerson.title', { required: 'Title is required' })}
            className={`w-full px-3 py-2 border rounded  
              ${errors.contactPerson?.title ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Select Title</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
          </select>
          {errors.contactPerson?.title && (
            <p className="mt-1 text-sm text-red-600">{errors.contactPerson.title.message}</p>
          )}
        </div>

        {/* Initials */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Initials :</label>
          <input
            type="text"
            {...register('contactPerson.initials')}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
        </div>

        {/* Gender */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender :</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                {...register('contactPerson.gender')}
                value="Male"
                className="mr-2"
              />
              <span className="px-3 py-1 border rounded">Male</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                {...register('contactPerson.gender')}
                value="Female"
                className="mr-2"
              />
              <span className="px-3 py-1 border rounded">Female</span>
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name :</label>
          <input
            type="text"
            {...register('contactPerson.firstName', { required: 'First name is required' })}
            className={`w-full px-3 py-2 border rounded 
              ${errors.contactPerson?.firstName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.contactPerson?.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.contactPerson.firstName.message}</p>
          )}
        </div>

        {/* Surname */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Surname :</label>
          <input
            type="text"
            {...register('contactPerson.lastName', { required: 'Last name is required' })}
            className={`w-full px-3 py-2 border rounded 
              ${errors.contactPerson?.lastName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.contactPerson?.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.contactPerson.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number :</label>
          <input
            type="text"
            {...register('contactPerson.cellphone', { 
              required: 'Mobile number is required',
              pattern: {
                value: /^[0-9+\-\s()]+$/,
                message: 'Please enter a valid phone number'
              }
            })}
            className={`w-full px-3 py-2 border rounded 
              ${errors.contactPerson?.cellphone ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.contactPerson?.cellphone && (
            <p className="mt-1 text-sm text-red-600">{errors.contactPerson.cellphone.message}</p>
          )}
        </div>

        {/* Alt Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Alt Number :</label>
          <input
            type="text"
            {...register('contactPerson.telephone', {
              pattern: {
                value: /^[0-9+\-\s()]*$/,
                message: 'Please enter a valid phone number'
              }
            })}
            className={`w-full px-3 py-2 border rounded 
              ${errors.contactPerson?.telephone ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.contactPerson?.telephone && (
            <p className="mt-1 text-sm text-red-600">{errors.contactPerson.telephone.message}</p>
          )}
        </div>
      </div>

      {/* E-Mail */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail :</label>
        <input
          type="email"
          {...register('contactPerson.email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Please enter a valid email address'
            }
          })}
          className={`w-full px-3 py-2 border rounded 
            ${errors.contactPerson?.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.contactPerson?.email && (
          <p className="mt-1 text-sm text-red-600">{errors.contactPerson.email.message}</p>
        )}
      </div>

      {/* Race */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Race :</label>
        <div className="flex flex-wrap gap-2">
          {['African', 'Coloured', 'Indian', 'White', 'Other'].map((race) => (
            <label key={race} className="flex items-center">
              <input
                type="radio"
                {...register('contactPerson.race')}
                value={race}
                className="mr-2"
              />
              <span className="px-3 py-1 border rounded">{race}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Funeral Parlour manager details */}
      <div className="text-black mb-4">
        <h3 className="text-lg font-semibold">FUNERAL PARLOUR MANAGER DETAILS</h3>
      </div>
        
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title :</label>
          <select
            {...register('manager.title')}
            className={`w-full px-3 py-2 border rounded 
              ${errors.manager?.title ? 'border-red-500' : 'border-gray-300'}`}
          >
            <option value="">Select Title</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
          </select>
          {errors.manager?.title && (
            <p className="mt-1 text-sm text-red-600">{errors.manager.title.message}</p>
          )}
        </div>

        {/* Initials */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Initials :</label>
          <input
            type="text"
            {...register('manager.initials')}
            className={`w-full px-3 py-2 border rounded 
              ${errors.manager?.initials ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.manager?.initials && (
            <p className="mt-1 text-sm text-red-600">{errors.manager.initials.message}</p>
          )}
        </div>

        {/* Gender */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender :</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                {...register('manager.gender')}
                value="Male"
                className="mr-2"
              />
              <span className="px-3 py-1 border rounded">Male</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                {...register('manager.gender')}
                value="Female"
                className="mr-2"
              />
              <span className="px-3 py-1 border rounded">Female</span>
            </label>
          </div>
          {errors.manager?.gender && (
            <p className="mt-1 text-sm text-red-600">{errors.manager.gender.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name :</label>
          <input
            type="text"
            {...register('manager.firstName')}
            className={`w-full px-3 py-2 border rounded 
              ${errors.manager?.firstName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.manager?.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.manager.firstName.message}</p>
          )}
        </div>

        {/* Surname */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Surname :</label>
          <input
            type="text"
            {...register('manager.lastName')}
            className={`w-full px-3 py-2 border rounded 
              ${errors.manager?.lastName ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.manager?.lastName && (
            <p className="mt-1 text-sm text-red-600">{errors.manager.lastName.message}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number :</label>
          <input
            type="text"
            {...register('manager.cellphone', {
              pattern: {
                value: /^[0-9+\-\s()]*$/,
                message: 'Please enter a valid phone number'
              }
            })}
            className={`w-full px-3 py-2 border rounded 
              ${errors.manager?.cellphone ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.manager?.cellphone && (
            <p className="mt-1 text-sm text-red-600">{errors.manager.cellphone.message}</p>
          )}
        </div>

        {/* Alt Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Alt Number :</label>
          <input
            type="text"
            {...register('manager.telephone', {
              pattern: {
                value: /^[0-9+\-\s()]*$/,
                message: 'Please enter a valid phone number'
              }
            })}
            className={`w-full px-3 py-2 border rounded 
              ${errors.manager?.telephone ? 'border-red-500' : 'border-gray-300'}`}
          />
          {errors.manager?.telephone && (
            <p className="mt-1 text-sm text-red-600">{errors.manager.telephone.message}</p>
          )}
        </div>
      </div>

      {/* E-Mail */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail :</label>
        <input
          type="email"
          {...register('manager.email', {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Please enter a valid email address'
            }
          })}
          className={`w-full px-3 py-2 border rounded 
            ${errors.manager?.email ? 'border-red-500' : 'border-gray-300'}`}
        />
        {errors.manager?.email && (
          <p className="mt-1 text-sm text-red-600">{errors.manager.email.message}</p>
        )}
      </div>

      {/* Race */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Race :</label>
        <div className="flex flex-wrap gap-2">
          {['African', 'Coloured', 'Indian', 'White', 'Other'].map((race) => (
            <label key={race} className="flex items-center">
              <input
                type="radio"
                {...register('manager.race')}
                value={race}
                className="mr-2"
              />
              <span className="px-3 py-1 border rounded">{race}</span>
            </label>
          ))}
        </div>
        {errors.manager?.race && (
          <p className="mt-1 text-sm text-red-600">{errors.manager.race.message}</p>
        )}
      </div>
    </div>
  );
};

export default ContactDetails;