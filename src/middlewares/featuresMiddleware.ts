import { NextFunction, Request, Response } from "express";
import { newAddressSchema } from "../schemas/addressSchema.js";
import { newFeatureSchema } from "../schemas/featureSchema.js";

async function validateNewFeaturingWithAddress(req: Request, res: Response, next: NextFunction) {
    const { session } = res.locals;
    const { featureData, addressData } = req.body;
    
    const featureValidation = newFeatureSchema.validate(featureData, {abortEarly: false});
    if (featureValidation.error) {
        const message = featureValidation.error.details.map((e) => e.message);
        return res.status(400).send(message);
    }

    const addressValidation = newAddressSchema.validate(addressData, {abortEarly: false});
    if (addressValidation.error) {
        const message = addressValidation.error.details.map((e) => e.message);
        return res.status(400).send(message);
    }

    res.locals = { session };
    next();
}

export { validateNewFeaturingWithAddress };