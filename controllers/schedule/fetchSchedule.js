const Schedule = require("../../models/schedule");

const fetchSchedule = async (req, res) => {
  //write code here
  try {
    console.log(userdata);
    const schedules = await Schedule.find();
    res.send(schedules);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = { fetchSchedule };
