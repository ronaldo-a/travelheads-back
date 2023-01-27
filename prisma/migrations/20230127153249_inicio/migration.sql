-- CreateTable
CREATE TABLE "attractions" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "addressId" INTEGER NOT NULL,
    "img" VARCHAR(255) NOT NULL,
    "price" SERIAL NOT NULL,

    CONSTRAINT "attractions_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cities" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "countryId" INTEGER NOT NULL,
    "img" INTEGER NOT NULL,

    CONSTRAINT "cities_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "countries" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "img" VARCHAR(255) NOT NULL,

    CONSTRAINT "countries_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "travels" (
    "id" SERIAL NOT NULL,
    "userId" SERIAL NOT NULL,

    CONSTRAINT "travels_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    "img" VARCHAR(255) NOT NULL,

    CONSTRAINT "users_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "addresses" (
    "id" SERIAL NOT NULL,
    "street" VARCHAR(255) NOT NULL,
    "number" VARCHAR(255),
    "neighborhood" VARCHAR(255) NOT NULL,
    "cityId" INTEGER NOT NULL,
    "img" VARCHAR(255) NOT NULL,

    CONSTRAINT "addresses_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "hotels" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "addressId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "img" VARCHAR(255) NOT NULL,

    CONSTRAINT "hotels_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "restaurants" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255) NOT NULL,
    "addressId" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "img" VARCHAR(255) NOT NULL,

    CONSTRAINT "restaurants_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "travelsData" (
    "id" SERIAL NOT NULL,
    "travelId" SERIAL NOT NULL,
    "hotelId" INTEGER,
    "restaurantId" INTEGER,
    "attractionId" INTEGER,

    CONSTRAINT "travelsData_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "cities_name_key" ON "cities"("name");

-- CreateIndex
CREATE UNIQUE INDEX "cities_img_key" ON "cities"("img");

-- CreateIndex
CREATE UNIQUE INDEX "countries_name_key" ON "countries"("name");

-- CreateIndex
CREATE UNIQUE INDEX "countries_img_key" ON "countries"("img");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "addresses_img_key" ON "addresses"("img");

-- AddForeignKey
ALTER TABLE "attractions" ADD CONSTRAINT "attractions_fk0" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "cities" ADD CONSTRAINT "cities_fk0" FOREIGN KEY ("countryId") REFERENCES "countries"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "travels" ADD CONSTRAINT "travels_fk0" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "addresses" ADD CONSTRAINT "addresses_fk0" FOREIGN KEY ("cityId") REFERENCES "cities"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "hotels" ADD CONSTRAINT "hotels_fk0" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "restaurants" ADD CONSTRAINT "restaurants_fk0" FOREIGN KEY ("addressId") REFERENCES "addresses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "travelsData" ADD CONSTRAINT "travelsData_fk0" FOREIGN KEY ("travelId") REFERENCES "travels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "travelsData" ADD CONSTRAINT "travelsData_fk1" FOREIGN KEY ("hotelId") REFERENCES "hotels"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "travelsData" ADD CONSTRAINT "travelsData_fk2" FOREIGN KEY ("restaurantId") REFERENCES "restaurants"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "travelsData" ADD CONSTRAINT "travelsData_fk3" FOREIGN KEY ("attractionId") REFERENCES "attractions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
