const Schedule = require("../../models/schedule");
const createSchedule = async (req, res) => {
  //write code here
  try {
    const { date, subject, starttime, endtime, workDes, user } = req.body;
    const schedule = new Schedule({
      date,
      subject,
      starttime,
      endtime,
      workDes,
      user: userdata,
    });
    await schedule.save();
    res.status(201).send(schedule);
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = { createSchedule };
