/*
  Warnings:

  - You are about to drop the column `DoctorName` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `doctorName` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Comment` DROP COLUMN `DoctorName`,
    ADD COLUMN `doctorName` VARCHAR(255) NOT NULL;
