const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://new:akshay2574@cluster0.euy4ayz.mongodb.net/notetaking?retryWrites=true&w=majority&appName=Cluster0"
  ;

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("connected to mongodb");
  });
};
module.exports = connectToMongo;
