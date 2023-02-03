import { users } from "@prisma/client";
import prisma from "../db.js";

async function findUsers() {
    const users = await prisma.users.findMany();
    return users;
}

async function findUserByEmail(email: string) {

    try {
        const user = await prisma.users.findFirst({
            where: {
                email
            }
        });
    
        if (!user) {
            throw "notFoundError";
        }

        return user;
    } catch (error) {
        throw error
    }
}

async function createUser({name, email, password, img}: Omit<users, "id">) {
    const newUser = await prisma.users.create({
        data: {
            name,
            email,
            password,
            img
        }
    })

    return newUser;
}

export { findUsers, findUserByEmail, createUser };