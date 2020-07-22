var knex = require('../database');
var Client = {};

Client.createUser = (datos) => {
      knex("usuarios").insert(datos); 
};

Client.getUsers = () =>{
   return knex
     .select("*")
     .from("usuarios");   
}

Client.getUsersById = (username) => {
  return knex.select("*").from("usuarios").where({
    usuario : username
  });
};      
/*
Client.updateUserbyId  = (datos)=> {
    knex("usuarios").where("usuario", "=", datos.usuario).update({
      pwd: datos.pwd,
      apellidos: datos.apellidos,
      tipo_usuario = datos.tipo_usuario
    });
}
*/
Client.deleteUserbyId = (usuario) => {
    knex("usuarios").where("usuario", "=", usuario).del();  
};


module.exports = User;    

