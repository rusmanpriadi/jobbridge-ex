/*
  Warnings:

  - Made the column `nomor_tlp` on table `pelamars` required. This step will fail if there are existing NULL values in that column.
  - Made the column `jenis_kelamin` on table `pelamars` required. This step will fail if there are existing NULL values in that column.
  - Made the column `jurusan` on table `pelamars` required. This step will fail if there are existing NULL values in that column.
  - Made the column `nilai_rata` on table `pelamars` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pendidikan` on table `pelamars` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tempat_lahir` on table `pelamars` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tgl_lahir` on table `pelamars` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `pelamars` required. This step will fail if there are existing NULL values in that column.
  - Made the column `agama` on table `pelamars` required. This step will fail if there are existing NULL values in that column.
  - Made the column `alamat_lengkap` on table `pelamars` required. This step will fail if there are existing NULL values in that column.
  - Made the column `domisili` on table `pelamars` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `pelamars` DROP FOREIGN KEY `pelamars_userId_fkey`;

-- AlterTable
ALTER TABLE `pelamars` MODIFY `nomor_tlp` VARCHAR(191) NOT NULL,
    MODIFY `jenis_kelamin` VARCHAR(191) NOT NULL,
    MODIFY `jurusan` VARCHAR(191) NOT NULL,
    MODIFY `nilai_rata` INTEGER NOT NULL,
    MODIFY `pendidikan` VARCHAR(191) NOT NULL,
    MODIFY `tempat_lahir` VARCHAR(191) NOT NULL,
    MODIFY `tgl_lahir` DATETIME(3) NOT NULL,
    MODIFY `userId` INTEGER NOT NULL,
    MODIFY `agama` VARCHAR(191) NOT NULL,
    MODIFY `alamat_lengkap` VARCHAR(191) NOT NULL,
    MODIFY `domisili` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `pelamars` ADD CONSTRAINT `pelamars_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
