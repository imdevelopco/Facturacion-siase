var express = require("express");
var router = express.Router();
var User = require("../models/Users");
var cors = require("cors");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

process.env.SECRET_KEY = 'SECRET';

router.post("/Login", (req, res) => {
  User.getUsersById(req.body.usuario)
  .then(user => {
    if(user){
      if(bcrypt.compareSync(req.body.pwd,user.pwd)){
        const payload = {
          name: user.nombre,
          admin: user.tipo_usuario
         };
        let token = jwt.sign(payload,process.env.SECRET_KEY,{
          expiresIn: 1440
        })
        res.send(token);
      }else{
        res.status(400).json({error : "No existe ese usuario"})
      }
      
    }
  }).catch((e) => {
    res.status(400).json({error : error})
  })
  
});

module.exports = router;