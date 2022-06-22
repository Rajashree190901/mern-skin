const express = require("express");
const Product = require("./models/productModel");
const db = require("./db.js");
const app = express();

app.use(express.json());
const productsRoute = require("./routes/productsRoute");
const userRoute = require("./routes/userRoute");

app.use("/api/products/", productsRoute);
app.use("/api/users/", userRoute);
app.get("/", (req, res) => {
  res.send("server is working" + port);
});

const port = process.env.PORT || 8000;
app.listen(port, () => "server running on port");
