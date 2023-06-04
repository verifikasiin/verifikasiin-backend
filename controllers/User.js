const { User } = require("../models/UserModel");
const bcrypt = require("bcrypt");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

const Register = async (req, res) => {
  const { nik, password, confPassword } = req.body;
  if (password !== confPassword)
    return res.status(400).json({
      message: "Password dan Confirm Password tidak cocok",
    });
  const hashPassword = await bcrypt.hash(password, 10);
  try {
    await User.create({
      nik: nik,
      password: hashPassword,
    });
    return res.status(200).json({
      message: "Register Berhasil",
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUsers, Register };
