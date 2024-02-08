-- CreateTable
CREATE TABLE `Patient` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `remarks` TEXT NOT NULL,
    `status` ENUM('JOINED', 'CRITICAL', 'NON_CRITICAL', 'TREATMENT_IN_PROGRESS', 'CLOSED') NOT NULL DEFAULT 'JOINED',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;