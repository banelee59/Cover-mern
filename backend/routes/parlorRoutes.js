const express = require('express');
const router = express.Router();
const parlorController = require('../controllers/parlorController');

router.post('/register', parlorController.registerParlor);
router.get('/parlors', parlorController.getAllParlors);
router.get('/parlors/:id', parlorController.getParlorById);
router.put('/parlors/:id', parlorController.updateParlor);
router.delete('/parlors/:id', parlorController.deleteParlor);

module.exports = router; 