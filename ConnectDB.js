const mongoose = require("mongoose");
require('dotenv').config({path : "./.env"})

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false,
        });
        console.log("Data Base Connected");
    } catch (error) {
        console.log({ msg: "Data Base not Connected", error });
    }
};
module.exports = connectDB;