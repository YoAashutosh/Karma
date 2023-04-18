const express = require("express");
const {
  getAllHires,
  createHire,
  updateHire,
  deleteHire,
  getSingleHire,
  getAdminHires,
} = require("../controller/HiringController");
const { isAuthenticatedUser } = require("../middleware/auth");
const router = express.Router();

router.route("/hires").get(getAllHires);

router.route("/admin/hires").get(isAuthenticatedUser, getAdminHires);

router.route("/hire/new").post(isAuthenticatedUser, createHire);

router
  .route("/hire/:id")
  .put(isAuthenticatedUser, updateHire)
  .delete(isAuthenticatedUser, deleteHire)
  .get(getSingleHire);

module.exports = router;
