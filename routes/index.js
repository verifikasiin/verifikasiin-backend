const express = require("express");
const { Register } = require("../controllers/Register");
const { getUsers } = require("../controllers/getUsers");
const { Login } = require("../controllers/Login");
const { verifyToken } = require("../middleware/VerifyToken");
const { getUserById } = require("../controllers/GetUser");
const { updateUser } = require("../controllers/UpdateUser");

const router = express.Router();

router.get("/api/users", verifyToken, getUsers);
router.post("api/login", Login);
router.post("/api/register", Register);
router.get("/api/users/:userId", getUserById);
router.patch("/api/users/:userId", updateUser);

module.exports = router;