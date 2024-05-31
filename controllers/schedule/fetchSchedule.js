const Schedule = require("../../models/schedule");

const fetchSchedule = async (req, res) => {
  //write code here
  try {
    const schedules = await Schedule.find({ user: userdata });
    res.send(schedules);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = { fetchSchedule };
