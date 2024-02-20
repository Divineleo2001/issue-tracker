/*
  Warnings:

  - You are about to drop the column `doctorName` on the `Comment` table. All the data in the column will be lost.
  - Added the required column `DoctorName` to the `Comment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Comment` DROP COLUMN `doctorName`,
    ADD COLUMN `DoctorName` VARCHAR(255) NOT NULL;
