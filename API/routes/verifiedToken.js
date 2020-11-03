var express = require("express");
var verifiedToken = express.Router();
var jwt = require("jsonwebtoken");

verifiedToken.use((req, res, next) =>{
    const token = req.headers['access-token'];
 
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {      
        if (err) {
          return res.json({ mensaje: 'Token inválida' });    
        } else {
          req.decoded = decoded;    
          next();
        }
      });
    } else {
      res.send({ 
          mensaje: 'Token no proveída.' 
      });
    }
})



module.exports = verifiedToken;