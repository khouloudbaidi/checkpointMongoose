const express = require("express");
const app = express();
const port = process.env.PORT

const connectDB = require("./ConnectDB");
const PersonRoute = require("./PersonRoute");

app.use(express.json());
connectDB();
app.use("/", PersonRoute);


app.listen(port , error => 
    error ? console.log("can not run server !!!!")
     : console.log(`server is running on port ${port} ... `)
     )