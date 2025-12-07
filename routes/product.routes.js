const express = require("express");
const verifyJWT = require("../middleware/verifyJWT");
const isAllowed = require("../middleware/isAllowed");
const routers = express.Router();

const {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controller/product.controller");

routers.post("/", verifyJWT, isAllowed(["admin"]), createProduct);
routers.get("/", verifyJWT, getProducts);
routers.get("/:id", verifyJWT, getProductById);
routers.patch("/:id", verifyJWT, isAllowed(["admin"]), updateProductById);
routers.delete("/:id", verifyJWT, isAllowed(["admin"]), deleteProductById);

module.exports = routers;
