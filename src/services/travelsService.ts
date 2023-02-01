import { createTravel, findTravelById, findTravelsByCityId, findTravelsByUserId } from "../repositories/travelsRepository.js";

async function insertTravel(name: string, userId: number, cityId: number) {

    try {
        const newTravel = await createTravel({name, userId, cityId});
        return newTravel;
    } catch (error) {
        throw error;
    }
}

async function searchTravelById(id: number) {

    try {
        const travel = await findTravelById(id);
        
        if (!travel) {
            throw "notFoundError"
        }

        return travel;
    } catch(error) {
        throw error
    }
}

async function searchTravelsByUserId(userId: number) {

    try {
        const travels = await findTravelsByUserId(userId);
        
        if (travels.length === 0) {
            throw "notFoundError"
        }

        return travels;
    } catch(error) {
        throw error
    }
}

async function searchTravelsByCityId(cityId: number) {

    try {
        const travels = await findTravelsByCityId(cityId);
        
        if (travels.length === 0) {
            throw "notFoundError"
        }

        return travels;
    } catch(error) {
        throw error
    }
}

export { insertTravel, searchTravelById, searchTravelsByUserId, searchTravelsByCityId };