const mongoose = require("mongoose");
const { Schema } = mongoose;

const sprintSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  timeFrame: {
    type: Date,
    required: true,
  },
});

const Sprint = mongoose.model("Schedule", sprintSchema);
module.exports = Sprint;
