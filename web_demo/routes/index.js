var express = require('express');
var router = express.Router();
var figo = require('../../lib/figo');
var connection = new figo.Connection("CDvu-dHFxVQO2UbxeakamKYA", "STdzSnchCSThtjC0Ju28b7CprHDcEbwZFQpTUu0goyYDiVII");
var access_token = '';
var session = new figo.Session(access_token);

router.get('/createUser', function (req, res) {  
  connection.create_user(req.name, req.email, req.password, req.language, null, function(error, recovery_password) {
    if (error) {
      console.error(error);
    } else {
      console.log(recovery_password);
      res.send(recovery_password);
    }
  });
});

router.get('/', function (req, res) {
    connection.credential_login(req.username, req.password, null, null, null, null, function(error, token) {
      if (error) {
        console.error(error);
      } else {
        session.access_token= token.access_token;
        res.send('logged in su');
      }
    });
});


module.exports = router;
