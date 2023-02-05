import { travels } from "@prisma/client";
import prisma from "../db.js";

async function createTravel(name: string, userId: number, cityName: string, countryName: string) {

    try {

        await prisma.$transaction(async (tx) => {
    
            const country = await tx.countries.upsert({
                where: {
                    name: countryName
                },
                update: {},
                create: {
                    name: countryName
                }
            });
            
            const city = await tx.cities.upsert({
                where: {
                    name: cityName,
                    countryId: country.id
                }, 
                update: {},
                create: {
                    name: cityName,
                    countryId: country.id
                }
            })
    
            const travel = await tx.travels.create({
                data: {
                    name,
                    userId,
                    cityId: city.id
                }
            })
    
            if (!travel || !city || !country) {
                throw "badRequestError";
            }
    
            return travel;
            })
        } catch (error) {
            console.log(error)
            throw error;
        }
}

async function findTravelById(id: number) {
    try {
        const travel = await prisma.travels.findFirst({
            where: {
                id
            }, include: {
                cities: {
                    include: {
                        countries: true
                    }
                },
                users: true
            }
        });

        if (!travel) {
            throw "notFoundError";
        }

        return travel;
    } catch (error) {
        throw error;
    }
}

async function findTravelsByUserId(userId: number) {
    try {
        const travels = await prisma.travels.findMany({
            where: {
                userId
            }, include: {
                cities: true
            }
        });

        return travels;
    } catch (error) {
        throw "badRequestError";
    }
}

async function findTravelsByCityId(cityId: number) {
    try {
        const travels = await prisma.travels.findMany({
            where: {
                cityId
            }, include: {
                cities: true,
                users: {
                    select: {
                        name: true
                    }
                }
            }
        });

        return travels;
    } catch (error) {
        throw "badRequestError";
    }
}

export { createTravel, findTravelById, findTravelsByUserId, findTravelsByCityId };