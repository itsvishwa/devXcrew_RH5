const authService = require('../services/auth.services');

const signup = async (req, res) => {
    try {
        console.log(req.body);
        await authService.signup(req.body);
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error in signup:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

const signin = async (req, res) => {
    try {
        const token = await authService.signin(req.body);
        res.status(200).json({ token });
    } catch (error) {
        console.error("Error in signin:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    signup,
    signin
}
