const User = require("../models/User");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

// 🟢 Signup User
const signupUser = async (req, res) => {
  try {
    const { fullname, email, password } = req.body;

    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ success: false, message: "User already exists. Please login." });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = await User.create({
      fullname,
      email,
      password: hashedPassword,
    });

    // Generate JWT token
    const token = generateToken(user);

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return res.status(201).json({
      success: true,
      message: "User registered successfully!",
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
      token,
    });
  } catch (err) {
    console.error("Signup Error:", err.message);
    res.status(500).json({ success: false, message: "Server error", error: err.message });
  }
};

// 🟢 Login User
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid credentials" });
    }

    // Generate token
    const token = generateToken(user);

    // Set cookie
    res.cookie("token", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        fullname: user.fullname,
        email: user.email,
      },
      token,
    });
  } catch (err) {
    console.error("Login Error:", err.message);
    res.status(500).json({ success: false, message: "Server error", error: err.message });
  }
};

// 🟢 Logout User
const logoutUser = async (req, res) => {
  res.cookie("token", "", { expires: new Date(0) });
  res.status(200).json({ success: true, message: "Logout successful" });
};

module.exports = { signupUser, loginUser, logoutUser };
