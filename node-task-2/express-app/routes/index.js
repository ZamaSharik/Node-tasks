var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.setHeader('content-type', 'applicaton/json');
    res.send('index.js');
  })

module.exports = router;