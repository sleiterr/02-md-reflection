const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting:", err));

const productSchema = new mongoose.Schema({
  products: [
    {
      id: Number,
      name: String,
      price: Number,
      description: String,
      category: String,
    },
  ],
});

app.get("/", (req, res) => {
  res.send("Hello, server is working!");
});

const Product = mongoose.model("Product", productSchema);

app.get("/products", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post("/products/:id", async (req, res) => {
  try {
    const updateDoc = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $push: { products: req.body },
      },
      { new: true } // retirn new product
    );
    if (!updateDoc) return res.status(404).json({ message: "Not Found" });
    res.json(updateDoc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/products", async (req, res) => {
  try {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.json(newProduct);
  } catch {
    res.status(500).json({ message: err.message });
  }
});

app.patch("/product/:docid/:productId", async (req, res) => {
  try {
    const updateDoc = await Product.findOneAndUpdate(
      { _id: req.params.docid, "products.id": parseInt(req.params.productId) },
      { $set: { "products.$.category": req.body.category } },
      { new: true }
    );
    if (!updateDoc) return res.status(404).json({ message: "Not Found" });

    res.json(updateDoc);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});
