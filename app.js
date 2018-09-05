var express = require('express');
var logger = require('morgan');
var path = require('path');
var app = express();
// add below for precompile scss
var sass = require('node-sass-middleware');
app.use(sass({
    /* Options */
    src: path.join(__dirname, 'public/sass'),
    dest: path.join(__dirname, 'public/css'),
    debug: true,
    outputStyle: 'compressed',
    prefix:  '/css'  // Where prefix is at <link rel="stylesheets" href="prefix/style.css"/>
}));

app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;
