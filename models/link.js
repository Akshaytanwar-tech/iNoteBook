const mongoose = require("mongoose");
const { Schema } = mongoose;

const LinkSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  title: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
});

const Link = mongoose.model("Link", LinkSchema);
module.exports = Link;
