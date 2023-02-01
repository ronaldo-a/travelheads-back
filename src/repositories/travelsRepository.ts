import { travels } from "@prisma/client";
import prisma from "../db.js";

async function createTravel({name, userId, cityId}: Omit<travels, "id">) {

    try {
        const travel = await prisma.travels.create({
            data: {
                name,
                userId,
                cityId
            }, include: {
                cities: true,
                users: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        })

        return travel
    } catch (error) {
        throw "badRequestError";   
    }
}

async function findTravelById(id: number) {
    try {
        const travel = await prisma.travels.findFirst({
            where: {
                id
            }, include: {
                cities: true,
                users: {
                    select: {
                        id: true,
                        name: true
                    }
                }
            }
        });

        return travel;
    } catch (error) {
        throw "badRequestError"
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
                        id: true,
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