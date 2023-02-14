import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { usersRouter } from "./routers/usersRouter.js";
import { authRouter } from "./routers/authRouter.js";
import { cityRouter } from "./routers/cityRouter.js";
import { travelsRouter } from "./routers/travelsRouter.js";
import { featuresRouter } from "./routers/featuresRouter.js";

dotenv.config();
const server = express();

server
    .use(express.json())
    .use(cors())
    .use("/auth", authRouter)
    .use("/users", usersRouter)
    .use("/cities", cityRouter)
    .use("/travels", travelsRouter)
    .use("/features", featuresRouter);

server.listen(process.env.PORT , () => console.log("magic at 4000...."));
