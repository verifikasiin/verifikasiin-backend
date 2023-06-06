const express = require("express");
const { Register } = require("../controllers/Register");
const { getUsers } = require("../controllers/getUsers");
const { Login } = require("../controllers/Login");
const { verifyToken } = require("../middleware/VerifyToken");

const router = express.Router();

router.get("/api/users", verifyToken, getUsers);
router.post("/api/register", Register);
router.post("api/login", Login);

module.exports = router;
