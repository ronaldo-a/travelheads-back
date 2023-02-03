import { sessions } from "@prisma/client";
import prisma from "../db.js";

async function createSession({userId, token}: Omit<sessions, "id">) {
    try {
        const session = await prisma.sessions.create({
            data: {
                userId,
                token
            }
        });
        
        if (!session) {
            throw "badRequestError";
        }

    } catch (error) {
        throw error;
    }
}

async function deleteSession(token: string) {
    await prisma.sessions.delete({
        where: {
            token
        }
    });
}

async function findSession(token: string) {
    try {
        const session = await prisma.sessions.findFirst({
            where: {
                token
            }
        })
    
        if (!session) {
            throw "notFoundError"
        }
    
        return session;   
    } catch (error) {
        throw error
    }
}

export { createSession, deleteSession, findSession };