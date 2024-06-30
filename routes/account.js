const express = require("express");
const accountRouter = express.Router();
const USERS_BBDD = require("../bbdd");

accountRouter.use((req, res, next) => {

    console.log(req.ip);
    next();
})

//Obtener datos genéricos de todos los usuarios
accountRouter.get("/", (req, res) => {
    
    const usersData = USERS_BBDD.map(user => ({
        id: user._id,
        name: user.name,
        email: user.email,  
    }))
    res.send(usersData);
})
//Obtener detalles de usuario concreto
accountRouter.get("/:guid", (req, res) => {    
    const userData = USERS_BBDD.find(user => user._id == req.params.guid);

    if (!userData)
        return res.status(404).send("Usuario no encontrado.");

    res.send(userData);
})
//Crear nueva cuenta
accountRouter.post("/", (req, res) => {
    const {guid, name, email} = req.body;

    if (!guid || !name || !email)
        return res.status(400).send("Los datos están incompletos o son incorrectos.")

    const userData = USERS_BBDD.find(user => user._id == req.params.guid);

    if (userData)
        return res.status(409).send("El usuario ya existe.")

    USERS_BBDD.push({_id: guid, name, email});

    res.send("Usuario creado.");
})
//Actualizar cuenta
accountRouter.patch("/:guid", (req, res) => {
    const userData = USERS_BBDD.find(user => user._id == req.params.guid);

    if (!userData)
        return res.status(404).send("Usuario no existe.");
    
    const userIndex = USERS_BBDD.findIndex(user => user._id == req.params.guid);

    const patchedUser = {...userData, ...req.body};
    USERS_BBDD.splice(userIndex, 1, patchedUser);

    res.status(201).send(patchedUser);
})
//Eliminar cuenta
accountRouter.delete("/:guid", (req, res) => {
    const userIndex = USERS_BBDD.findIndex(user => user._id == req.params.guid);

    USERS_BBDD.splice(userIndex, 1);
    console.log(USERS_BBDD);
    res.status(200).send("Usuario eliminado.");
})

module.exports = accountRouter;