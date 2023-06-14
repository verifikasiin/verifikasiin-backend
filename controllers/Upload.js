const { Storage } = require("@google-cloud/storage");
const { User } = require("../models/UserModel");

const storage = new Storage({
  keyFilename: process.env.FILENAME,
});

const uploadPhoto = async (req, res) => {
  const file = req.file;

  if (!file) {
    return res.status(400).json({
      message: "No file uploaded",
    });
  }

  try {
    const bucketName = "foto_ktp-1"; // Replace with your actual bucket name
    const folderName = "file_ktp"; // Replace with your desired folder name
    const fileName = `${folderName}/${file.originalname}`;

    const bucket = storage.bucket(bucketName);
    const fileUpload = bucket.file(fileName);

    const stream = fileUpload.createWriteStream({
      metadata: {
        contentType: file.mimetype,
      },
    });

    stream.on("error", (error) => {
      console.error(error);
      res.status(500).json({
        message: "Upload failed",
      });
    });

    stream.on("finish", async () => {
      const publicUrl = `https://storage.googleapis.com/${bucketName}/${fileName}`;

      // Update the user's foto_ktp attribute with the public URL
      const { userId } = req.params;
      try {
        const user = await User.findByPk(userId);
        if (!user) {
          return res.status(404).json({
            message: "User not found",
          });
        }
        user.foto_ktp = publicUrl;
        await user.save();

        res.json({
          message: "Upload successful",
          foto_ktp: publicUrl,
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          message: "Internal server error",
        });
      }
    });

    stream.end(file.buffer);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

module.exports = { uploadPhoto };
