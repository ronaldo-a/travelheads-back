import express from "express";
import cors from "cors";
var server = express();
server
    .use(express.json())
    .use(cors())
    .get("/", function (req, res) { return res.send("deu certooo"); });
server.listen(4000, function () { return console.log("magic at 4000"); });
