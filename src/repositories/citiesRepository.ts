import prisma from "../db.js";

async function findCity(cityId: number) {
    const city = await prisma.cities.findFirst({
        where: {
            id: cityId
        }
    })

    if (!city) {
        throw "notFoundError";
    }

    return city;
}

export { findCity };