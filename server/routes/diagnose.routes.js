const express = require('express');
const router = express.Router();
const diagnoseController = require('../controllers/diagnose.controller')
const {verifySignIn} = require('../middleware/auth.middleware');

router.post('/:patient', verifySignIn, diagnoseController.createDiagnose);
router.get('/viewHistory/', verifySignIn, diagnoseController.getHistory);

module.exports = router;
