const db = require('../models')
require('dotenv').config();
const bcrypt = require('bcrypt'); // Ensure bcrypt is required
const jwt = require('jsonwebtoken'); // Ensure jwt is required
const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await db.User.findOne({ where: { username } });
        if (!user) return res.status(404).json({ message: "User Not Found" });
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });
        const token = jwt.sign({ username: user.username, id:user.id }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
        res.json({ success: true, token });
    } catch (error) {
        res.status(500).json({ message: "Server error", error:error});
    }
}
const logout = (req, res) => {
    res.json({ success: true, message: "Logged out successfully" });
}
module.exports = { login, logout };