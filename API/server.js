var express = require('express');
var morgan = require('morgan');
var app = express();

var path = require('path');
// Middleware
//app.use(express.static(path.join(__dirname,'src','public')));
app.use(morgan('dev'));
app.use(express.json());

//Routes

var server = app.listen(3000, function () {
    console.log('Server corriendo en puerto 3000');
});