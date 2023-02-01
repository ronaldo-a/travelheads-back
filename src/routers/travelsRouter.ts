import { Router } from "express";
import { addTravel, getTravelById, getTravelsByCityId, getTravelsByUserId } from "../controllers/travelsController.js";
import { validateSession } from "../middlewares/authMiddleware.js";

const travelsRouter = Router();

travelsRouter
        .use("/", validateSession)
        .post("/", addTravel)
        .get("/id/:id", getTravelById)
        .get("/user", getTravelsByUserId)
        .get("/city/:cityId", getTravelsByCityId)
        
export { travelsRouter };