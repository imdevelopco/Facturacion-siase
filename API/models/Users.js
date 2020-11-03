var knex = require('../database');
var User = {};

User.createUser = (datos) => {
      knex("usuarios").insert(datos); 
};

User.getUsers = () =>{
   return knex
     .select("*")
     .from("usuarios");   
}

User.getUsersById = (username) => {
  return knex.select("*").from("usuarios").where({
    usuario : username
  });
};      
/*
User.updateUserbyId  = (datos)=> {
    knex("usuarios").where("usuario", "=", datos.usuario).update({
      pwd: datos.pwd,
      apellidos: datos.apellidos,
      tipo_usuario = datos.tipo_usuario
    });
}
*/
User.deleteUserbyId = (usuario) => {
    knex("usuarios").where("usuario", "=", usuario).del();  
};


module.exports = User;    

