/*
  Warnings:

  - Changed the type of `img` on the `cities` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `name` to the `travels` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cities" DROP COLUMN "img",
ADD COLUMN     "img" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "travels" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "travelsData" ADD COLUMN     "attractionId" INTEGER,
ADD COLUMN     "restaurantId" INTEGER;

-- CreateTable
CREATE TABLE "sessions" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "sessions_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sessions_token_key" ON "sessions"("token");

-- CreateIndex
CREATE UNIQUE INDEX "cities_img_key" ON "cities"("img");

-- AddForeignKey
ALTER TABLE "travelsData" ADD CONSTRAINT "travelsData_fk2" FOREIGN KEY ("restaurantId") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "travelsData" ADD CONSTRAINT "travelsData_fk3" FOREIGN KEY ("attractionId") REFERENCES "attractions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sessions" ADD CONSTRAINT "sessions_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
