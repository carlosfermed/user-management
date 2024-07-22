const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type: String, required: true}, // String is shorthand for {type: String}
    surname: {type: String, required: true},
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
});

const User = mongoose.model("User", userSchema);

// const user1 = new User({name: "jonhy", surname: "five", email: "jonyfive@hotmail.com", password: "1234"});

module.exports = User

