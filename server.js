const express = require("express");
const Product = require("./models/productModel");
const db = require("./db.js");
const app = express();

app.use(express.json());
const productsRoute = require("./routes/productsRoute");
app.get("/", (req, res) => {
  res.send("server is working" + port);
});

app.use("/api/products/", productsRoute);
const port = process.env.PORT || 8000;
app.listen(port, () => "server running on port");
