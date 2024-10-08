/*
  Warnings:

  - You are about to drop the column `provensi` on the `pelamars` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[userId]` on the table `pelamars` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `provinsi` to the `pelamars` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `pelamars` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `pelamars` DROP FOREIGN KEY `pelamars_id_pelamar_fkey`;

-- AlterTable
ALTER TABLE `pelamars` DROP COLUMN `provensi`,
    ADD COLUMN `provinsi` VARCHAR(191) NOT NULL,
    ADD COLUMN `userId` INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `pelamars_userId_key` ON `pelamars`(`userId`);

-- AddForeignKey
ALTER TABLE `pelamars` ADD CONSTRAINT `pelamars_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;
