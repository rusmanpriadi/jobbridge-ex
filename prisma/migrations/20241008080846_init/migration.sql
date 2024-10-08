/*
  Warnings:

  - Added the required column `detail_alamat` to the `pelamars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jenis_kelamin` to the `pelamars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jurusan` to the `pelamars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kabupaten` to the `pelamars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kecamatan` to the `pelamars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `keluurahan` to the `pelamars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nilai_rata` to the `pelamars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pendidikan` to the `pelamars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `photo` to the `pelamars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `provensi` to the `pelamars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tempat_lahir` to the `pelamars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tgl_lahir` to the `pelamars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pelamars` ADD COLUMN `detail_alamat` VARCHAR(191) NOT NULL,
    ADD COLUMN `jenis_kelamin` VARCHAR(191) NOT NULL,
    ADD COLUMN `jurusan` VARCHAR(191) NOT NULL,
    ADD COLUMN `kabupaten` VARCHAR(191) NOT NULL,
    ADD COLUMN `kecamatan` VARCHAR(191) NOT NULL,
    ADD COLUMN `keluurahan` VARCHAR(191) NOT NULL,
    ADD COLUMN `nilai_rata` INTEGER NOT NULL,
    ADD COLUMN `pendidikan` VARCHAR(191) NOT NULL,
    ADD COLUMN `photo` VARCHAR(191) NOT NULL,
    ADD COLUMN `provensi` VARCHAR(191) NOT NULL,
    ADD COLUMN `tempat_lahir` VARCHAR(191) NOT NULL,
    ADD COLUMN `tgl_lahir` DATETIME(3) NOT NULL;
