import { Request, Response } from "express";
import { insertFeature } from "../services/featuresService.js";

async function addFeature(req: Request, res: Response) {
    const { featureData, addressData } = req.body;

    try {
        const feature = await insertFeature(featureData, addressData);
        return res.status(201).send(feature);
    } catch (error) {
        return res.sendStatus(400);
    }
}

export { addFeature };