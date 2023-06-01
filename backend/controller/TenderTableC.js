const TenderTable = require("../models/TenderTable.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Features = require("../utils/Features");
const cloudinary = require("cloudinary");

exports.createTenderTable = catchAsyncErrors(async (req, res, next) => {
  // let images = [];

  // if (typeof req.body.images === "string") {
  //   images.push(req.body.images);
  // } else {
  //   images = req.body.images;
  // }

  // const imagesLinks = [];

  // for (let i = 0; i < images.length; i++) {
  //   const result = await cloudinary.v2.uploader.upload(images[i], {
  //     folder: "tenders",
  //   });

  //   imagesLinks.push({
  //     public_id: result.public_id,
  //     url: result.secure_url,
  //   });
  // }

  // req.body.images = imagesLinks;
  // req.body.user = req.user.id;

  const tender = await TenderTable.create(req.body);

  res.status(201).json({
    success: true,
    tender,
  });
});

// Get All TenderTable (Admin)
exports.getAdminTenderTables = catchAsyncErrors(async (req, res, next) => {
  const tendertables = await TenderTable.find();

  res.status(200).json({
    success: true,
    tendertables,
  });
});

// get All TenderTables
exports.getAllTenderTables = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 8;

  const tendersCount = await TenderTable.countDocuments();

  const feature = new Features(TenderTable.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const tenderts = await feature.query;
  res.status(200).json({
    success: true,
    tenderts,
    tendersCount,
    resultPerPage,
  });
});

// Update TenderTable ---Admin
exports.updateTenderTable = catchAsyncErrors(async (req, res, next) => {
  let tender = await TenderTable.findById(req.params.id);
  if (!tender) {
    return next(new ErrorHandler("TenderTable is not found with this id", 404));
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

  tender = await TenderTable.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useUnified: false,
  });
  res.status(200).json({
    success: true,
    tender,
  });
});

// delete TenderTable
exports.deleteTenderTable = catchAsyncErrors(async (req, res, next) => {
  const tender = await TenderTable.findById(req.params.id);

  if (!tender) {
    return next(new ErrorHandler("TenderTable is not found with this id", 404));
  }

  // // Deleting images from cloudinary
  // for (let i = 0; 1 < tender.images.length; i++) {
  //   const result = await cloudinary.v2.uploader.destroy(
  //     tender.images[i].public_id
  //   );
  // }

  await tender.remove();

  res.status(200).json({
    success: true,
    message: "TenderTable deleted succesfully",
  });
});

// single TenderTable details
exports.getSingleTenderTable = catchAsyncErrors(async (req, res, next) => {
  const tender = await TenderTable.findById(req.params.id);
  if (!tender) {
    return next(new ErrorHandler("TenderTable is not found with this id", 404));
  }
  res.status(200).json({
    success: true,
    tender,
  });
});
