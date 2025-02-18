const mongoose = require('mongoose');
const { Schema } = mongoose;

// Contact Person Schema
const contactPersonSchema = new Schema({
    title: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    position: { type: String, required: true },
    idNumber: { type: String, required: true },
    email: { type: String, required: true },
    cellphone: { type: String, required: true },
    telephone: { type: String, required: false }
});

// Physical Address Schema
const physicalAddressSchema = new Schema({
    streetNumber: { type: String, required: true },
    streetName: { type: String, required: true },
    suburb: { type: String, required: true },
    city: { type: String, required: true },
    province: { type: String, required: true },
    postalCode: { type: String, required: true }
});

// Operational Hours Schema
const operationalHoursSchema = new Schema({
    weekdays: {
        start: { type: String, required: false },
        end: { type: String, required: false },
        isClosed: { type: Boolean, required: true }
    },
    weekends: {
        start: { type: String, required: false },
        end: { type: String, required: false },
        isClosed: { type: Boolean, required: true }
    },
    publicHolidays: {
        start: { type: String, required: false },
        end: { type: String, required: false },
        isClosed: { type: Boolean, required: true }
    }
});

// Facilities Schema
const facilitiesSchema = new Schema({
    mortuary: { type: Boolean, required: true },
    storageFacility: { type: Boolean, required: true },
    refrigeration: { type: String, required: false },
    chapel: { type: Boolean, required: true },
    chapelCapacity: { type: String, required: false },
    parking: { type: Boolean, required: true },
    parkingCapacity: { type: String, required: false },
    disabledAccess: { type: Boolean, required: true },
    kitchen: { type: Boolean, required: true },
    restrooms: { type: Boolean, required: true }
});

// Extras Schema
const extrasSchema = new Schema({
    draping: {
        selected: { type: Boolean, required: false },
        price: { type: String, required: false }
    },
    mobileToilets: {
        selected: { type: Boolean, required: false },
        price: { type: String, required: false }
    },
    groceryBenefit: {
        selected: { type: Boolean, required: true },
        price: { type: String, required: false }
    },
    mobileFridge: {
        selected: { type: Boolean, required: false },
        price: { type: String, required: false }
    },
    soundSystem: {
        selected: { type: Boolean, required: false },
        price: { type: String, required: false }
    },
    videoStreaming: {
        selected: { type: Boolean, required: false },
        price: { type: String, required: false }
    },
    airtimeAllowance: {
        selected: { type: Boolean, required: false },
        price: { type: String, required: false }
    },
    tombstone: {
        selected: { type: Boolean, required: false },
        price: { type: String, required: false }
    },
    catering: {
        selected: { type: Boolean, required: false },
        price: { type: String, required: false }
    },
    griefCounselling: {
        selected: { type: Boolean, required: false },
        price: { type: String, required: false }
    },
    floralArrangements: {
        selected: { type: Boolean, required: false },
        price: { type: String, required: false }
    },
    urns: {
        selected: { type: Boolean, required: false },
        price: { type: String, required: false }
    },
    funeralPrograms: {
        selected: { type: Boolean, required: false },
        price: { type: String, required: false }
    },
    graveLiners: {
        selected: { type: Boolean, required: false },
        price: { type: String, required: false }
    },
    graveDigging: {
        selected: { type: Boolean, required: false },
        price: { type: String, required: false }
    }
});

// Declaration Schema
const declarationSchema = new Schema({
    agreed: { type: Boolean, required: true },
    name: { type: String, required: true },
    position: { type: String, required: true },
    date: { type: Date, required: true },
    signature: { type: String, required: true }
});

// Main Funeral Parlour Schema
const funeralParlourSchema = new Schema({
    businessName: { type: String, required: true },
    tradingName: { type: String, required: false },
    registrationNumber: { type: String, required: true },
    vatNumber: { type: String, required: false },
    businessType: { type: String, required: true },
    dateEstablished: { type: Date, required: true },
    contactPerson: { type: contactPersonSchema, required: true },
    physicalAddress: { type: physicalAddressSchema, required: true },
    operationalHours: { type: operationalHoursSchema, required: true },
    facilities: { type: facilitiesSchema, required: true },
    extras: { type: extrasSchema, required: true },
    declaration: { type: declarationSchema, required: true }
});

// Create and Export the Model
const FuneralParlour = mongoose.model('FuneralParlour', funeralParlourSchema);

module.exports = FuneralParlour;
