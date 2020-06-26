var express = require('express');
var morgan = require('morgan');
var app = express();
var knex = require('./database')
var path = require('path');

// Middleware
//app.use(express.static(path.join(__dirname,'src','public')));
app.use(morgan('dev'));
app.use(express.json());

knex.raw("SELECT VERSION()").then(
    (version) => console.log((version[0][0]))
).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });
//Routes

var server = app.listen(3000, function () {
    console.log('Server corriendo en puerto 3000');
});