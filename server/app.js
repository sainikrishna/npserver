// import express from "express";
const express = require("express")
// import dotenv from "dotenv";

// import auth from "./routes/auth.route";
// import exchange from "./routes/exchange.route";
// import wallet from "./routes/wallet.route";
// import token from "./routes/tokens.route";
// import apple from "./routes/apple.route";
// import android from "./routes/android.route";
// import settings from "./routes/settings.route";
// import redirect from "./routes/redirect.route";

// dotenv.config();

const app = express();

// app.use("/api/auth", auth);


// Test API
app.get('/', function (req, res) {
    console.log("[Incoming call from external: ]");
    res.send('hello world');
});



module.exports = app;
