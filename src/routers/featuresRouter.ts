import { Router } from "express";
import { addFeature, getFeaturesByCityId, getFeaturesByTravelId } from "../controllers/featuresController.js";
import { validateSession } from "../middlewares/authMiddleware.js";
import { validateNewFeaturingWithAddress } from "../middlewares/featuresMiddleware.js";

const featuresRouter = Router();

featuresRouter
        //.use("/", validateSession)
        .post("/", validateNewFeaturingWithAddress, addFeature)
        .get("/city/:cityId", getFeaturesByCityId)
        .get("/travel/:travelId", getFeaturesByTravelId)

export { featuresRouter };