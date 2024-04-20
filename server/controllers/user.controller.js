const userService = require('../services/user.services');

const verifyPatient = async (req, res) => {
    try {
        const user = await userService.verifyPatient(req.query);
        res.status(201).json(user);
    } catch (error) {
        console.error("Error Verifying Patient:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    verifyPatient
}