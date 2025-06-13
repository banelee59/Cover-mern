import React from 'react';

const ContactDetails = ({ formData, errors, touched, handleChange, setTouched }) => {
  return (
    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
      <div className="bg-[#1e3a8a] text-white p-3 -m-6 mb-6 rounded-t-lg">
        <h3 className="text-lg font-semibold">FUNERAL PARLOUR OWNER DETAILS</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title :</label>
          <select
            name="title"
            value={formData.contactPerson.title}
            onChange={(e) => handleChange(e, 'contactPerson')}
            onBlur={() => setTouched(prev => ({ ...prev, 'contactPerson.title': true }))}
            className={`w-full px-3 py-2 border rounded focus:ring-[#00c2ff] focus:border-[#00c2ff] bg-blue-50
              ${errors['contactPerson.title'] && touched['contactPerson.title'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          >
            <option value="">Select Title</option>
            <option value="Mr">Mr</option>
            <option value="Mrs">Mrs</option>
            <option value="Ms">Ms</option>
            <option value="Dr">Dr</option>
          </select>
          {errors['contactPerson.title'] && touched['contactPerson.title'] && (
            <p className="mt-1 text-sm text-red-600">{errors['contactPerson.title']}</p>
          )}
        </div>

        {/* Initials */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Initials :</label>
          <input
            type="text"
            name="initials"
            value={formData.contactPerson.initials || ''}
            onChange={(e) => handleChange(e, 'contactPerson')}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-[#00c2ff] focus:border-[#00c2ff] bg-blue-50"
          />
        </div>

        {/* Gender */}
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Gender :</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.contactPerson.gender === 'Male'}
                onChange={(e) => handleChange(e, 'contactPerson')}
                className="mr-2"
              />
              <span className="px-3 py-1 bg-blue-50 border rounded">Male</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.contactPerson.gender === 'Female'}
                onChange={(e) => handleChange(e, 'contactPerson')}
                className="mr-2"
              />
              <span className="px-3 py-1 bg-blue-50 border rounded">Female</span>
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
            name="firstName"
            value={formData.contactPerson.firstName}
            onChange={(e) => handleChange(e, 'contactPerson')}
            className={`w-full px-3 py-2 border rounded focus:ring-[#00c2ff] focus:border-[#00c2ff] bg-blue-50
              ${errors['contactPerson.firstName'] && touched['contactPerson.firstName'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['contactPerson.firstName'] && touched['contactPerson.firstName'] && (
            <p className="mt-1 text-sm text-red-600">{errors['contactPerson.firstName']}</p>
          )}
        </div>

        {/* Surname */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Surname :</label>
          <input
            type="text"
            name="lastName"
            value={formData.contactPerson.lastName}
            onChange={(e) => handleChange(e, 'contactPerson')}
            className={`w-full px-3 py-2 border rounded focus:ring-[#00c2ff] focus:border-[#00c2ff] bg-blue-50
              ${errors['contactPerson.lastName'] && touched['contactPerson.lastName'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['contactPerson.lastName'] && touched['contactPerson.lastName'] && (
            <p className="mt-1 text-sm text-red-600">{errors['contactPerson.lastName']}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Mobile Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number :</label>
          <input
            type="text"
            name="cellphone"
            value={formData.contactPerson.cellphone}
            onChange={(e) => handleChange(e, 'contactPerson')}
            className={`w-full px-3 py-2 border rounded focus:ring-[#00c2ff] focus:border-[#00c2ff] bg-blue-50
              ${errors['contactPerson.cellphone'] && touched['contactPerson.cellphone'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
            required
          />
          {errors['contactPerson.cellphone'] && touched['contactPerson.cellphone'] && (
            <p className="mt-1 text-sm text-red-600">{errors['contactPerson.cellphone']}</p>
          )}
        </div>

        {/* Alt Number */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Alt Number :</label>
          <input
            type="text"
            name="telephone"
            value={formData.contactPerson.telephone}
            onChange={(e) => handleChange(e, 'contactPerson')}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-[#00c2ff] focus:border-[#00c2ff] bg-blue-50"
          />
        </div>
      </div>

      {/* E-Mail */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail :</label>
        <input
          type="email"
          name="email"
          value={formData.contactPerson.email}
          onChange={(e) => handleChange(e, 'contactPerson')}
          onBlur={() => setTouched(prev => ({ ...prev, 'contactPerson.email': true }))}
          className={`w-full px-3 py-2 border rounded focus:ring-[#00c2ff] focus:border-[#00c2ff] bg-blue-50
            ${errors['contactPerson.email'] && touched['contactPerson.email'] 
              ? 'border-red-500' 
              : 'border-gray-300'}`}
          required
        />
        {errors['contactPerson.email'] && touched['contactPerson.email'] && (
          <p className="mt-1 text-sm text-red-600">{errors['contactPerson.email']}</p>
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
                name="race"
                value={race}
                checked={formData.contactPerson.race === race}
                onChange={(e) => handleChange(e, 'contactPerson')}
                className="mr-2"
              />
              <span className="px-3 py-1 bg-blue-50 border rounded">{race}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Funeral Parlour manager details */}
      <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm">
        <div className="bg-[#1e3a8a] text-white p-3 -m-6 mb-6 rounded-t-lg">
          <h3 className="text-lg font-semibold">FUNERAL PARLOUR MANAGER DETAILS</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title :</label>
            <select
              name="title"
              value={formData.manager?.title || ''}
              onChange={(e) => handleChange(e, 'manager')}
              onBlur={() => setTouched(prev => ({ ...prev, 'manager.title': true }))}
              className={`w-full px-3 py-2 border rounded focus:ring-[#00c2ff] focus:border-[#00c2ff] bg-blue-50
                ${errors['manager.title'] && touched['manager.title'] 
                  ? 'border-red-500' 
                  : 'border-gray-300'}`}
            >
              <option value="">Select Title</option>
              <option value="Mr">Mr</option>
              <option value="Mrs">Mrs</option>
              <option value="Ms">Ms</option>
              <option value="Dr">Dr</option>
            </select>
            {errors['manager.title'] && touched['manager.title'] && (
              <p className="mt-1 text-sm text-red-600">{errors['manager.title']}</p>
            )}
          </div>

          {/* Initials */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Initials :</label>
            <input
              type="text"
              name="initials"
              value={formData.manager?.initials || ''}
              onChange={(e) => handleChange(e, 'manager')}
              onBlur={() => setTouched(prev => ({ ...prev, 'manager.initials': true }))}
              className={`w-full px-3 py-2 border rounded focus:ring-[#00c2ff] focus:border-[#00c2ff] bg-blue-50
                ${errors['manager.initials'] && touched['manager.initials'] 
                  ? 'border-red-500' 
                  : 'border-gray-300'}`}
            />
            {errors['manager.initials'] && touched['manager.initials'] && (
              <p className="mt-1 text-sm text-red-600">{errors['manager.initials']}</p>
            )}
          </div>

          {/* Gender */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Gender :</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.manager?.gender === 'Male'}
                  onChange={(e) => handleChange(e, 'manager')}
                  onBlur={() => setTouched(prev => ({ ...prev, 'manager.gender': true }))}
                  className="mr-2"
                />
                <span className="px-3 py-1 bg-blue-50 border rounded">Male</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.manager?.gender === 'Female'}
                  onChange={(e) => handleChange(e, 'manager')}
                  onBlur={() => setTouched(prev => ({ ...prev, 'manager.gender': true }))}
                  className="mr-2"
                />
                <span className="px-3 py-1 bg-blue-50 border rounded">Female</span>
              </label>
            </div>
            {errors['manager.gender'] && touched['manager.gender'] && (
              <p className="mt-1 text-sm text-red-600">{errors['manager.gender']}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name :</label>
            <input
              type="text"
              name="firstName"
              value={formData.manager?.firstName || ''}
              onChange={(e) => handleChange(e, 'manager')}
              onBlur={() => setTouched(prev => ({ ...prev, 'manager.firstName': true }))}
              className={`w-full px-3 py-2 border rounded focus:ring-[#00c2ff] focus:border-[#00c2ff] bg-blue-50
                ${errors['manager.firstName'] && touched['manager.firstName'] 
                  ? 'border-red-500' 
                  : 'border-gray-300'}`}
            />
            {errors['manager.firstName'] && touched['manager.firstName'] && (
              <p className="mt-1 text-sm text-red-600">{errors['manager.firstName']}</p>
            )}
          </div>

          {/* Surname */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Surname :</label>
            <input
              type="text"
              name="lastName"
              value={formData.manager?.lastName || ''}
              onChange={(e) => handleChange(e, 'manager')}
              onBlur={() => setTouched(prev => ({ ...prev, 'manager.lastName': true }))}
              className={`w-full px-3 py-2 border rounded focus:ring-[#00c2ff] focus:border-[#00c2ff] bg-blue-50
                ${errors['manager.lastName'] && touched['manager.lastName'] 
                  ? 'border-red-500' 
                  : 'border-gray-300'}`}
            />
            {errors['manager.lastName'] && touched['manager.lastName'] && (
              <p className="mt-1 text-sm text-red-600">{errors['manager.lastName']}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Mobile Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Mobile Number :</label>
            <input
              type="text"
              name="cellphone"
              value={formData.manager?.cellphone || ''}
              onChange={(e) => handleChange(e, 'manager')}
              onBlur={() => setTouched(prev => ({ ...prev, 'manager.cellphone': true }))}
              className={`w-full px-3 py-2 border rounded focus:ring-[#00c2ff] focus:border-[#00c2ff] bg-blue-50
                ${errors['manager.cellphone'] && touched['manager.cellphone'] 
                  ? 'border-red-500' 
                  : 'border-gray-300'}`}
            />
            {errors['manager.cellphone'] && touched['manager.cellphone'] && (
              <p className="mt-1 text-sm text-red-600">{errors['manager.cellphone']}</p>
            )}
          </div>

          {/* Alt Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Alt Number :</label>
            <input
              type="text"
              name="telephone"
              value={formData.manager?.telephone || ''}
              onChange={(e) => handleChange(e, 'manager')}
              onBlur={() => setTouched(prev => ({ ...prev, 'manager.telephone': true }))}
              className={`w-full px-3 py-2 border rounded focus:ring-[#00c2ff] focus:border-[#00c2ff] bg-blue-50
                ${errors['manager.telephone'] && touched['manager.telephone'] 
                  ? 'border-red-500' 
                  : 'border-gray-300'}`}
            />
            {errors['manager.telephone'] && touched['manager.telephone'] && (
              <p className="mt-1 text-sm text-red-600">{errors['manager.telephone']}</p>
            )}
          </div>
        </div>

        {/* E-Mail */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">E-Mail :</label>
          <input
            type="email"
            name="email"
            value={formData.manager?.email || ''}
            onChange={(e) => handleChange(e, 'manager')}
            onBlur={() => setTouched(prev => ({ ...prev, 'manager.email': true }))}
            className={`w-full px-3 py-2 border rounded focus:ring-[#00c2ff] focus:border-[#00c2ff] bg-blue-50
              ${errors['manager.email'] && touched['manager.email'] 
                ? 'border-red-500' 
                : 'border-gray-300'}`}
          />
          {errors['manager.email'] && touched['manager.email'] && (
            <p className="mt-1 text-sm text-red-600">{errors['manager.email']}</p>
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
                  name="race"
                  value={race}
                  checked={formData.manager?.race === race}
                  onChange={(e) => handleChange(e, 'manager')}
                  onBlur={() => setTouched(prev => ({ ...prev, 'manager.race': true }))}
                  className="mr-2"
                />
                <span className="px-3 py-1 bg-blue-50 border rounded">{race}</span>
              </label>
            ))}
          </div>
          {errors['manager.race'] && touched['manager.race'] && (
            <p className="mt-1 text-sm text-red-600">{errors['manager.race']}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;