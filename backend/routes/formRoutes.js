const express = require('express');
const router = express.Router();
const { submitForm, getFormSubmissions } = require('../controllers/formController');

router.post('/', submitForm);
router.get('/', getFormSubmissions);

module.exports = router; 