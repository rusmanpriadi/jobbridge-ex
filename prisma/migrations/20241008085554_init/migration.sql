-- AddForeignKey
ALTER TABLE `pelamars` ADD CONSTRAINT `pelamars_id_pelamar_fkey` FOREIGN KEY (`id_pelamar`) REFERENCES `users`(`id_user`) ON DELETE RESTRICT ON UPDATE CASCADE;
