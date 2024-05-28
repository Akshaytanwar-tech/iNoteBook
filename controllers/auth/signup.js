const User = require("../../models/auth");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cloudinary = require("cloudinary").v2;
require("dotenv").config();
const signUp = async (req, res) => {
  try {
    // Extracting user data from request body
    const { username, email, password, mobile } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Upload photo to Cloudinary
    const photoUrl = await cloudinary.uploader.upload(req.file.path, {
      folder: "user-photos/",
    });

    // Creating new user object
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      mobile,
      photo: photoUrl.secure_url,
    });

    // Saving the new user
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET);

    // Sending response with token
    res.status(201).json({ token: token, success: true });
  } catch (error) {
   
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { signUp };
