-- AlterTable
ALTER TABLE "travels" ADD COLUMN     "cityId" SERIAL NOT NULL;

-- AddForeignKey
ALTER TABLE "travels" ADD CONSTRAINT "travels_fk1" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
