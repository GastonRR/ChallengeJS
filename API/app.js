require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodOverride = require('method-override');

var usersRouter = require('./routes/users');
var accountRouter = require('./routes/account');
var operationsRouter = require('./routes/operations');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('api.gaston', operationsRouter);
app.use('/api.users', usersRouter);
app.use('/api.account', accountRouter);
app.use('/api.operations', operationsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.send("no router")
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
