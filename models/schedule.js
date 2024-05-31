const mongoose = require("mongoose");
const { Schema } = mongoose;

const scheduleSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  date: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
  },
  starttime: {
    type: String,
  },
  endtime: {
    type: String,
  },
  workDes: {
    type: String,
  },
});

const Schedule = mongoose.model("Schedule", scheduleSchema);
module.exports = Schedule;
