const createSprint = async (req, res) => {
  // write code here
  try {
    const sprint = new Sprint(req.body);
    await sprint.save();
    res.status(201).send(sprint);
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = { createSprint };
