/*
  Warnings:

  - You are about to drop the column `attractionId` on the `travelsData` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantId` on the `travelsData` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "travelsData" DROP CONSTRAINT "travelsData_fk2";

-- DropForeignKey
ALTER TABLE "travelsData" DROP CONSTRAINT "travelsData_fk3";

-- AlterTable
ALTER TABLE "cities" ALTER COLUMN "img" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "travelsData" DROP COLUMN "attractionId",
DROP COLUMN "restaurantId";
