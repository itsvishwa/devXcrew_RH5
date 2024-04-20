const user = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { secret, options } = require('../config/jwt');

exports.signup = async ({ nic, name, role, bod, password }) => {
    const existingUser = await user.findOne({ nic });
    if (existingUser) {
        throw new Error("NIC is already registered");
    }

    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new user({
        nic: nic,
        name: name,
        role: role,
        bod: bod,
        password : hashedPassword
    });
    await newUser.save();
};

exports.signin = async ({ email, password }) => {
    const user = await user.findOne({ email });
    if (!user || !await user.comparePassword(password)) {
        throw new Error("Invalid email or password");
    }
    return jwt.sign({ userId: user._id }, secret, options);
};
