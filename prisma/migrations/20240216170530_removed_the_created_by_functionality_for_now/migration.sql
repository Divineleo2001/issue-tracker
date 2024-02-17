/*
  Warnings:

  - You are about to drop the column `createdBy` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `createdDate` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `lastModifiedBy` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `lastModifiedDate` on the `Issue` table. All the data in the column will be lost.
  - You are about to drop the column `createdBy` on the `Patient` table. All the data in the column will be lost.
  - You are about to drop the column `updatedBy` on the `Patient` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `Issue` DROP COLUMN `createdBy`,
    DROP COLUMN `createdDate`,
    DROP COLUMN `lastModifiedBy`,
    DROP COLUMN `lastModifiedDate`;

-- AlterTable
ALTER TABLE `Patient` DROP COLUMN `createdBy`,
    DROP COLUMN `updatedBy`;
