// const Notes = require("../models/NotesModel");
// const ErrorHandler = require("../utils/ErrorHandler.js");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");
// // noteController.js

const notes = [];

exports.getNotes = catchAsyncErrors(async (req, res) => {
  res.json(notes);
});

exports.createNote = catchAsyncErrors(async (req, res) => {
  const newNote = {
    id: Math.random().toString(36).substring(7),
    text: req.body.text,
  };
  notes.push(newNote);
  res.json(newNote);
});

// exports.updateNote = catchAsyncErrors(async (req, res) => {
//   const note = notes.find((note) => note.id === req.params.id);
//   if (!note) {
//     return res.status(404).json({ error: "Note not found" });
//   }
//   note.text = req.body.text;
//   res.json(note);
// });

exports.deleteNote = catchAsyncErrors(async (req, res) => {
  const noteIndex = notes.findIndex((note) => note.id === req.params.id);
  if (noteIndex === -1) {
    return res.status(404).json({ error: "Note not found" });
  }
  notes.splice(noteIndex, 1);
  res.sendStatus(204);
});
