const express = require("express");
const { getUsers, Register } = require("../controllers/User");
const { getUserById } = require("../controllers/GetUser");
const { updateUser } = require("../controllers/UpdateUser");

const router = express.Router();

router.get("/api/users", getUsers);
router.post("/api/register", Register);
router.get("/api/users/:userId", getUserById);
router.patch("/api/users/:userId", updateUser);

module.exports = router;