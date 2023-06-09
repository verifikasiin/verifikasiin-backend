const express = require("express");
const multer = require("multer");
const { Register } = require("../controllers/Register");
const { getUsers } = require("../controllers/getUsers");
const { Login } = require("../controllers/Login");
const { Logout } = require("../controllers/Logout");
const { RefreshToken } = require("../controllers/RefreshToken");
const { verifyToken } = require("../middleware/VerifyToken");
const { getUserById } = require("../controllers/GetUser");
const { updateUser } = require("../controllers/UpdateUser");
const { uploadPhoto } = require("../controllers/Upload");

const router = express.Router();
const upload = multer();

router.get("/api/users", verifyToken, getUsers);
router.post("/api/login", Login);
router.delete("/api/logout", Logout);
router.post("/api/token", RefreshToken);
router.post("/api/register", Register);
router.get("/api/users/:userId", getUserById);
router.patch("/api/users/:userId", updateUser);
router.post("/api/upload/:userId", upload.single("photo"), uploadPhoto);

module.exports = router;
