const express = require("express");
const Product = require("../models/Product");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth("seller"), async (req, res) => {
  const { name, price, stock } = req.body;

  const product = await Product.create({
    name,
    price,
    stock,
    sellerId: req.user.id
  });

  res.json(product);
});

router.get("/", async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
});

module.exports = router;
