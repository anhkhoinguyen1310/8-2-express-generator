var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


require('dotenv').config()
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var postsRouter = require ('./routes/posts')
var candidatesRouter = require ('./routes/candidates')

console.log ({env: process.env})

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use ('/posts', postsRouter);
app.use ('/candidates', candidatesRouter);

module.exports = app;
