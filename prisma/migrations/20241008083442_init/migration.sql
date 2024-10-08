/*
  Warnings:

  - You are about to drop the column `keluurahan` on the `pelamars` table. All the data in the column will be lost.
  - Added the required column `kelurahan` to the `pelamars` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `pelamars` DROP COLUMN `keluurahan`,
    ADD COLUMN `kelurahan` VARCHAR(191) NOT NULL;
