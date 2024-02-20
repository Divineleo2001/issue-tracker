/*
  Warnings:

  - You are about to drop the column `pulse` on the `Vitals` table. All the data in the column will be lost.
  - You are about to drop the column `pulseQuality` on the `Vitals` table. All the data in the column will be lost.
  - Added the required column `breathingRate` to the `Vitals` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pulseRate` to the `Vitals` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Vitals` DROP COLUMN `pulse`,
    DROP COLUMN `pulseQuality`,
    ADD COLUMN `breathingRate` INTEGER NOT NULL,
    ADD COLUMN `pulseRate` INTEGER NOT NULL,
    ADD COLUMN `pulseRateQuality` ENUM('REGULAR', 'IRREGULAR', 'ABSENT') NOT NULL DEFAULT 'REGULAR';
