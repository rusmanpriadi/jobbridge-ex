/*
  Warnings:

  - You are about to drop the column `detail_alamat` on the `pelamars` table. All the data in the column will be lost.
  - You are about to drop the column `kabupaten` on the `pelamars` table. All the data in the column will be lost.
  - You are about to drop the column `kecamatan` on the `pelamars` table. All the data in the column will be lost.
  - You are about to drop the column `kelurahan` on the `pelamars` table. All the data in the column will be lost.
  - You are about to drop the column `provinsi` on the `pelamars` table. All the data in the column will be lost.
  - Added the required column `agama` to the `pelamars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `alamat_lengkap` to the `pelamars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `domisili` to the `pelamars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pelamars` DROP COLUMN `detail_alamat`,
    DROP COLUMN `kabupaten`,
    DROP COLUMN `kecamatan`,
    DROP COLUMN `kelurahan`,
    DROP COLUMN `provinsi`,
    ADD COLUMN `agama` VARCHAR(191) NOT NULL,
    ADD COLUMN `alamat_lengkap` VARCHAR(191) NOT NULL,
    ADD COLUMN `domisili` VARCHAR(191) NOT NULL;
