const mongoose = require('mongoose');
const User = require('./user.model');

const diagnoseSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true
  },
  symptoms: {
    type: String,
    required: true,
    trim: true
  },
  diagnosis: {
    type: String,
    required: true,
    trim: true
  },
  medications: {
    type: String,
    required: true,
    trim: true
  },
  medical_tests: {
    type: String,
    required: true,
    trim: true
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true
  },
  input_date: {
    type: Date,
    default: Date.now
  }

});

const Diagnose = mongoose.model('Diagnose', diagnoseSchema);

module.exports = Diagnose;