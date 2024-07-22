const mongoose = require("mongoose");

async function connectToDB(url) {

    console.log("URL", url);
    await mongoose.connect(url);
    console.log("Database connected.");

    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

module.exports = connectToDB