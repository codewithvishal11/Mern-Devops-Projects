const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      minLength: 3,
      trim: true,
      required: [true, "Please enter your name"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email"],
      unique: true,
      match: [/\S+@\S+\.\S+/, "Please enter a valid email"]
    },
    password: { 
      type: String,
      require: [true, "Please enter a password"],
      minLength: 6,
    },
    book: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Book",
    }],
    note: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Note",
    }],
    contact: Number,
    picture: String,
  },
  {
    timestamps: true
  });

module.exports = mongoose.models.User || mongoose.model("User", userSchema);