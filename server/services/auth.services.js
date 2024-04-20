const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { secret, options } = require('../config/jwt');

exports.signup = async ({ nic, name, role, bod, password }) => {
    const existingUser = await User.findOne({ nic });
    if (existingUser) {
        throw new Error("NIC is already registered");
    }

    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
        nic: nic,
        name: name,
        role: role,
        bod: bod,
        password : hashedPassword
    });
    await newUser.save();
};

exports.signin = async ({ nic, password }) => {
    const user = await User.findOne({ nic });

    if (!user || !(bcrypt.compareSync(password, user.password))) {
        throw new Error("Invalid nice or password");
    }
    return jwt.sign({ id: user._id, role: user.role }, secret, options);
};
