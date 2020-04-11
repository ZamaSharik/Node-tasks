var express = require('express');
var router = express.Router();
var det = require('../helpers/userdetails');


router.get('/', function(req, res, next) {
  res.status(301).header({ Location: '/api/details'}).send({});
});

router.get('/details',function (req, res) {
    const d = det();
    res.send(d);
  });

module.exports = router;