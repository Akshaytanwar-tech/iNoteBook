var jwt = require("jsonwebtoken");
require("dotenv").config();

const fetchuser = (req, res, next) => {
  try {
    const token = req.header("token");
    
    if (!token) {
      res.status(401).send({ error: error.message });
    }
    const data = jwt.verify(token, process.env.JWT_SECRET);
    userdata = data.userId;
    next();
  } catch (error) {
    res.status(401).send({ error: error.message });
  }
};
module.exports = fetchuser;
