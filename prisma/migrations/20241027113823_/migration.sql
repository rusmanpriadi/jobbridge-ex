-- DropForeignKey
ALTER TABLE `pelamars` DROP FOREIGN KEY `pelamars_userId_fkey`;

-- AlterTable
ALTER TABLE `pelamars` MODIFY `userId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `pelamars` ADD CONSTRAINT `pelamars_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
