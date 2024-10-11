
const { prisma } = require("../../config/prisma");



// Create a new Pelamar
const createPelamar = async (req, res) => {
  const {
    jenis_kelamin,
    nomor_tlp,
    tempat_lahir,
    tgl_lahir,
    provinsi,
    kabupaten,
    kecamatan,
    kelurahan,
    detail_alamat,
    pendidikan,
    nilai_rata,
    jurusan,
    photo,
    userId,
  } = req.body;

  try {
    const pelamar = await prisma.pelamars.create({
      data: {
        jenis_kelamin,
        nomor_tlp,
        tempat_lahir,
        tgl_lahir: new Date(tgl_lahir),
        provinsi,
        kabupaten,
        kecamatan,
        kelurahan,
        detail_alamat,
        pendidikan,
        nilai_rata,
        jurusan,
        photo,
        userId: userId,
      },
    });
    

    res.status(201).json({
      status: true,
      message: "Pelamar created successfully",
      data: pelamar,
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};

module.exports = { createPelamar };