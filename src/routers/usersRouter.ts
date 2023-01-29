import { Router } from "express";
import { addUser, getUsers } from "../controllers/usersController.js";
import { validateNewUser } from "../middlewares/usersMiddleware.js";

const usersRouter = Router();

usersRouter
        .get("/users", getUsers)
        .post("/users", validateNewUser, addUser);

export { usersRouter };
