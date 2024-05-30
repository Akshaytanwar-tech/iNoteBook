const Sprint = require("../../models/sprint");
const createSprint = async (req, res) => {
  // write code here
  try {
    const { task, Subtasks, timeFrame } = req.body;
    const sprint = new Sprint({
      task,
      Subtasks,
      timeFrame,
      user: userdata,
    });
    await sprint.save();
    res.status(201).send(sprint);
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = { createSprint };
