const mongoose = require("mongoose");

const tenderTableSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter a notice publisher of a tender"],
    trim: true,
    maxLength: [200, "Product name not exceed than 20 characters"],
  },
  description: {
    type: String,
    required: [true, "Please add a description of tender"],
    maxlength: [4000, "Description is can not exceed than 4000 characters"],
  },
  publishedDate: {
    type: Date,
    required: [true, "Please select the published date"],
  },
  submissionDate: {
    type: Date,
    required: [true, "Please select the date of submission"],
  },
  noticeCategory: {
    type: String,
    required: [true, "Please select the category of notice"],
    maxlength: [200, "Description is can not exceed than 200 characters"],
  },
  industry: {
    type: String,
    required: [true, "Please select the industry of the tender"],
    maxlength: [200, "Description is can not exceed than 200 characters"],
  },
  productService: {
    type: String,
    required: [true, "Please select the industry of the tender"],
    maxlength: [200, "Description is can not exceed than 200 characters"],
  },
  newspaper: {
    type: String,
    required: [true, "Please select the newspaper"],
    maxlength: [200, "Description is can not exceed than 200 characters"],
  },
  noOfDays: {
    type: Number,
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

module.exports = mongoose.model("TenderTable", tenderTableSchema);
