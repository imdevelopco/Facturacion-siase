var express = require("express");
var router = express.Router();
var User = require("../models/Users");
var cors = require("cors");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

process.env.SECRET_KEY = 'soluciones';

router.post("/", (req, res) => {
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
  User.getUsersById(req.body.usuario)
  .then(user => {
    if(user.length > 0){
      let usuario = user[0];
      if(bcrypt.compareSync(req.body.pwd,usuario.pwd)){
        const payload = {
          name: usuario.nombre,
          user: usuario.usuario,
          admin: usuario.tipo_usuario
         };
        let token = jwt.sign(payload,process.env.SECRET_KEY,{
          expiresIn: "1h"
        })  
        res.send(token);
      }else{
        res.status(400).json({error : "Contraseña Incorrecta"})
      } 
    }else{
      res.status(400).json({ error: "No se encontro el usuario" });
    }
  }).catch((e) => {
    res.status(400).json({error : "Problemas con el server"})
  })
  
});

module.exports = router;