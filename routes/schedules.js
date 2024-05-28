const express = require("express");
const { createSchedule } = require("../controllers/schedule/createSchedule");
const { fetchSchedule } = require("../controllers/schedule/fetchSchedule");
const { deleteSchedule } = require("../controllers/schedule/deleteSchedule");
const { updateSchedule } = require("../controllers/schedule/updateSchedule");
const fetchuser = require("../middleware/fetchuser");
const router = express.Router();

// create schedule.
router.post("/createSchedule", createSchedule);
// fetch schedule
router.post("/fetchSchedule", fetchuser, fetchSchedule);
// delete
router.delete("/deleteSchedule", deleteSchedule);
// edit
router.put("/updateSchedule", updateSchedule);

module.exports = router;
