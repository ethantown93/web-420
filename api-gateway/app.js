/*
============================================
; Title:  app.js
; Author: Ethan Townsend
; Date:   5/5/2019
; Description: web-420
;===========================================
*/

const header = require("../header.js");
console.log(header.display("Ethan", "Townsend", "api-gateway"));

const express = require('express');
const path = require('path');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
mongoose.Promise = require('bluebird');

const index = require('./routes/index');
const apiCatalog = require('./routes/api-catalog');

const app = express();

// establishing connection to MongoDB

mongoose.connect('mongodb+srv://admin:admin@ems-rfwnt.mongodb.net/test?retryWrites=true', {
  promiseLibrary: require('bluebird')
}).then ( () => console.log('Connected to MongoDB')).catch( (err) => console.error(err));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger('dev'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/api', apiCatalog);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
