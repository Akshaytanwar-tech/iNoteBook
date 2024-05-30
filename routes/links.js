const express = require("express");
const fetchuser = require("../middleware/fetchuser");
const createLink = require("../controllers/link/createlink");
const fetchlink = require("../controllers/link/fetchlink");
const deleteLink = require("../controllers/link/deletelink");
const router = express.Router();

//route 1
router.post("/createlink", fetchuser, createLink);

//route 2
router.get("/fetchalllink", fetchuser, fetchlink);

//route 4
router.delete("/deletelink/:id", deleteLink);

module.exports = router;
