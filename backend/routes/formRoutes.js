const express = require('express');
const router = express.Router();
const { createFuneralParlour, getFormSubmissions } = require('../controllers/formController');

router.post('/register-funeral-parlour', createFuneralParlour);
router.get('/', getFormSubmissions);

module.exports = router; 