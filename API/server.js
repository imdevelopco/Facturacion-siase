var express = require('express');
var morgan = require('morgan');
var app = express();
var path = require('path');
var cors = require('cors');

// Middleware
//app.use(express.static(path.join(__dirname,'src','public')));
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//Routes
var User = require("./routes/Users");
var Login = require("./routes/Login");

app.use('/users',User);

app.use('/login',Login);


 
app.listen(5000, function () {
    console.log('Server corriendo en puerto 5000');
});
