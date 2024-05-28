const Schedule = require("../../models/schedule");
const createSchedule = async (req, res) => {
  //write code here
  try {
    const schedule = new Schedule(req.body);
    await schedule.save();
    res.status(201).send(schedule);
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = { createSchedule };
