import { Router } from "express";
import { getCity } from "../controllers/citiesController.js";

const cityRouter = Router();

cityRouter
        .get("/", getCity);

export { cityRouter };