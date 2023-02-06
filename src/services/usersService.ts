import bcrypt from "bcrypt";
import { users } from "@prisma/client";
import { createUser, findUserById, findUsers } from "../repositories/usersRepository.js";

async function searchUsers() {
    try {
        const users = await findUsers();
        return users;
    } catch (error) {
        throw error;
    }
}

async function searchUserById(id: number) {
    try {
        const user = await findUserById(id);
        return user;
    } catch (error) {
        throw error;
    }
}

async function insertUser(user: Omit<users, "id">) {
    const hashedPassword = bcrypt.hashSync(user.password, 10);

    try {
        const newUser = await createUser({...user, password: hashedPassword});
        delete newUser.password;
        const returnNewUser = newUser;
        return returnNewUser;
    } catch (error) {
        throw error;
    }
}

export { searchUsers, insertUser, searchUserById };