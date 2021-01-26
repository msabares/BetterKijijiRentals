var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

// Setup Routes
// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var listingsRouter = require('./routes/listings')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Assign Paths to Routes
// app.use('/', indexRouter);
// app.use('/users', usersRouter);
app.use('/api/listings', listingsRouter)

module.exports = app;
