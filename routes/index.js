const express = require("express");
const { getUsers, Register } = require("../controllers/User");

const router = express.Router();

router.get("/api/users", getUsers);
router.post("/api/register", Register)

module.exports = router