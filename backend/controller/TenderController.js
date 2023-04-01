const Tender = require("../models/TenderModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Features = require("../utils/Features");
const cloudinary = require("cloudinary");

exports.createTender = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "tenders",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
  req.body.user = req.user.id;

  const tender = await Tender.create(req.body);

  res.status(201).json({
    success: true,
    tender,
  });
});

// Get All Tender (Admin)
exports.getAdminTenders = catchAsyncErrors(async (req, res, next) => {
  const tenders = await Tender.find();

  res.status(200).json({
    success: true,
    tenders,
  });
});

// get All Tenders
exports.getAllTenders = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 8;

  const tendersCount = await Tender.countDocuments();

  const feature = new Features(Tender.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const tenders = await feature.query;
  res.status(200).json({
    success: true,
    tenders,
    tendersCount,
    resultPerPage,
  });
});

// Update Tender ---Admin
exports.updateTender = catchAsyncErrors(async (req, res, next) => {
  let tender = await Tender.findById(req.params.id);
  if (!tender) {
    return next(new ErrorHandler("Tender is not found with this id", 404));
  }

  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Delete image from cloudinary
    for (let i = 0; i < tender.images.length; i++) {
      await cloudinary.v2.uploader.destroy(tender.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "tenders",
      });
      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
    req.body.images = imagesLinks;
  }

  tender = await Tender.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useUnified: false,
  });
  res.status(200).json({
    success: true,
    tender,
  });
});

// delete Tender
exports.deleteTender = catchAsyncErrors(async (req, res, next) => {
  const tender = await Tender.findById(req.params.id);

  if (!tender) {
    return next(new ErrorHandler("Tender is not found with this id", 404));
  }

  // Deleting images from cloudinary
  for (let i = 0; 1 < tender.images.length; i++) {
    const result = await cloudinary.v2.uploader.destroy(
      tender.images[i].public_id
    );
  }

  await tender.remove();

  res.status(200).json({
    success: true,
    message: "Tender deleted succesfully",
  });
});

// single Tender details
exports.getSingleTender = catchAsyncErrors(async (req, res, next) => {
  const tender = await Tender.findById(req.params.id);
  if (!tender) {
    return next(new ErrorHandler("Tender is not found with this id", 404));
  }
  res.status(200).json({
    success: true,
    tender,
  });
});
