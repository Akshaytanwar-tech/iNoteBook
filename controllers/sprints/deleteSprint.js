const deleteSprint = async (req, res) => {
  //write code here
  try {
    const sprint = await Sprint.findByIdAndDelete(req.params.id);
    res.send(sprint);
  } catch (err) {
    res.status(400).send(err);
  }
};
module.exports = { deleteSprint };
