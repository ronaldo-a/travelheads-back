import { sessions } from "@prisma/client";
import prisma from "../db.js";

async function createSession({userId, token}: Omit<sessions, "id">) {
    return await prisma.sessions.create({
        data: {
            userId,
            token
        }
    });
}

async function deleteSession(token: string) {
    await prisma.sessions.delete({
        where: {
            token
        }
    });
}

async function findSession(token: string) {
    const session = await prisma.sessions.findFirst({
        where: {
            token
        }
    })

    if (!session) {
        throw "notFound"
    }

    return session;
}

export { createSession, deleteSession, findSession };