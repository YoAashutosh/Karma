const express = require("express");
const {
  getAllTenders,
  createTender,
  updateTender,
  deleteTender,
  getSingleTender,
  getAdminTenders,
} = require("../controller/TenderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/tenders").get(getAllTenders);

router
  .route("/admin/tenders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminTenders);

router
  .route("/tender/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createTender);

router
  .route("/tender/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateTender)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteTender)
  .get(getSingleTender);

module.exports = router;
