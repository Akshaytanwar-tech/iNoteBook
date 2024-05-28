var jwt = require("jsonwebtoken");
require("dotenv").config();

const fetchuser = (req, res, next) => {
  try {
    const token = req.header("token");
    console.log(token);
    if (!token) {
      res.status(401).send({ error: "please send a valid token" });
    }
    const data = jwt.verify(token, process.env.JWT_SECRET);
    userdata = data.user;
  } catch (error) {
    res.status(401).send({ error: "please send a valid token" });
  }
  next();
};
module.exports = fetchuser;
