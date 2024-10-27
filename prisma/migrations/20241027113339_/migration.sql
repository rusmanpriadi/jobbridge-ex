-- AlterTable
ALTER TABLE `pelamars` MODIFY `nomor_tlp` VARCHAR(191) NULL,
    MODIFY `jenis_kelamin` VARCHAR(191) NULL,
    MODIFY `jurusan` VARCHAR(191) NULL,
    MODIFY `nilai_rata` INTEGER NULL,
    MODIFY `pendidikan` VARCHAR(191) NULL,
    MODIFY `tempat_lahir` VARCHAR(191) NULL,
    MODIFY `tgl_lahir` DATETIME(3) NULL,
    MODIFY `agama` VARCHAR(191) NULL,
    MODIFY `alamat_lengkap` VARCHAR(191) NULL,
    MODIFY `domisili` VARCHAR(191) NULL;
