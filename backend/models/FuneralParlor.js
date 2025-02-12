const mongoose = require('mongoose');

const funeralParlorSchema = new mongoose.Schema({
  businessName: { type: String, required: true },
  tradingAs: String,
  registrationNumber: { type: String, required: true, unique: true },
  vatNumber: String,
  fspcNumber: String,
  businessType: String,
  yearEstablished: Number,
  
  contactPerson: {
    title: String,
    firstName: String,
    lastName: String,
    position: String,
    email: { type: String, required: true },
    phone: { type: String, required: true },
    alternativePhone: String
  },
  
  physicalAddress: {
    street: String,
    suburb: String,
    city: String,
    province: String,
    postalCode: String
  },
  
  services: {
    mortuary: Boolean,
    chapel: Boolean,
    florist: Boolean,
    catering: Boolean,
    transport: Boolean,
    tombstones: Boolean,
    coffins: Boolean,
    cremation: Boolean
  },
  
  facilities: {
    refrigeration: Number,
    storageCabinets: Number,
    chapelCapacity: Number,
    parkingSpaces: Number,
    disabledAccess: Boolean,
    viewing: Boolean
  },
  
  compliance: {
    healthCertificate: Boolean,
    businessLicense: Boolean,
    taxClearance: Boolean,
    insuranceCover: Boolean,
    fspcRegistration: Boolean
  },
  
  bankingDetails: {
    bankName: String,
    accountHolder: String,
    accountNumber: String,
    branchCode: String,
    accountType: String
  },
  
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  },
  
  createdAt: {
    type: Date,
    default: Date.now
  },
  
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('FuneralParlor', funeralParlorSchema); 