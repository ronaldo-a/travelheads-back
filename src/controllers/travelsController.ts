import { Request, Response } from "express";
import { insertTravel, searchTravelById, searchTravelsByCityId, searchTravelsByUserId } from "../services/travelsService.js";

async function addTravel(req: Request, res: Response) {
    const { userId } = res.locals.session
    const { name, cityId } = req.body;
    if (!name || !userId || !cityId) {
        return res.sendStatus(400);
    }
    
    try {
        const newTravel = await insertTravel(name, userId, cityId);
        return res.status(201).send(newTravel);
    } catch (error) {
        if (error === "badRequestError") {
            return res.sendStatus(400)
        }
        
        return res.sendStatus(500);
    }
}

async function getTravelById(req: Request, res: Response) {
    const id = +req.params.id;

    if (!id) {
        return res.sendStatus(400);
    }

    try {
        const travel = await searchTravelById(id);
        return res.status(200).send(travel);
    } catch (error) {
        if (error === "notFoundError") {
            return res.sendStatus(404);
        }

        return res.sendStatus(400);
    }
}

async function getTravelsByUserId(req: Request, res: Response) {
    const { userId } = res.locals.session;

    if (!userId) {
        return res.sendStatus(400);
    }

    try {
        const travels = await searchTravelsByUserId(userId);
        return res.status(200).send(travels);
    } catch (error) {
        if (error === "notFoundError") {
            return res.sendStatus(404);
        }

        return res.sendStatus(400);
    }
}

async function getTravelsByCityId(req: Request, res: Response) {
    const cityId = +req.params.cityId;

    if (!cityId) {
        return res.sendStatus(400);
    }

    try {
        const travels = await searchTravelsByCityId(cityId);
        return res.status(200).send(travels);
    } catch (error) {
        if (error === "notFoundError") {
            return res.sendStatus(404);
        }

        return res.sendStatus(400);
    }
}

export {addTravel, getTravelById, getTravelsByUserId, getTravelsByCityId};