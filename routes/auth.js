const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/auth");
var bcrypt = require("bcryptjs");
const { body, validationResult } = require("express-validator");
const fetchuser = require("../middleware/fetchuser");
const jwtSecret = "Akshayjwt123";
let success = true;

// Api to create user in database
router.post(
  "/signup",
  [
    body("email").isEmail().withMessage("Email should be in proper formate"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Password must be 5 character long"),
  ],
  async (req, res) => {
    // Taking username email and password from body
    const { username, email, password } = req.body;

    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        success = false;
        return res.status(400).json({ errors: errors.array() });
      }
      let user = await User.findOne({ email: req.body.email });
      //Making salt and hash of password
      var salt = bcrypt.genSaltSync(10);
      var hashpassword = bcrypt.hashSync(password, salt);
      if (user) {
        success = false;
        return res.status(400).json({ error: "sorry user is already exists" });
      }
      user = await User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashpassword,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      success = true;
      var token = jwt.sign(data, jwtSecret);
      res.json({ success, token });
    } catch (error) {
      return res.status(400).json({ error: "Internal Error" });
    }
  }
);

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    success = false;
    return res.status(400).json({ error: "Wrong Email" });
  }
  const passwordcomp = await bcrypt.compareSync(password, user.password);
  if (!passwordcomp) {
    success = false;
    return res.status(400).json({ error: "Wrong Password" });
  }

  const data = {
    user: {
      id: user.id,
    },
  };
  success = true;
  var token = jwt.sign(data, jwtSecret);
  res.json({ success, token });
});
router.post("/fetchuser", fetchuser, async (req, res) => {
  const user = await User.findById(userdata.id).select("-password");
  res.json(user);
});

module.exports = router;
