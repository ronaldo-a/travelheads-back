import { NextFunction, Request, Response } from "express";
import { newUserSchema, loginUserSchema } from "../schemas/usersSchema.js";

function validateNewUser(req: Request, res: Response, next: NextFunction) {
    const newUser = req.body;
    
    const validation = newUserSchema.validate(newUser, {abortEarly: false});
    if (validation.error) {
        const message = validation.error.details.map((e) => e.message);
        return res.status(400).send(message);
    }

    res.locals.newUser = newUser;
    next();
}

function validateLoginInfo(req: Request, res: Response, next: NextFunction) {
    const user = req.body;

    const validation = loginUserSchema.validate(user, {abortEarly: false});
    if (validation.error) {
        const message = validation.error.details.map((e) => e.message);
        return res.status(400).send(message);
    }

    res.locals.user = user;
    next();
}

export { validateNewUser, validateLoginInfo };