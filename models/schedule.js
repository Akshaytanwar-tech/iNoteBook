const mongoose = require("mongoose");
const { Schema } = mongoose;

const scheduleSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  time: {
    type: Date,
  },
  IsDone: {
    type: Boolean,
  },
});

const Schedule = mongoose.model("Schedule", scheduleSchema);
module.exports = Schedule;
