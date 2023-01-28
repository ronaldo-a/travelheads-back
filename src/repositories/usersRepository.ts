import prisma from "../db.js";

async function findUsers() {
    const users = await prisma.users.findMany();
    return users;
}

export { findUsers };