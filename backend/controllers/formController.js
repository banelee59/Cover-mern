const FormSubmission = require('../models/FormSubmission');
const FuneralParlour = require('../models/FuneralParlour');

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
  getFormSubmissions
}; 