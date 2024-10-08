
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
    id_user,
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
        user: {
          connect: {
            id_user: id_user, // Pastikan id_user berasal dari req.body atau request lainnya
          },
        },
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