/*
  Warnings:

  - The primary key for the `Issue` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `title` on the `Issue` table. All the data in the column will be lost.
  - The primary key for the `Patient` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `email` on the `Patient` table. All the data in the column will be lost.
  - Added the required column `createdBy` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdDate` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `issue` to the `Issue` table without a default value. This is not possible if the table is not empty.
  - Added the required column `createdBy` to the `Patient` table without a default value. This is not possible if the table is not empty.
  - Added the required column `gender` to the `Patient` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `Issue` DROP FOREIGN KEY `Issue_patientId_fkey`;

-- AlterTable
ALTER TABLE `Issue` DROP PRIMARY KEY,
    DROP COLUMN `title`,
    ADD COLUMN `createdBy` VARCHAR(50) NOT NULL,
    ADD COLUMN `createdDate` DATETIME(6) NOT NULL,
    ADD COLUMN `issue` VARCHAR(255) NOT NULL,
    ADD COLUMN `lastModifiedBy` VARCHAR(50) NULL,
    ADD COLUMN `lastModifiedDate` DATETIME(6) NULL,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `patientId` BIGINT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Patient` DROP PRIMARY KEY,
    DROP COLUMN `email`,
    ADD COLUMN `createdBy` VARCHAR(50) NOT NULL,
    ADD COLUMN `gender` VARCHAR(255) NOT NULL,
    ADD COLUMN `updatedBy` VARCHAR(50) NULL,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `remarks` TEXT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- RenameIndex
ALTER TABLE `Issue` RENAME INDEX `Issue_patientId_fkey` TO `Issue_patientId_idx`;
