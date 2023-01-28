import { Request, Response } from "express";
import { searchUsers } from "../services/usersService.js";

async function getUsers(req: Request, res: Response) {
    try {
        const users = await searchUsers();
        return res.status(200).send(users)
    } catch (error) {
        console.log(error)
        return res.status(400)
    }
}

export { getUsers };