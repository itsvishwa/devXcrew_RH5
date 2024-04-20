const jwt = require('jsonwebtoken');
const { secret } = require('../config/jwt');

module.exports = (req, res, next) => {
    // Get token from header
    const token = req.header('Authorization');
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
