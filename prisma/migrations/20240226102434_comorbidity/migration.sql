/*
  Warnings:

  - You are about to drop the column `comorbityName` on the `comorbidities` table. All the data in the column will be lost.
  - Added the required column `cName` to the `Comorbidities` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comorbidities` DROP COLUMN `comorbityName`,
    ADD COLUMN `cName` VARCHAR(255) NOT NULL;
