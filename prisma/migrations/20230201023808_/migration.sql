/*
  Warnings:

  - You are about to drop the column `img` on the `addresses` table. All the data in the column will be lost.
  - You are about to drop the column `img` on the `countries` table. All the data in the column will be lost.
  - You are about to drop the column `attractionId` on the `travelsData` table. All the data in the column will be lost.
  - You are about to drop the column `hotelId` on the `travelsData` table. All the data in the column will be lost.
  - You are about to drop the column `restaurantId` on the `travelsData` table. All the data in the column will be lost.
  - You are about to drop the `attractions` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `hotels` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `restaurants` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `featureId` to the `travelsData` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "ftypes" AS ENUM ('hotel', 'restaurant', 'attraction');

-- DropForeignKey
ALTER TABLE "attractions" DROP CONSTRAINT "attractions_fk0";

-- DropForeignKey
ALTER TABLE "hotels" DROP CONSTRAINT "hotels_fk0";

-- DropForeignKey
ALTER TABLE "restaurants" DROP CONSTRAINT "restaurants_fk0";

-- DropForeignKey
ALTER TABLE "travelsData" DROP CONSTRAINT "travelsData_fk1";

-- DropForeignKey
ALTER TABLE "travelsData" DROP CONSTRAINT "travelsData_fk2";

-- DropForeignKey
ALTER TABLE "travelsData" DROP CONSTRAINT "travelsData_fk3";

-- DropIndex
DROP INDEX "addresses_img_key";

-- DropIndex
DROP INDEX "countries_img_key";

-- AlterTable
ALTER TABLE "addresses" DROP COLUMN "img";

-- AlterTable
ALTER TABLE "cities" ALTER COLUMN "img" SET DATA TYPE VARCHAR(255);

-- AlterTable
ALTER TABLE "countries" DROP COLUMN "img";

-- AlterTable
ALTER TABLE "travels" ALTER COLUMN "cityId" DROP DEFAULT;
DROP SEQUENCE "travels_cityId_seq";

-- AlterTable
ALTER TABLE "travelsData" DROP COLUMN "attractionId",
DROP COLUMN "hotelId",
DROP COLUMN "restaurantId",
ADD COLUMN     "featureId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "attractions";

-- DropTable
DROP TABLE "hotels";

-- DropTable
DROP TABLE "restaurants";

-- CreateTable
CREATE TABLE "features" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "type" "ftypes" NOT NULL,
    "addressId" INTEGER NOT NULL,
    "price" INTEGER,
    "img" VARCHAR(255),

    CONSTRAINT "features_pk" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "travelsData" ADD CONSTRAINT "travelsData_fk1" FOREIGN KEY ("featureId") REFERENCES "features"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "features" ADD CONSTRAINT "features_fk0" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
