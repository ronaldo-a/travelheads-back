import { findCity } from "../repositories/citiesRepository.js";

async function searchCity(cityId: number) {
    try {
        const city = await findCity(cityId);
        return city;
    } catch (error) {
        throw error
    }
}

export { searchCity };