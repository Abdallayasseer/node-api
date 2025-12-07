const User = require("../model/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    // Check if user already exists
    const exitedUser = await User.findOne({ email: email });
    if (exitedUser) {
      return res.status(400).json({
        message: "Email already in use",
        status: "error",
        code: 400,
        data: null,
      });
    }
    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    req.body.password = hashedPassword;
    // Create user
    const user = await User.create(req.body);
    // Generate JWT token
    const token = jwt.sign(
      { id: user._id, email: email, role: role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1m",
      }
    );
    req.body.token = token;
    user.token = token;
    await user.save();
    if (!user) {
      return res.status(400).json({
        message: "User registration failed",
        status: "error",
        code: 400,
        data: null,
      });
    }
    res.status(201).json({
      message: "User registered successfully",
      status: "success",
      code: 201,
      data: {
        id: user._id,
        email: user.email,
        role: user.role,
        token: token,
      },
    });
  } catch (error) {
    res.status(400).json({
      message: "User registration failed",
      status: "error",
      code: 400,
      data: error,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        status: "error",
        code: 404,
        data: null,
      });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password",
        status: "error",
        code: 400,
        data: null,
      });
    }
    const token = jwt.sign(
      { email: email, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    user.token = token;
    await user.save();
    res.status(200).json({
      message: "Login successful",
      status: "success",
      code: 200,
      data: {
        id: user._id,
        email: user.email,
        role: user.role,
        token: token,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Login failed",
      status: "error",
      code: 500,
      data: error,
    });
  }
};
const getUsers = async (req, res) => {
  try {
    const queryParams = req.query;
    const page = parseInt(queryParams.page) || 1;
    const limit = parseInt(queryParams.limit) || 10;
    const skip = (page - 1) * limit;
    const users = await User.find({}, { password: 0, __v: 0 })
      .skip(skip)
      .limit(limit);
    if (!users) {
      return res.status(404).json({
        message: "No users found",
        status: "error",
        code: 404,
        data: null,
      });
    }
    res.status(200).json({
      message: "Users retrieved successfully",
      status: "success",
      code: 200,
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to retrieve users",
      status: "error",
      code: 500,
      data: error,
    });
  }
};

const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({
        message: "User not found",
        status: "error",
        code: 404,
        data: null,
      });
    }
    res.status(200).json({
      message: "User updated successfully",
      status: "success",
      code: 200,
      data: {
        id: updatedUser._id,
        email: updatedUser.email,
        role: updatedUser.role,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to update user",
      status: "error",
      code: 500,
      data: error,
    });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({
        message: "User not found",
        status: "error",
        code: 404,
        data: null,
      });
    }
    res.status(200).json({
      message: "User deleted successfully",
      status: "success",
      code: 200,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete user",
      status: "error",
      code: 500,
      data: error,
    });
  }
};

module.exports = {
  getUsers,
  login,
  register,
  updateUserById,
  deleteUserById,
};
