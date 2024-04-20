const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');

const verifySignIn = (req, res, next) => {
    // Get token from header
    const token = req.header('authorization');
    if (!token) {
        return res.status(401).json({ error: "Unauthorized" });
    }
    try {
        // Verify token
        const decoded = jwt.verify(token, secret);
        req.user = decoded;
        next();
    } catch (error) {
        console.error("Error in verifyToken:", error);
        res.status(401).json({ error: "Invalid token" });
    }
};

const verifyDoctor = (req, res, next) => {
    if (req.body.role!=='doctor') return res.status(400).send('Not a doctor');
    next()
}

const verifyNurse = (req, res, next) => {
    if (req.body.role!=='nurse') return res.status(400).send('Not a nurse');
    next()
}

const verifyPatient = (req, res, next) => {
    if (req.body.role!=='patient') return res.status(400).send('Not a patient');
    next()
}

const verifyAdmin = (req, res, next) => {
    if (req.body.role!=='admin') return res.status(400).send('Not a admin');
    next()
}

module.exports = {
    verifySignIn,
    verifyDoctor,
    verifyNurse,
    verifyPatient,
    verifyAdmin
}