const Notes = require("../../models/notes");
const fetchNotes = async (req, res) => {
  const notes = await Notes.find({ user: userdata.id });
  res.json(notes);
};
module.exports = fetchNotes;
