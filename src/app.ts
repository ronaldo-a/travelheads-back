import express from "express";
import cors from "cors";
import prisma from "./db.js";

const server = express();

server
    .use(express.json())
    .use(cors())
    .get("/", async (req, res) => {
        try {
            const user = await prisma.users.findMany();
            res.send(user);
        } catch (error) {
            console.log(error);
        }    
    })

server.listen(4000, () => console.log("magic at 4000...."));