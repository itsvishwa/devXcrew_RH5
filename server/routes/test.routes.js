const express = require('express');
const router = express.Router();
const testController = require('../controllers/tests.controller');

router.get('/generate-upload-url', testController.genSignUrl);


module.exports = router;
