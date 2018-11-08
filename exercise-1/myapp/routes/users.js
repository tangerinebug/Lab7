var express = require('express');
var bodyParser = require('body-parser')

var router = express.Router();

router.use(bodyParser.urlencoded({extended: true}));

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
}); 

router.post('/', function(req, res, next) {
  res.send('Post Received');
  console.log('First name: ' + req.body.firstname);
  console.log('Last name: ' + req.body.lastname);
}); 

module.exports = router;
