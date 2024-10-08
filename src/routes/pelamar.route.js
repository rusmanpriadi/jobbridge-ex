const { Router } = require("express");

const { createPelamar } = require("../controllers/pelamar/createPelamar.controller");
const { getPelamarProfile } = require("../controllers/pelamar/getPelamarProfile.controller");

const PelamarRouter = Router();

PelamarRouter.post("/pelamar", createPelamar);
PelamarRouter.get("/pelamar/:userId ", getPelamarProfile);


module.exports = { PelamarRouter };
