const { prisma } = require("../../config/prisma");
const upload = require("../../config/multerConfig");

// Use Multer middleware in your route
const updatePelamar = async (req, res) => {
  
    try {
      const { id } = req.params;
      const {
        nik,
        name,
        email,
        password,
        role,
        jenis_kelamin,
        nomor_tlp,
        tgl_lahir,
        
        ...pelamarData
      } = req.body;

      const formattedDate = new Date(tgl_lahir);
      if (isNaN(formattedDate.getTime())) {
        return res
          .status(400)
          .json({ message: "Invalid date format for tgl_lahir" });
      }

      // If photo is uploaded, add it to pelamarData
      // if (req.file) {
      //   pelamarData.photo = `image/profile/${req.file.filename}`; 
      // } else {
      //   return res.status(400).json({ message: "No file uploaded." });
      // }

      const updatedData = await prisma.$transaction(async (prisma) => {
        const updatedUser = await prisma.users.update({
          where: { id: parseInt(id) },
          data: {
            nik,
            name,
            email,
            password,
            role,
          },
        });

        let updatedPelamar;
        const pelamarExists = await prisma.pelamars.findUnique({
          where: { userId: parseInt(id) },
        });

        if (pelamarExists) {
          updatedPelamar = await prisma.pelamars.update({
            where: { userId: parseInt(id) },
            data: {
              jenis_kelamin,
              nomor_tlp,
              tgl_lahir: formattedDate,
              ...pelamarData,
            },
          });
        } else {
          updatedPelamar = await prisma.pelamars.create({
            data: {
              userId: parseInt(id),
              jenis_kelamin,
              nomor_tlp,
              tgl_lahir: formattedDate,
              
              ...pelamarData,
            },
          });
        }

        return { updatedUser, updatedPelamar };
      });

      res.status(200).json({
        message: "User and Pelamar updated/created successfully!",
        data: updatedData,
      });
    } catch (error) {
      console.error("Error updating or creating user and pelamar:", error);
      res.status(500).json({
        message: "Failed to update or create user and pelamar",
        error: error.message,
      });
    }
};

module.exports = { updatePelamar };
