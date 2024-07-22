require("dotenv").config();
// const express = require("express");
const expressApp = require("./src/app/express");
const { createServer } = require("http");
const connectToDB = require("./src/database/connection");


(async () => {
    await connectToDB(process.env.MONGODB_URL);  // Espera a que la conexión se complete

    const httpServer = createServer(expressApp);

    httpServer.listen(process.env.PORT, () => console.log(`Servidor a la escucha en puerto... ${process.env.PORT}`));
})();
