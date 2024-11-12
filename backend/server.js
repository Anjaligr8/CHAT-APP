//const express = require("express");
//const dotenv = require("dotenv");
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";

import connectToMongoDB from "./db/connectToMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


//app.get("/", (req,res) =>{
   // res.send("HELLO WORLD!");
//});

app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`Server Running on port ${PORT}`)
});