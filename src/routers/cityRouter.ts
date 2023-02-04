import { Router } from "express";
import { getCities, getCity } from "../controllers/citiesController.js";

const cityRouter = Router();

cityRouter
        .get("/:cityId", getCity)
        .get("/", getCities);

export { cityRouter };