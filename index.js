const express = require("express");
const dotenv = require("dotenv");
const USERS_BBDD = require("./bbdd");

dotenv.config();

// console.log(USERS_BBDD);

const expressApp = express();

expressApp.use(express.json());
expressApp.use(express.text());

//Obtener detalles
expressApp.get("/account/:guid", (req, res) => {
    
    const userData = {
        id: USERS_BBDD[req.params.guid]._id,
        name: USERS_BBDD[req.params.guid].name,
    }
    res.send(userData);
})
//Crear nueva cuenta
expressApp.post("/account", (req, res) => {

})
//Actualizar cuenta
expressApp.patch("/account", (req, res) => {

})
//Eliminar cuenta
expressApp.delete("/account", (req, res) => {

})


expressApp.listen(process.env.PORT, () => console.log(`Servidor a la escucha en puerto ... ${process.env.PORT}`));