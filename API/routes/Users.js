var express = require("express");
var router = express.Router();
var User = require("../models/Users");
var verifiedToken = require("./verifiedToken")

router.get("/", verifiedToken,(req, res) => {
  User.getUsers()
    .then((rows) => {
      res.send(rows);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    })
});

module.exports = router;
