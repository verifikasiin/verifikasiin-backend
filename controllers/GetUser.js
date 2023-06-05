const { User } = require("../models/UserModel");

const getUserById = async (req, res) => {
  const { userId } = req.params;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        message: "User tidak ditemukan",
      });
    }
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = { getUserById };
