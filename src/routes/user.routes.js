
const userRouter = require("express").Router();

userRouter.get("/profile", (req, res) => {
    res.end("Respuesta recibida correctamente.");
})

module.exports = userRouter