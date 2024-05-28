const mongoose = require("mongoose");
const { Schema } = mongoose;

const authSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  photo: {
    type: Buffer,
    required: true,
  },
});

const User = mongoose.model("User", authSchema);
module.exports = User;
