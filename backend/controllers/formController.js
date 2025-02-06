const FormSubmission = require('../models/FormSubmission');

// @desc    Submit form data
// @route   POST /api/forms
// @access  Public
const submitForm = async (req, res) => {
  try {
    const formData = req.body;
    const submission = await FormSubmission.create(formData);
    
    res.status(201).json({
      success: true,
      data: submission
    });
  } catch (error) {
    res.status(400).json({
      success: false,
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
  submitForm,
  getFormSubmissions
}; 