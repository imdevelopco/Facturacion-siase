var express = require('express');
var router = express.Router();
var User = require('../models/Users');
var cors = require('cors');
var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');

router.get("/Users",(req,res)=>{
    console.log(User.getUsers());
    
    
    res.end('User.getUsers()');
})

module.exports = router;