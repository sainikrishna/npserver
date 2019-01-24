import express from "express";
import db from './db';
import bodyParser from 'body-parser';

import home from "./routes/home.route";
import admin from "./routes/admin.route";

const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb',extended: true }));


app.use("/api/home", home);
app.use("/api/admin", admin);


// Test API
app.get('/', function (req, res) {
    // db.query("CREATE TABLE custome (name VARCHAR(255), address VARCHAR(255))", function (err, result) {
    //     if (err) throw err;
    //     console.log("Database created");
    //   });
      
    // console.log("[Incoming call from external: ]");
    res.send('hello world');
});



module.exports = app;
