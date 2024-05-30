const Link = require("../../models/link");
const createLink = async (req, res) => {
  const { title, link } = req.body;
  const newLink = new Link({
    title,
    link,
    user: userdata,
  });
  const savedLink = await newLink.save();
  res.json({ link: savedLink, msg: "link has been created" });
};
module.exports = createLink;
