const Notes = require("../../models/notes");
const updateNotes = async (req, res) => {
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
  if (Note.user.toString() !== userdata) {
    return res.status(404).send("Not allowed");
  }
  note = await Notes.findByIdAndUpdate(req.params.id, { $set: newnotes });
  res.json(newnotes);
};
module.exports = updateNotes;
