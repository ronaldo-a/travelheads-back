import { features } from "@prisma/client";
import prisma from "../db.js";
import { NewAddressType } from "../schemas/addressSchema.js";

async function createFeature(featureData: Omit<features, "id">, addressData: NewAddressType, travelId: number) {
    try {
        const feature = await prisma.$transaction(async (tx) => {

            const travel = await tx.travels.findFirst({
                where: {
                    id: travelId
                }, select: {
                    cityId: true
                }
            });

            const address = await tx.addresses.create({
                data: {
                    street: addressData.street,
                    number: addressData.number,
                    neighborhood: addressData.neighborhood,
                    cityId: travel.cityId
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

            const travelData = await tx.travelsData.create({
                data: {
                    travelId,
                    featureId: feature.id
                }
            });

            if (!travelData || !feature || !address || !travel) {
                throw "badRequestError";
            }

            return feature;
        })

        return feature;
    } catch (error) {
        console.log(error)
        throw error;
    }
};

async function findFeatures() {
    try {
        const features = await prisma.features.findMany({
            include: {
                addresses: {
                    include: {
                        cities: true
                    }
                }
            }
        });

        if (features.length === 0) {
            throw "notFoundError";
        }

        return features
    } catch (error) {
        throw error;
    }
}

async function findFeaturesByCityId(cityId: number) {
    try {
        const features = await prisma.features.findMany({
            where: {
                addresses: {
                    cityId
                }       
            }, include: {
                addresses: {
                    include: {
                        cities: {
                            include: {
                                countries: true
                            }
                        }
                    }
                }
            }
        });

        if (features.length === 0) {
            throw "notFoundError";
        }

        return features;
    } catch (error) {
        throw error;
    }
}

async function findFeaturesByTravelId(travelId: number) {
    try {
        const features = await prisma.travelsData.findMany({
            where: {
                travelId
            }, include: {
                features: {
                    include: {
                        addresses: true
                    }
                }
            }
        })

        if (features.length === 0) {
            throw "notFoundError";
        }

        return features;
    } catch (error) {
        if (error === "notFoundError") {
            throw "notFoundError";
        }
        
        throw "badRequestError";
    }
}

export { createFeature, findFeatures, findFeaturesByCityId, findFeaturesByTravelId };
