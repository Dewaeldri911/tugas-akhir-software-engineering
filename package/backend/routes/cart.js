const express = require("express");
const Cart = require("../models/Cart");
const auth = require("../middleware/auth");
const router = express.Router();

router.post("/", auth("customer"), async (req, res) => {
  const { productId, quantity } = req.body;

  const item = await Cart.create({
    userId: req.user.id,
    productId,
    quantity
  });

  res.json(item);
});

router.get("/", auth("customer"), async (req, res) => {
  const items = await Cart.findAll({
    where: { userId: req.user.id }
  });

  res.json(items);
});

module.exports = router;
