var express = require('express');
var router = express.Router();
var axios = require('axios')
const lhost = require('../config/env').host

/* GET home page. */
router.get('/', function(req, res, next) {
  axios.get(lhost + '/api/ficheiros')
       .then(dados => {res.render('index', {lista: dados.data});})
       .catch(erro => {res.render('error', {error:erro})})
});

/**Download a file */
router.get('/downloads/:fnome', function(req, res){
  res.download(__dirname + '/../public/ficheiros/' + req.params.fnome)
})

module.exports = router;
