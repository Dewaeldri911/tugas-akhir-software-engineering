console.log("APP.JS DIJALANKAN");
require("dotenv").config();
const express = require("express");
const cors = require("cors");

// Import sequelize dengan BENAR
const { sequelize } = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());

// ROUTES
app.use("/auth", require("./routes/auth"));
app.use("/products", require("./routes/product"));
app.use("/cart", require("./routes/cart"));

// CONNECT DB & RUN SERVER
sequelize
  .sync()
  .then(() => {
    console.log("DB CONNECTED");
    app.listen(3000, () => console.log("Server berjalan di port 3000"));
  })
  .catch((err) => console.error("DB ERROR:", err));
