import bcrypt from "bcrypt";
import { v4 as uuidv4 } from 'uuid';
import { users } from "@prisma/client";
import { findUserByEmail } from "../repositories/usersRepository.js";
import { createSession, deleteSession } from "../repositories/authRepository.js";

async function signIn(userData: Omit<users, "name" | "img">) {
    const { email, password } = userData;
    let userId = 0;
    let hashedPassword = "";
    let token = "";

    try {
        const user = await findUserByEmail(email);
        hashedPassword = user.password;
        userId = user.id;
    } catch (error) {
        throw error;
    }
    
    const verifyPassword = bcrypt.compareSync(password, hashedPassword);
    if (!verifyPassword) {
        throw "unauthorized";
    }

    token = uuidv4();
    const session = {userId, token};
    try {
        await createSession(session);
        
        return session;
    } catch (error) {
        return "serverError"
    }
}

async function signOut(token: string) {

    try {
        await deleteSession(token);
        
    } catch (error) {
        throw error
    }
}

export { signIn, signOut };