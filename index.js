const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ProductRoutes = require("./routes/product.routes");
const UserRoutes = require("./routes/user.routes");
require("dotenv").config();
const app = express();

// Middleware
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/product", ProductRoutes);
app.use("/api/user", UserRoutes);
app.use("/api/auth", UserRoutes);

// Connect to MongoDB
const url = process.env.MONGODB_URL;
mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.PORT, () => {
      console.log(`Server is running on http://localhost:${process.env.PORT}`);
    });
  })
  .catch((err) => console.log(err));
