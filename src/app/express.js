const express = require("express");
const userRouter = require("../routes/user.routes");

const expressApp = express();

expressApp.use(express.json());
expressApp.use(express.text());

expressApp.use("/user", userRouter);

module.exports = expressApp