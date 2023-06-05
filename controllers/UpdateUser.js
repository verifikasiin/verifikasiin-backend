const { User } = require("../models/UserModel");

const updateUser = async (req, res) => {
  const { userId } = req.params;
  const updates = req.body;

  try {
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Exclude primary key from updates
    const { nik, ...restUpdates } = updates;

    // Update the user properties
    Object.keys(restUpdates).forEach((key) => {
      user[key] = restUpdates[key];
    });

    await user.save();

    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = { updateUser };