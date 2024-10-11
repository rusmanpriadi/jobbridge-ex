const { prisma } = require("../../config/prisma");

const getPelamarProfile = async (req, res) => {
  const { userId } = req.params; // Assuming the user ID is passed as a route parameter

  try {
    // Fetch the user and related pelamar data
    const userWithPelamar = await prisma.users.findUnique({
      where: {
        id: parseInt(userId), // Convert to integer if necessary
      },
      include: {
        pelamar: true, // Include related pelamar data
      },
    });

    if (!userWithPelamar) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json(userWithPelamar); // Send the combined data
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  getPelamarProfile,
};
