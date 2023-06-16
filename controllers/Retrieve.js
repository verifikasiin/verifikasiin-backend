const { Storage } = require("@google-cloud/storage");
const { User } = require("../models/UserModel");

const storage = new Storage({
  keyFilename: process.env.FILENAME,
});

const retrievePhoto = async (req, res) => {
  const { userId } = req.params;

  try {
    // Retrieve the user from the database
    const user = await User.findByPk(userId);
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    // Get the public URL of the photo from the user object
    const publicUrl = user.foto_ktp;

    // If the user doesn't have a photo URL, return a 404 error
    if (!publicUrl) {
      return res.status(404).json({
        message: "Photo not found for the user",
      });
    }

    // Redirect the user to the photo URL
    return res.redirect(publicUrl);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = { retrievePhoto };
