const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const { signUp } = require("../controllers/auth/signup");
const { signin } = require("../controllers/auth/signin");
const { fetchUser } = require("../controllers/auth/fetchUsers");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

// route 1
router.post("/signup", upload.single("photo"), signUp);
// route 2
router.post("/signin", signin);
//route 3
router.post("/fetchuser", fetchuser, () => {
  console.log(userdata);
});
module.exports = router;
