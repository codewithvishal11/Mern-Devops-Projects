const jwt = require('jsonwebtoken');
const userModel = require('../models/User');

module.exports = async function (req, res, next) {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({ success: false, message: "No token provided. Please login first." });
    }

    const decoded = jwt.verify(token, process.env.JWT_KEY);
    const user = await userModel.findOne({ email: decoded.email }).select("-password");

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    req.user = user;
    next();

  } catch (err) {
    console.error("Auth Middleware Error:", err.message);
    res.status(401).json({ success: false, message: "Invalid or expired token" });
  }
};
