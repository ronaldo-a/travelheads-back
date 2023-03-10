import { Router } from "express";
import { getSession, login, logout } from "../controllers/authController.js";
import { validateSession } from "../middlewares/authMiddleware.js";
import { validateLoginInfo } from "../middlewares/usersMiddleware.js";

const authRouter = Router();

authRouter
        .post("/", validateLoginInfo, login)
        .delete("/", validateSession, logout)
        .get("/", getSession)

export { authRouter };