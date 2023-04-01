const Project = require("../models/ProjectModel.js");
const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const Features = require("../utils/Features");
const cloudinary = require("cloudinary");

exports.createProject = catchAsyncErrors(async (req, res, next) => {
  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  const imagesLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "projects",
    });

    imagesLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });
  }

  req.body.images = imagesLinks;
  req.body.user = req.user.id;

  const project = await Project.create(req.body);

  res.status(201).json({
    success: true,
    project,
  });
});

// Get All Project (Admin)
exports.getAdminProjects = catchAsyncErrors(async (req, res, next) => {
  const projects = await Project.find();

  res.status(200).json({
    success: true,
    projects,
  });
});

// get All Projects
exports.getAllProjects = catchAsyncErrors(async (req, res) => {
  const resultPerPage = 8;

  const projectsCount = await Project.countDocuments();

  const feature = new Features(Project.find(), req.query)
    .search()
    .filter()
    .pagination(resultPerPage);
  const projects = await feature.query;
  res.status(200).json({
    success: true,
    projects,
    projectsCount,
    resultPerPage,
  });
});

// Update Project ---Admin
exports.updateProject = catchAsyncErrors(async (req, res, next) => {
  let project = await Project.findById(req.params.id);
  if (!project) {
    return next(new ErrorHandler("Project is not found with this id", 404));
  }

  let images = [];

  if (typeof req.body.images === "string") {
    images.push(req.body.images);
  } else {
    images = req.body.images;
  }

  if (images !== undefined) {
    // Delete image from cloudinary
    for (let i = 0; i < project.images.length; i++) {
      await cloudinary.v2.uploader.destroy(project.images[i].public_id);
    }

    const imagesLinks = [];

    for (let i = 0; i < images.length; i++) {
      const result = await cloudinary.v2.uploader.upload(images[i], {
        folder: "projects",
      });
      imagesLinks.push({
        public_id: result.public_id,
        url: result.secure_url,
      });
    }
    req.body.images = imagesLinks;
  }

  project = await Project.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useUnified: false,
  });
  res.status(200).json({
    success: true,
    project,
  });
});

// delete Project
exports.deleteProject = catchAsyncErrors(async (req, res, next) => {
  const project = await Project.findById(req.params.id);

  if (!project) {
    return next(new ErrorHandler("Project is not found with this id", 404));
  }

  // Deleting images from cloudinary
  for (let i = 0; 1 < project.images.length; i++) {
    const result = await cloudinary.v2.uploader.destroy(
      project.images[i].public_id
    );
  }

  await project.remove();

  res.status(200).json({
    success: true,
    message: "Project deleted succesfully",
  });
});

// single Project details
exports.getSingleProject = catchAsyncErrors(async (req, res, next) => {
  const project = await Project.findById(req.params.id);
  if (!project) {
    return next(new ErrorHandler("Project is not found with this id", 404));
  }
  res.status(200).json({
    success: true,
    project,
  });
});
