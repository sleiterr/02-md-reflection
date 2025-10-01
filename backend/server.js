const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .conect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch(() => console.error("Error connecting:", err));

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
});

const Product = mongoose.model("Product", productSchema);

app.get("/products", async (req, res) => {
  const products = new Product.find();
  res.json(products);
});

app.post("/products", async (req, res) => {
  const newProduct = new Product(req, body);
  await newProduct.save();
  res.json(newProduct);
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("The server is running on mongodb+srv");
});
