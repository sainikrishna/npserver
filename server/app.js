import express from "express";
import db from './db';

import home from "./routes/home.route";
import admin from "./routes/admin.route";

const app = express();

app.use("/api/home", home);
app.use("/api/admin", admin);


// Test API
app.get('/', function (req, res) {
    db.query("CREATE DATABASE mydb", function (err, result) {
        if (err) throw err;
        console.log("Database created");
      });
      
    console.log("[Incoming call from external: ]");
    res.send('hello world');
});



module.exports = app;
