const FormSubmission = require('../models/FormSubmission');
const FuneralParlour = require('../models/FuneralParlour');

const createFormSubmission = async (req, res) => {
  try {
    const formData = req.body;
    
    // Generate unique reference number
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
    const referenceNumber = `REF-${timestamp.toString().slice(-4)}${randomNum}`;
    
    // Check if reference number already exists
    const existingSubmission = await FormSubmission.findOne({ referenceNumber });
    if (existingSubmission) {
      // If exists, generate a new one
      const newRandomNum = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
      formData.referenceNumber = `REF-${timestamp.toString().slice(-4)}${newRandomNum}`;
    } else {
      formData.referenceNumber = referenceNumber;
    }
    
    // Create new form submission instance
    const newSubmission = new FormSubmission(formData);
    
    // Save to database
    await newSubmission.save();
    
    res.status(201).json({
      success: true,
      message: 'Form submission saved successfully',
      referenceNumber: newSubmission.referenceNumber
    });
  } catch (error) {
    console.error('Error saving form submission:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to save form submission',
      error: error.message
    });
  }
};

const createFuneralParlour = async (req, res) => {
  try {
      // Extract funeral parlour data from the request body
      const funeralParlourData = req.body;

      // Create a new instance of FuneralParlour using the data
      const newFuneralParlour = new FuneralParlour(funeralParlourData);

      // Save the funeral parlour data to MongoDB
      await newFuneralParlour.save();

      // Send response back with success message
      res.status(201).json({
          message: "Funeral Parlour saved successfully!",
          funeralParlour: newFuneralParlour
      });
  } catch (error) {
      // Catch and handle errors, and send a response with error message
      console.error("Error saving funeral parlour:", error);
      res.status(500).json({
          message: "Failed to save funeral parlour.",
          error: error.message
      });
  }
};

// @desc    Get all form submissions
// @route   GET /api/forms
// @access  Private
const getFormSubmissions = async (req, res) => {
  try {
    const submissions = await FormSubmission.find().sort('-submittedAt');
    
    res.status(200).json({
      success: true,
      count: submissions.length,
      data: submissions
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

module.exports = {
  createFuneralParlour,
  getFormSubmissions,
  createFormSubmission  // Add the new method to exports
};