const updateSprint = async (req, res) => {
  //write code here
  try {
    const sprint = await Sprint.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.send(sprint);
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = { updateSprint };
