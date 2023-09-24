const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();
const Notes = require("../models/notes");

router.post("/createnotes", fetchuser, async (req, res) => {
  const { title, description, tags } = req.body;

  const note = new Notes({
    title,
    description,
    tags,
    user: userdata.id,
  });
  const savednote = await note.save();

  res.json(savednote);
});

router.get("/fetchallnotes", fetchuser, async (req, res) => {
  const notes = await Notes.find({ user: userdata.id });
  res.json(notes);
});

router.put("/updatenotes/:id", fetchuser, async (req, res) => {
  const { title, description, tags } = req.body;
  newnotes = {};
  if (title) {
    newnotes.title = title;
  }
  if (description) {
    newnotes.description = description;
  }
  if (tags) {
    newnotes.tags = tags;
  }
  let Note = await Notes.findById(req.params.id);
  if (!Note) {
    return res.status(404).send("Not allowed");
  }
  if (Note.user.toString() !== userdata.id) {
    return res.status(404).send("Not allowed");
  }
  note = await Notes.findByIdAndUpdate(req.params.id, { $set: newnotes });
  res.json(newnotes);
});
router.delete("/deletenote/:id", fetchuser, async (req, res) => {
  let Note = await Notes.findById(req.params.id);
  if (!Note) {
    return res.status(404).send("Note not found");
  }
  if (Note.user.toString() !== userdata.id) {
    return res.status(404).send("Note not found");
  }
  note = await Notes.findByIdAndDelete(req.params.id)
  res.json("note has been deleted")
});
module.exports = router;
