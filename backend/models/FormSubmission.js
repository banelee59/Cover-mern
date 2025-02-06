const mongoose = require('mongoose');

const formSubmissionSchema = new mongoose.Schema({
  // Profile Details
  title: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  idNumber: { type: String, required: true },
  gender: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  alternativeNumber: String,
  address: {
    street: { type: String, required: true },
    suburb: { type: String, required: true },
    city: { type: String, required: true },
    province: { type: String, required: true },
    postalCode: { type: String, required: true }
  },
  maritalStatus: { type: String, required: true },
  employmentStatus: { type: String, required: true },
  monthlyIncome: { type: String, required: true },

  // Policy Details
  policyType: { type: String, required: true },
  premiumFrequency: { type: String, required: true },
  dependents: { type: Number, required: true },

  // Extra Benefits
  draping: { type: Boolean, default: false },
  soundSystem: { type: Boolean, default: false },
  groceryBenefit: { type: Boolean, default: false },
  mobileToilets: { type: Boolean, default: false },
  videoStreaming: { type: Boolean, default: false },
  airtimeAllowance: { type: Boolean, default: false },
  mobileFridge: { type: Boolean, default: false },
  tombstone: { type: Boolean, default: false },
  catering: { type: Boolean, default: false },
  griefCounselling: { type: Boolean, default: false },
  floralArrangements: { type: Boolean, default: false },
  urns: { type: Boolean, default: false },
  funeralPrograms: { type: Boolean, default: false },
  graveLiners: { type: Boolean, default: false },
  graveDigging: { type: Boolean, default: false },

  // Cover Options
  coverAmount: { type: String, required: true },
  preferredCoverage: String,

  // Metadata
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FormSubmission', formSubmissionSchema); 