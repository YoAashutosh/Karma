const mongoose = require("mongoose");

const professionalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    trim: true,
    maxLength: [20, "Name should not exceed than 20 characters"],
  },
  email: {
    type: String,
    required: [true, "Please add your email"],
    maxlength: [40, "Email can not exceed than 40 characters"],
  },
  profession: {
    type: String,
    required: [true, "Please provide your profession"],
  },
  experience: {
    type: Number,
    required: [true, "Please provide your experience"],
  },

  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    //   required: true
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Hire", professionalSchema);
