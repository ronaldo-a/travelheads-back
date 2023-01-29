import { NextFunction, Request, Response } from "express";
import { findSession } from "../repositories/authRepository.js";

async function validateSession(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) {
        return res.sendStatus(401);
    }

    let session = {};
    try {
        session = await findSession(token);
    } catch (error) {
        return res.sendStatus(401);
    }

    res.locals.session = session;
    next();
}

export { validateSession };