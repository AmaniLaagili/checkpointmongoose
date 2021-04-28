const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");
const constRouter = require("./router/PersonneOne");
require("dotenv/config");
connectDB();
app.use(express.json());

//app.use("/api/personnes", constRouter);

const port = process.env.port;
app.listen(port, () => {
    console.log(`serveur running on port ${port}`);
});
