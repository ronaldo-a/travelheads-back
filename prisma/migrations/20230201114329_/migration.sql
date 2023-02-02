/*
  Warnings:

  - You are about to drop the column `img` on the `cities` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "cities_img_key";

-- AlterTable
ALTER TABLE "cities" DROP COLUMN "img";
