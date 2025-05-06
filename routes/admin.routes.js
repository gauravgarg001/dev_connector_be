const express = require("express");
const { getAllUsers, deleteUserById, updateById, getUserById } = require("../controller/adminController");
const admin_router = express.Router();

admin_router.get("/users", getAllUsers);
admin_router.get("/user/:id", getUserById);
admin_router.delete("/user/:id", deleteUserById);
admin_router.patch("/user/:id", updateById);

module.exports = admin_router;