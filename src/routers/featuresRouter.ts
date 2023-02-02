import { Router } from "express";
import { addFeature } from "../controllers/featuresController.js";
import { validateSession } from "../middlewares/authMiddleware.js";
import { validateNewFeaturingWithAddress } from "../middlewares/featuresMiddleware.js";

const featuresRouter = Router();

featuresRouter
        //.use("/", validateSession)
        .post("/", validateNewFeaturingWithAddress, addFeature);

export { featuresRouter };