const express = require('express');
const router = express.Router();
const diagnoseController = require('../controllers/diagnose.controller')
const {verifySignIn} = require('../middleware/auth.middleware');

router.post('/viewHistory', verifySignIn, diagnoseController.getHistory);
router.post('/:patient', verifySignIn, diagnoseController.createDiagnose);

module.exports = router;
