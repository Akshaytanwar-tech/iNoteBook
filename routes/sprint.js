const express = require("express");
const { createSprint } = require("../controllers/sprints/createSprint");
const { deleteSprint } = require("../controllers/sprints/deleteSprint");
const { fetchSprint } = require("../controllers/sprints/fetchSprints");
const updateTime = require("../controllers/sprints/updatetime");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();

//create
router.post("/createSprint", fetchuser, createSprint);

//delete
router.delete("/deleteSprint/:id", deleteSprint);

//fetch
router.post("/fetchSprint", fetchuser, fetchSprint);

//update the time period
router.put("/Updatetime/:id", updateTime);
module.exports = router;
