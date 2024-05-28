const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT;
const connectToMongo = require("./db");
const { cloudnayFun } = require("./cloudinary");
const cors = require("cors");
connectToMongo();
cloudnayFun();
app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
app.use("/api/schedule", require("./routes/schedules"));
app.use("/api/sprint", require("./routes/sprint"));
app.use("/api/todo", require("./routes/todo"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
