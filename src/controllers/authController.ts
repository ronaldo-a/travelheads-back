import { Request, Response } from "express";
import { signIn, signOut } from "../services/authService.js";

async function login(req: Request, res: Response) {
    const {user} = res.locals;

    try {
        const session = await signIn(user);
        return res.status(200).send(session);
    } catch (error) {
        if (error === "notFoundError") {
            return res.sendStatus(404);
        } else if (error === "unauthorized") {
            return res.sendStatus(401);
        } else {
            return res.sendStatus(400);
        }        
    }
}

async function logout(req: Request, res: Response) {
    const {token} = res.locals.session;
    
    try {
        await signOut(token);
        return res.sendStatus(200);
    } catch (error) {
        return res.sendStatus(500);
    }
}

export { login, logout };