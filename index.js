const express = require("express");
const dotenv = require("dotenv");
const accountRouter = require("./routes/account");

dotenv.config();

// console.log(USERS_BBDD);

const expressApp = express();

expressApp.use(express.json());
expressApp.use(express.text());

expressApp.use("/account", accountRouter);




expressApp.listen(process.env.PORT, () => console.log(`Servidor a la escucha en puerto ... ${process.env.PORT}`));