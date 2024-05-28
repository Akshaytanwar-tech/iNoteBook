const User = require("../../models/auth");
const fetchUser = async (req, res) => {
  const user = await User.findById(userdata.id).select("-password");
  res.json(user);
};

module.exports = { fetchUser };
