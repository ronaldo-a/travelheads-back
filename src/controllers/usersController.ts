import { Request, Response } from "express";
import { insertUser, searchUserById, searchUsers } from "../services/usersService.js";

async function getUsers(req: Request, res: Response) {
    try {
        const users = await searchUsers();
        return res.status(200).send(users)
    } catch (error) {
        console.log(error)
        return res.status(500);
    }
}

async function getUserById(req: Request, res: Response) {
    const { userId } = res.locals.session;

    try {
        const user = await searchUserById(userId);
        return res.status(200).send(user)
    } catch (error) {
        if (error === "notFoundError") {
            return res.sendStatus(404);
        }
        return res.sendStatus(400);
    }
}

async function addUser(req: Request, res: Response) {
    const {newUser} = res.locals;
    console.log(newUser);

    try {
        const insertedUser = await insertUser(newUser);
        return res.status(201).send(insertedUser);
    } catch (error) {
        return res.sendStatus(400);
    }
}

export { getUsers, addUser, getUserById };