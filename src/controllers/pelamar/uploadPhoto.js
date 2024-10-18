const fs = require("fs");
const path = require("path");

const uploadImages = async (req, res) => {
  try {
    const urls = [];
    const files = req.files;

    // Periksa apakah `files` ada dan merupakan array
    if (!files || !Array.isArray(files)) {
      return res.status(400).json({ message: "Tidak ada file yang diunggah" });
    }

    const uploadDir = path.join(__dirname, "../public/images/profile");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    for (const file of files) {
      const newPath = path.join(uploadDir, file.originalname);
      fs.renameSync(file.path, newPath);
      urls.push(`/images/profile/${file.originalname}`);
    }

    const images = urls.map((url) => {
      return { url };
    });

    res.json(images);
  } catch (error) {
    console.error("Terjadi kesalahan:", error);
    res
      .status(500)
      .json({ message: "Terjadi kesalahan saat mengunggah gambar" });
  }
};


module.exports = {
  uploadImages,
};
