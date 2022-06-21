var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Poop' });
});

router.get('/data', function(req, res, next) {
  res.render('index', { title: 'data' });
});

module.exports = router;
