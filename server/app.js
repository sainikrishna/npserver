import express from "express";
import db from './db';
import bodyParser from 'body-parser';
import APIError from './helpers/APIError';
import httpStatus from 'http-status';
import expressValidation from 'express-validation';

import home from "./routes/home.route";
import admin from "./routes/admin.route";

const app = express();

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ limit: '50mb',extended: true }));


app.use("/api/home", home);
app.use("/api/admin", admin);


// Test API
app.get('/', function (req, res) {
    res.send('hello world');
});


// if error is not an instanceOf APIError, convert it.
app.use((err, req, res, next) => {
    if (err instanceof expressValidation.ValidationError) {
      // validation error contains errors which is an array of error each containing message[]
      const unifiedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ');
      const error = new APIError(unifiedErrorMessage, err.status, true);
      return next(error);
    } else if (!(err instanceof APIError)) {
      const apiError = new APIError(err.message, err.status, err.isPublic);
      return next(apiError);
    }
    return next(err);
  });
  
// catch 404 and forward to error handler
// app.use((req, res, next) => {
//     const err = new APIError('API not found', httpStatus.NOT_FOUND);
//     return next(err);
//   });
  

module.exports = app;
