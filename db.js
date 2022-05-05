const mongoose = require("mongoose");
var mongoURL =
  "mongodb+srv://RAJASHREE:1991@cluster0.ul5iv.mongodb.net/monproduct";

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;
//when the connection is successful
db.on("connected", () => {
  console.log("mongodb connection is successfull");
});

db.on("error", () => {
  console.log("Mongo db collection failed");
});

module.exports = mongoose;
