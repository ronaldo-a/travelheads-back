import { Request, Response } from "express";
import { searchCities, searchCity } from "../services/citiesService.js";

async function getCity(req: Request, res: Response) {
    const cityId = +req.params.cityId;

    try {
        const city = await searchCity(cityId);
        res.status(200).send(city);
    } catch (error) {
        if (error === "notFoundError") {
            return res.sendStatus(404);
        } else {
            return res.sendStatus(500);
        }
    }
}

async function getCities(req: Request, res: Response) {

    try {
        const cities = await searchCities();
        res.status(200).send(cities);
    } catch (error) {
        if (error === "notFoundError") {
            return res.sendStatus(404);
        } else {
            return res.sendStatus(500);
        }
    }
}

export {getCity, getCities};