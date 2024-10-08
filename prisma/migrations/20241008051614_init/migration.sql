/*
  Warnings:

  - The primary key for the `pelamars` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `pelamars` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `pelamars` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `pelamars` table. All the data in the column will be lost.
  - You are about to drop the column `nik` on the `pelamars` table. All the data in the column will be lost.
  - You are about to drop the column `password` on the `pelamars` table. All the data in the column will be lost.
  - You are about to drop the column `refreshToken` on the `pelamars` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `pelamars` table. All the data in the column will be lost.
  - Added the required column `id_pelamar` to the `pelamars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nomor_tlp` to the `pelamars` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `pelamars_email_key` ON `pelamars`;

-- DropIndex
DROP INDEX `pelamars_nik_key` ON `pelamars`;

-- AlterTable
ALTER TABLE `pelamars` DROP PRIMARY KEY,
    DROP COLUMN `email`,
    DROP COLUMN `id`,
    DROP COLUMN `name`,
    DROP COLUMN `nik`,
    DROP COLUMN `password`,
    DROP COLUMN `refreshToken`,
    DROP COLUMN `role`,
    ADD COLUMN `id_pelamar` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `nomor_tlp` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_pelamar`);

-- CreateTable
CREATE TABLE `users` (
    `id_user` INTEGER NOT NULL AUTO_INCREMENT,
    `nik` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `role` VARCHAR(191) NOT NULL DEFAULT 'pelamar',
    `refreshToken` VARCHAR(191) NOT NULL DEFAULT '',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `users_nik_key`(`nik`),
    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id_user`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
