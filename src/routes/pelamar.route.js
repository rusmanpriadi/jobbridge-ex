const { Router } = require("express");

const { createPelamar } = require("../controllers/pelamar/createPelamar.controller");
const { getPelamarProfile } = require("../controllers/pelamar/getPelamarProfile.controller");
const { updatePelamar } = require("../controllers/pelamar/updatePelamar.controller");
const { uploadImages } = require("../controllers/pelamar/uploadPhoto");
const { uploadPhoto, productImgResize } = require("../middleware/uploadImg.middleware");

const PelamarRouter = Router();
PelamarRouter.post("/pelamar", createPelamar);
PelamarRouter.get("/pelamar/:userId", getPelamarProfile);
PelamarRouter.put("/pelamar/:id", updatePelamar);
PelamarRouter.post("/pelamar/upload", uploadPhoto.single('photo'), productImgResize, uploadImages)


module.exports = { PelamarRouter };
