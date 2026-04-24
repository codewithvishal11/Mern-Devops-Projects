const express = require('express');
const {getNotes, getNotesById, createNote, updateNote, deleteNote} = require('../controllers/noteController');
const router = express.Router();

router.get("/", getNotes);
router.get("/:id", getNotesById);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

module.exports = router;