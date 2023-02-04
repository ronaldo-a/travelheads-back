import { findCities, findCity } from "../repositories/citiesRepository.js";

async function searchCity(cityId: number) {
    try {
        const city = await findCity(cityId);
        return city;
    } catch (error) {
        throw error
    }
}

async function searchCities() {
    try {
        const cities = await findCities();
        return cities;
    } catch (error) {
        throw error
    }
}

export { searchCity, searchCities };