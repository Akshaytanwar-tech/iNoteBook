const Sprint = require("../../models/sprint");
const updateTime = async (req, res) => {
  try {
    const result = await Sprint.findByIdAndUpdate(req.params.id, {
      timeFrame: timeFrame - 1,
    });
    res.send(result);
  } catch (error) {
    res.status(500).send({ err: error.message });
  }
};
module.exports = updateTime;
