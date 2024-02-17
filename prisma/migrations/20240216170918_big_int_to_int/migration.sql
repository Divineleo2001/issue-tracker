/*
  Warnings:

  - You are about to alter the column `patientId` on the `Issue` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.
  - The primary key for the `Patient` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `Patient` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- DropForeignKey
ALTER TABLE `Issue` DROP FOREIGN KEY `Issue_patientId_fkey`;

-- AlterTable
ALTER TABLE `Issue` MODIFY `patientId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Patient` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
