const express = require("express");
const { createSprint } = require("../controllers/sprints/createSprint");
const { updateSprint } = require("../controllers/sprints/updateSprint");
const { deleteSprint } = require("../controllers/sprints/deleteSprint");
const { fetchSprint } = require("../controllers/sprints/fetchSprints");
const router = express.Router();

//create
router.post("/createSprint", createSprint);
//update
router.put("/updateSprint", updateSprint);
//delete
router.delete("/deleteSprint", deleteSprint);
//fetch
router.put("fetchSprint", fetchSprint);
module.exports = router;
