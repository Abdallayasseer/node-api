const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
    },
    price: {
      type: Number,
      required: [true, "Product price is required"],
      min: 0,
      default: 0,
    },
    quantity: {
      type: Number,
      required: [true, "Product quantity is required"],
      min: 0,
      default: 0,
    },
    category: {
      type: String,
      required: [true, "Product category is required"],
    },
    img: {
      type: String,
      require: false,
      default: "default.png",
    },
  },
  { timestamps: true }
);
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;