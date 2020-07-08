var express = require("express");
var router = express.Router();
var User = require("../models/Users");
var cors = require("cors");
var jwt = require("jsonwebtoken");
var bcrypt = require("bcrypt");

router.post("/login", (req, res) => {
  User.getUsers()
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })
    .finally(() => {
      //knex.destroy();
    });
});
