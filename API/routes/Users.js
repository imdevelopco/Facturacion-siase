var express = require("express");
var router = express.Router();
var User = require("../models/Users");

router.get("/Users", (req, res) => {
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

module.exports = router;
