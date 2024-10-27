const { prisma } = require("../../config/prisma");

const fs = require("fs");
const path = require("path");

const uploadImages = async (req, res) => {
  const {id_pelamar} = req.body;
  const { id} = req.body;
  console.log(id);
  try {
    if (!id) {
      return res.status(400).json({ message: "ID pelamar tidak ditemukan" });
    }
    const urls = [];
    const files = req.file ? [req.file] : req.files;
    console.log(files);

    // Periksa apakah `files` ada dan merupakan array
    if (!files || !Array.isArray(files)) {
      return res.status(400).json({ message: "Tidak ada file yang diunggah" });
    }

    const uploadDir = path.join(__dirname, "../../../public/images/profile");
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    for (const file of files) {
      const newPath = path.join(uploadDir, file.originalname);
      fs.renameSync(file.path, newPath);
      const imageUrl = file.originalname;
      urls.push(imageUrl);
      // Log URL being saved
      console.log("Saving image URL to database:", imageUrl);
      // Simpan URL gambar ke database menggunakan Prisma
      try {
        const savedImage = await prisma.pelamars.update({
          where: { id: Number(id) },
          data: { photo: imageUrl },
        });
        console.log("Image saved to database:", savedImage); // Log response from database
      } catch (dbError) {
        console.error("Error saving image URL to database:", dbError);
      }
    }

    res.json({ message: "Gambar berhasil diunggah", urls });
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
