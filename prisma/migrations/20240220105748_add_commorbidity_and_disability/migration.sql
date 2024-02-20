-- CreateTable
CREATE TABLE `Comorbidities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `comorbityName` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Disabilities` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `disabilityName` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
