const express = require('express');
const router = express.Router();
const diagnoseController = require('../controllers/diagnose.controller');

router.post('/:patient', diagnoseController.createDiagnose);

module.exports = router;
