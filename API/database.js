const connection = require("./connection")

const knex = require('knex')({
    client: 'pg',
    version: '7.2',
    connection: {
      host : connection.host,
      user : connection.user,
      password : connection.password,
      database : connection.database
    }
  });

  module.exports = knex;