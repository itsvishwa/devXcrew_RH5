const mongoose = require('mongoose');

// Define User Schema
const userSchema = new mongoose.Schema({
    nic: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ['admin', 'patient', 'doctor', 'nurse'],
        required: true
    },
    bod: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

// Create User Model
const User = mongoose.model('User', userSchema);

module.exports = User;
