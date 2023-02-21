const bodyParser = require("body-parser")
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const connectDb = require("./dbConfig/dbconnect");

//routes
const homeRouter = require("./routes/homeRoute.js");

// initialized express app 
const app = express();

app.use(cookieParser());
app.use(bodyParser.json({ extended:true }));
app.use(bodyParser.urlencoded({ extended:true }));

// code to convert client url to server url
const myServerURL = window.location.href;
const myClientURL = myServerURL.replace("5000", "3000");

//cors policy
app.use(cors({origin: myClientURL}));

// all of your routes 
app.use("/",homeRouter);
app.use("/test",homeRouter);


const port = process.env.PORT || 5000;
app.listen(port,console.log(`server running on http://localhost:${port}`));
connectDb();