const fetchSprint = async (req, res) => {
  //write code here
  try {
    const sprints = await Sprint.find();
    res.send(sprints);
  } catch (err) {
    res.status(500).send(err);
  }
};
module.exports = { fetchSprint };
