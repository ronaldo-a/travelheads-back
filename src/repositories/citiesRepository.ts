import prisma from "../db.js";

async function findCity(cityId: number) {

    try {
        const city = await prisma.cities.findFirst({
            where: {
                id: cityId
            }
        })
    
        if (!city) {
            throw "notFoundError";
        }
    
        return city;   
    } catch (error) {
        throw error
    }
}

async function findCities() {

    try {
        const city = await prisma.cities.findMany({
            include: {
                countries: true
            } 
        });
    
        if (city.length === 0) {
            throw "notFoundError";
        }
    
        return city;   
    } catch (error) {
        throw error
    }
}

export { findCity, findCities };