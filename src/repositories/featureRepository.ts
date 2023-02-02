import { features } from "@prisma/client";
import prisma from "../db.js";
import { NewAddressType } from "../schemas/addressSchema.js";

async function createFeature(featureData: Omit<features, "id">, addressData: NewAddressType) {
    try {
        const feature = await prisma.$transaction(async (tx) => {
            const country = await tx.countries.upsert({
                where: {
                    name: addressData.countryName
                },
                update: {},
                create: {
                    name: addressData.countryName
                }
            });

            const city = await tx.cities.upsert({
                where: {
                    name: addressData.cityName
                },
                update: {},
                create: {
                    name: addressData.cityName,
                    countryId: country.id
                }
            });

            const address = await tx.addresses.create({
                data: {
                    street: addressData.street,
                    number: addressData.number,
                    neighborhood: addressData.neighborhood,
                    cityId: city.id
                }
            });

            const feature = await tx.features.create({
                data: {
                    name: featureData.name,
                    type: featureData.type,
                    price: featureData.price,
                    img: featureData.img,
                    addressId: address.id
                }
            });

            if (!feature || !address || !city || !country) {
                throw "badRequestError";
            }

            return feature;
        })

        return feature;
    } catch (error) {
        throw error;
    }
};

export { createFeature };
