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

// Define virtual getter to compute age
userSchema.virtual('age').get(function() {
    // Calculate age based on the birthdate
    const today = new Date();
    const birthDate = this.bod;
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
});

// Create User Model
const User = mongoose.model('User', userSchema);

module.exports = User;
