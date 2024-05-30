const Link = require("../../models/link");

const fetchlink = async (req, res) => {
  try {
    const link = await Link.find({ user: userdata });
    res.json(link);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = fetchlink;
