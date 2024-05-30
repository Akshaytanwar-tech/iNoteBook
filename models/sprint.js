const mongoose = require("mongoose");
const { Schema } = mongoose;

const sprintSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  task: {
    type: String,
    required: true,
  },
  Subtasks: {
    type: String,
  },
  timeFrame: {
    type: Number,
    required: true,
  },
});

const Sprint = mongoose.model("Sprint", sprintSchema);
module.exports = Sprint;
