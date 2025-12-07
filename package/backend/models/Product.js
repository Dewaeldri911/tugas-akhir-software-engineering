const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Product = sequelize.define("Product", {
  name: DataTypes.STRING,
  price: DataTypes.INTEGER,
  stock: DataTypes.INTEGER,
  sellerId: DataTypes.INTEGER
});

module.exports = Product;
