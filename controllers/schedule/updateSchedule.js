const Schedule = require("../../models/schedule");

const updateSchedule = async (req, res) => {
  //write code here
  try {
    const schedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(schedule);
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = { updateSchedule };
