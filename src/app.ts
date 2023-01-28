import express from "express";
import cors from "cors";
import { usersRouter } from "./routers/usersRouter.js";

const server = express();

server
    .use(express.json())
    .use(cors())
    .use(usersRouter)

server.listen(4000, () => console.log("magic at 4000...."));
