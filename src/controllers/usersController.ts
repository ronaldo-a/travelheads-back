import { Request, Response } from "express";
import { insertUser, searchUsers } from "../services/usersService.js";

async function getUsers(req: Request, res: Response) {
    try {
        const users = await searchUsers();
        return res.status(200).send(users)
    } catch (error) {
        console.log(error)
        return res.status(500);
    }
}

async function addUser(req: Request, res: Response) {
    const {newUser} = res.locals;
    
    try {
        const insertedUser = await insertUser(newUser);
        return res.status(201).send(insertedUser);
    } catch (error) {
        console.log(error);
        return res.sendStatus(500);
    }
}

export { getUsers, addUser };