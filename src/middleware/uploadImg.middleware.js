
const multer = require('multer')
const sharp = require('sharp')
const path = require('path')
const fs = require('fs')

const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../public/images/profile")); // Direktori sementara untuk upload
  },
  filename: function (req, file, cb) {
    const uniquesuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniquesuffix + path.extname(file.originalname)
    );
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true)
  } else {
    cb(new Error('Unsupported file format'), false)
  }
}

 const uploadPhoto = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
  limits: { fileSize: 1000000 }
})

 const productImgResize = async (req, res, next) => {
  try {
    if (!req.files) return next()
    if (Array.isArray(req.files)) {
      await Promise.all(
        req.files.map(async (file) => {
          const inputFilePath = file.path
          await sharp(inputFilePath)
            .resize(300, 300)
            .toFormat('jpeg' || 'png' || 'jpg')
            .jpeg({ quality: 90 })
            .png({ quality: 90 })
            .toFile(path.join(__dirname, '../../public/images/profile/', file.filename))
        })
      )
      next()
    }
  } catch (error) {
    console.log(error)
    next(error)
  }
}

module.exports = { uploadPhoto, productImgResize }