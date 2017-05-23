var express = require('express');
var router = new express.Router();

var filmsRouter = require('./films.js');

router.use('/films', filmsRouter);

router.get('/', function(req, res) {
  res.json({ data: 'Weclome'});
});

router.get('/about', function (req, res){
  res.json({data: 'About us'})
});

module.exports = router;

