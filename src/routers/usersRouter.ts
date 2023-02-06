import { Router } from "express";
import { addUser, getUserById, getUsers } from "../controllers/usersController.js";
import { validateSession } from "../middlewares/authMiddleware.js";
import { validateNewUser } from "../middlewares/usersMiddleware.js";

const usersRouter = Router();

usersRouter
        .get("/", getUsers)
        .post("/", validateNewUser, addUser)
        .use(validateSession)
        .get("/id", getUserById);

export { usersRouter };
