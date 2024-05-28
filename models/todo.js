const mongoose = require("mongoose");
const { Schema } = mongoose;

const TodoSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  IsDone: {
    type: Boolean,
  },
});

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = Todo;
