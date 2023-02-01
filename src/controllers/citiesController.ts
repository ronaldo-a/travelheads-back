import { Request, Response } from "express";
import { searchCity } from "../services/citiesService.js";

async function getCity(req: Request, res: Response) {
    const {cityId} = req.body;

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

export {getCity};