import { Request, Response } from "express";
import { insertFeature, searchFeaturesByCityId, searchFeaturesByTravelId } from "../services/featuresService.js";

async function addFeature(req: Request, res: Response) {
    const { featureData, addressData, travelId } = req.body;

    try {
        const feature = await insertFeature(featureData, addressData, travelId);
        return res.status(201).send(feature);
    } catch (error) {
        return res.sendStatus(400);
    }
}

async function getFeaturesByCityId(req: Request, res: Response) {
    const cityId = +req.params.cityId;
    
    if (isNaN(cityId)) {
        return res.sendStatus(400);
    }

    try {
        const features = await searchFeaturesByCityId(cityId);
        return res.status(200).send(features);
    } catch (error) {
        if (error === "notFoundError") {
            return res.sendStatus(404);
        }

        return res.status(400).send(error);
    }
}

async function getFeaturesByTravelId(req: Request, res: Response) {
    const travelId = +req.params.travelId;
    
    if (isNaN(travelId)) {
        return res.sendStatus(400);
    }

    try {
        const features = await searchFeaturesByTravelId(travelId);
        return res.status(200).send(features);
    } catch (error) {
        if (error === "notFoundError") {
            return res.sendStatus(404);
        }

        return res.status(400).send(error);
    }
}

export { addFeature, getFeaturesByCityId, getFeaturesByTravelId };