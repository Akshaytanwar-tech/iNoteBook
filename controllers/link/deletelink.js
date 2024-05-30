const Link = require("../../models/link");

const deleteLink = async (req, res) => {
  try {
    const link = await Link.findByIdAndDelete(req.params.id);
    res.json({ link: link, msg: "link has been deleted" });
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = deleteLink;
