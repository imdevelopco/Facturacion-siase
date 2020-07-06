var knex = require('../database');
var User = {};

User.createUser = (datos) => {
      knex("usuarios").insert(datos); 
};
User.getUsers = () =>{
    knex
      .from("usuarios")
      .select("*")
      .then((rows) => {
        for (row of rows) {
            console.log(
              `${row["id_usuario"]} ${row["nombre"]} ${row["apellidos"]}${row["usuario"]}${row["pwd"]}${row["tipo_usuario"]}`
            );
        }
    }).catch((err) => { console.log( err); throw err })
    .finally(() => {
        knex.destroy();
    });
    
    
}   
/*
User.updateUserbyId  = (datos)=> {
    knex("usuarios").where("usuario", "=", datos.usuario).update({
      pwd: datos.pwd,
      nombre: datos.nombre,
      apellidos: datos.apellidos,
      tipo_usuario = datos.tipo_usuario
    });
}
*/
User.deleteUserbyId = (usuario) => {
    knex("usuarios").where("usuario", "=", usuario).del();  
};


module.exports = User;    

