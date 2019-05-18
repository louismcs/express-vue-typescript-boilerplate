var express = require('express');
var subdomain = require('express-subdomain');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var apiRouter = require('./server/routes/api').default;

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(subdomain('api', apiRouter));
app.use(express.static(path.join(__dirname, '/server/public/')));

app.get(/.*/, (req, res) /* : void */ =>
    res.sendFile(__dirname + '/server/public/index.html'));

module.exports = app;
