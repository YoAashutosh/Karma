const Hire = require("../models/HiringModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Features = require("../utils/Features");

exports.createHire = catchAsyncErrors(async (req, res, next) => {
  req.body.user = req.user.id;

  const hire = await Hire.create(req.body);

  res.status(201).json({
    success: true,
    hire,
  });
});

// Get All Hire (Admin)
exports.getAdminHires = catchAsyncErrors(async (req, res, next) => {
  const hires = await Hire.find();

  res.status(200).json({
    success: true,
    hires,
  });
});

// get All Hires
exports.getAllHires = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 8;

  const hiresCount = await Hire.countDocuments();

  const feature = new Features(Hire.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const hires = await feature.query;
  res.status(200).json({
    success: true,
    hires,
    hiresCount,
    resultPerPage,
  });
});

// Update Hire ---Admin
exports.updateHire = catchAsyncErrors(async (req, res, next) => {
  let hire = await Hire.findById(req.params.id);
  if (!hire) {
    return next(new ErrorHandler("Hire is not found with this id", 404));
  }

  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Delete image from cloudinary
    for (let i = 0; i < hire.images.length; i++) {
      await cloudinary.v2.uploader.destroy(hire.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "hires",
      });
      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
    req.body.images = imagesLinks;
  }

  hire = await Hire.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useUnified: false,
  });
  res.status(200).json({
    success: true,
    hire,
  });
});

// delete Hire
exports.deleteHire = catchAsyncErrors(async (req, res, next) => {
  const hire = await Hire.findById(req.params.id);

  if (!hire) {
    return next(new ErrorHandler("Hire is not found with this id", 404));
  }

  // Deleting images from cloudinary
  for (let i = 0; 1 < hire.images.length; i++) {
    const result = await cloudinary.v2.uploader.destroy(
      hire.images[i].public_id
    );
  }

  await hire.remove();

  res.status(200).json({
    success: true,
    message: "Hire deleted succesfully",
  });
});

// single Hire details
exports.getSingleHire = catchAsyncErrors(async (req, res, next) => {
  const hire = await Hire.findById(req.params.id);
  if (!hire) {
    return next(new ErrorHandler("Hire is not found with this id", 404));
  }
  res.status(200).json({
    success: true,
    hire,
  });
});
