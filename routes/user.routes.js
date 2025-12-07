const express = require("express");
const verifyJWT = require("../middleware/verifyJWT");
const isAllowed = require("../middleware/isAllowed");
const routers = express.Router();

const {
  getUsers,
  login,
  register,
  updateUserById,
  deleteUserById,
} = require("../controller/user.controller");

routers.get("/", verifyJWT, getUsers);
routers.post("/login", login);
routers.post("/register", register);
routers.patch("/:id", verifyJWT, isAllowed(["admin"]), updateUserById);
routers.delete("/:id", verifyJWT, isAllowed(["admin"]), deleteUserById);

module.exports = routers;
