const mongoose = require("mongoose");

const tenderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a name of a product"],
    trim: true,
    maxLength: [20, "Product name not exceed than 20 characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a description of your product"],
    maxlength: [4000, "Description is can not exceed than 4000 characters"],
  },
  location: {
    type: String,
    required: [true, "Please provide location"],
  },

  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],

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

module.exports = mongoose.model("Tender", tenderSchema);
