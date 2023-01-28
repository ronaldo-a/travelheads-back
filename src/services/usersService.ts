import { findUsers } from "../repositories/usersRepository.js";

async function searchUsers() {
    try {
        const users = await findUsers();
        return users;
    } catch (error) {
        console.log(error);
    }
}

export { searchUsers };