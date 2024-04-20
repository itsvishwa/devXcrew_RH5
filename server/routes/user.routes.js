const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');

router.get('/verifyPatient', userController.verifyPatient);
router.get('/history', userController.verifyPatient);


module.exports = router;
