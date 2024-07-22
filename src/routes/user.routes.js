const userRouter = require("express").Router();
const User = require("../database/userSchema");

userRouter.get("/profile", (req, res) => {
    res.end("Respuesta recibida correctamente.");
})

userRouter.post("/register", async (req, res) => {
    const {name, surname, email, password} = req.body;

    const userDataReceived = {
        name,
        surname,
        email,
        password
    }

    const userToSave = new User(userDataReceived);
    await userToSave.save();

    res.status(201).json(userToSave);

});

userRouter.post("/login");

userRouter.patch("/update-userdata");
userRouter.patch("/update-email");
userRouter.patch("/update-password");

userRouter.delete("/unregister");

module.exports = userRouter