var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('help', { title: 'Site Help' });
});

module.exports = router;
