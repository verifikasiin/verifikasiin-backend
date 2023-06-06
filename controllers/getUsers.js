const { User } = require("../models/UserModel");

const getUsers = async (req, res) => {
  try {
    const users = await User.findAll({
      attributes:['nik', 'nama']
    });
    res.json(users);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {getUsers};
