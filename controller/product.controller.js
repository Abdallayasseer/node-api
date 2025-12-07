const Product = require("../model/product.model");

const createProduct = async (req, res) => {
  try {
    const data = await Product.create(req.body);
    res.status(201).json({
      message: "Product created successfully",
      status: "success",
      code: 201,
      data: data,
    });
  } catch (err) {
    res.status(400).json({ error: err.message, status: "error", code: 400 });
  }
};

const getProducts = async (req, res) => {
  try {
    const query = req.query;
    const limit = parseInt(query.limit) || 10;
    const page = parseInt(query.page) || 1;
    const skip = (page - 1) * limit;
    const data = await Product.find().skip(skip).limit(limit);
    if (!data) {
      return res.status(404).json({ message: "No products found." , status: "error", code: 404  });
    }
    res.status(200).json({
      message: "Products retrieved successfully",
      status: "success",
      code: 200,
      data: data,
    });
  } catch (err) {
    res.status(400).json({ error: err.message, status: "error", code: 400 });
  }
};
const getProductById = async (req, res) => {
  try {
    const ID = req.params.id;
    const data = await Product.findById(ID);
    if (!data) {
      return res.status(404).json({ message: "Data not found." , status: "error", code: 404  });
    }
    res.status(200).json({
      message: "Product retrieved successfully",
      status: "success",
      code: 200,
      data: data,
    });
  } catch (error) {
    res.status(400).json({ error: error.message, status: "error", code: 400 });
  }
};

const updateProductById = async (req, res) => {
  try {
    const ID = req.params.id;
    const Data = await Product.findByIdAndUpdate(ID, req.body, {
      new: true,
    });
    if (!Data) {
      return res.status(404).json({ message: "Data not found." , status: "error", code: 404  });
    }
    const updatedData = await Product.findById(ID);
    res.status(200).json({
      message: "Data updated successfully",
      status: "success",
      code: 200,
      updatedData: updatedData,
    });
  } catch (error) {
    res.status(400).json({ error: error.message, status: "error", code: 400 });
  }
};

const deleteProductById = async (req, res) => {
  try {
    const ID = req.params.id;
    const deletedData = await Product.findByIdAndDelete(ID);
    if (!deletedData) {
      return res.status(404).json({ message: "Data not found." , status: "error", code: 404  });
    }
    res.status(200).json({
      message: "Data deleted successfully",
      status: "success",
      code: 200,
    });
  } catch (error) {
    res.status(400).json({ error: error.message, status: "error", code: 400 });
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
};
