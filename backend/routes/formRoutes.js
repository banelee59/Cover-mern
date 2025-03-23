const express = require('express');
const router = express.Router();
const { createFuneralParlour, getFormSubmissions, createFormSubmission } = require('../controllers/formController');

router.post('/register-funeral-parlour', createFuneralParlour);
router.get('/', getFormSubmissions);
router.post('/submit-application', createFormSubmission)

module.exports = router; 