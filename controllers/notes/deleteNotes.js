const Notes = require("../../models/notes");
const deleteNotes = async (req, res) => {
  let Note = await Notes.findById(req.params.id);
  if (!Note) {
    return res.status(404).send("Note not found");
  }
  if (Note.user.toString() !== userdata.id) {
    return res.status(404).send("Note not found");
  }
  note = await Notes.findByIdAndDelete(req.params.id);
  res.send("note has been deleted");
};

module.exports = deleteNotes;
