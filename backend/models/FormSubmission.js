const mongoose = require('mongoose');

const formSubmissionSchema = new mongoose.Schema({
  // Profile Details
  title: { type: String, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  idNumber: { type: String, required: true },
  gender: { type: String, required: true },
  dateOfBirth: { type: String }, // Added dateOfBirth field
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  alternativeNumber: String,
  address: {
    street: { type: String },  // Removed required since empty string is allowed
    suburb: { type: String },  // Removed required since empty string is allowed
    city: { type: String },    // Removed required since empty string is allowed
    province: { type: String }, // Removed required since empty string is allowed
    postalCode: { type: String } // Removed required since empty string is allowed
  },
  maritalStatus: { type: String }, // Removed required since empty string is allowed
  employmentStatus: { type: String }, // Removed required since empty string is allowed
  monthlyIncome: { type: String }, // Removed required since empty string is allowed

  // Policy Details
  policyType: { type: String, required: true },
  premiumFrequency: { type: String, required: true },
  dependents: { type: String, required: true }, // Changed to String type to match the data

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
  coverAmount: { type: String }, // Removed required since empty string is allowed
  preferredCoverage: String,
  
  // Additional Fields
  totalPremium: { type: Number, default: 0 }, // Added totalPremium field
  referenceNumber: { type: String, required: true }, // Added referenceNumber field

  // Metadata
  submittedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('FormSubmission', formSubmissionSchema);