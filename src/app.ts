import express from "express";
import cors from "cors";
import { usersRouter } from "./routers/usersRouter.js";
import { authRouter } from "./routers/authRouter.js";
import { cityRouter } from "./routers/cityRouter.js";
import { travelsRouter } from "./routers/travelsRouter.js";

const server = express();

server
    .use(express.json())
    .use(cors())
    .use("/auth", authRouter)
    .use("/users", usersRouter)
    .use("/cities", cityRouter)
    .use("/travels", travelsRouter);

server.listen(4000, () => console.log("magic at 4000...."));
