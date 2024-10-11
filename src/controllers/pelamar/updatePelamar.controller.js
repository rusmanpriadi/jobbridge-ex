const { prisma } = require("../../config/prisma");

// Update user and pelamar information
const updatePelamar = async (req, res) => {
  try {
    const { id } = req.params; // Assuming the ID is passed in the route params
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
    // Validate tgl_lahir format (should be a valid ISO string)
    const formattedDate = new Date(tgl_lahir).toISOString();

    // Start a transaction to ensure atomicity
    const updatedData = await prisma.$transaction([
      // Update the `users` table
      prisma.users.update({
        where: { id: parseInt(id) },
        data: {
          nik,
          name,
          email,
          password,
          role,
        },
      }),

      // Update the `pelamars` table
      prisma.pelamars.update({
        where: { userId: parseInt(id) },
        data: {
          jenis_kelamin,
          nomor_tlp,
          tgl_lahir: formattedDate,
          ...pelamarData, // Additional pelamar fields (e.g., tempat_lahir, pendidikan, etc.)
        },
      }),
    ]);

    res.status(200).json({
      message: "User and Pelamar updated successfully!",
      data: updatedData,
    });
  } catch (error) {
    console.error("Error updating user and pelamar:", error);
    res.status(500).json({
      message: "Failed to update user and pelamar",
      error: error.message,
    });
  }
};

module.exports = { updatePelamar };
