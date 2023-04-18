// routes/notes.js

const express = require("express");
const router = express.Router();

const {
  getNotes,
  createNote,
  updateNote,
  deleteNote,
} = require("../controller/Notes");

// router.post("/notes", createNote);
// router.put("/notes/:id", updateNote);
// router.delete("/notes/:id", deleteNote);

module.exports = router;
