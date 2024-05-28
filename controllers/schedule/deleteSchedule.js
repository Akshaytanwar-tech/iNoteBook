const Schedule = require("../../models/schedule");

const deleteSchedule = async (req, res) => {
  //write code here
  try {
    const schedule = await Schedule.findByIdAndDelete(req.params.id);
    res.send(schedule);
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = { deleteSchedule };
