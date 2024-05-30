const Notes = require("../../models/notes");
const createNotes = async (req, res) => {
  const { title, description, tags } = req.body;
  const note = new Notes({
    title,
    description,
    tags,
    user: userdata,
  });
  const savednote = await note.save();
  res.json(savednote);
};
module.exports = createNotes;
