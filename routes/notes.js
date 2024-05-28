const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();

const createNotes = require("../controllers/notes/createNotes");
const fetchNotes = require("../controllers/notes/fetchNotes");
const updateNotes = require("../controllers/notes/updateNotes");
const deleteNotes = require("../controllers/notes/deleteNotes");

//route 1
router.post("/createnotes", fetchuser, createNotes);

//route 2
router.get("/fetchallnotes", fetchuser, fetchNotes);

//route 3
router.put("/updatenotes/:id", fetchuser, updateNotes);

//route 4
router.delete("/deletenote/:id", fetchuser, deleteNotes);

module.exports = router;
