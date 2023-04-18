const express = require("express");
const {
  getAllTenderTables,
  createTenderTable,
  updateTenderTable,
  deleteTenderTable,
  getSingleTenderTable,
  getAdminTenderTables,
} = require("../controller/TenderTableC");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/tendertables").get(getAllTenderTables);

router
  .route("/admin/tendertables")
  .get(isAuthenticatedUser, getAdminTenderTables);

router
  .route("/tendertable/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createTenderTable);

router
  .route("/tendertable/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateTenderTable)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteTenderTable)
  .get(getSingleTenderTable);

module.exports = router;
