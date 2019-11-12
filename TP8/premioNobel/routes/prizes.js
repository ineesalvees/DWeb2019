var express = require('express');
var router = express.Router();
var axios = require('axios')

router.get('/', function(req, res, next) {
  var categoria = req.query.categoria
  var ano = req.query.data
  if(categoria && ano){
    axios.get('http://localhost:3012/api/prizes?categoria=' + categoria + '&data=' + ano)
        .then(dados => {res.render('pag-lista-prizes', {lista: dados.data})})
        .catch(erro => {res.render('error', {error:erro})})
  }

  else if(categoria){
    axios.get('http://localhost:3012/api/prizes?categoria=' + categoria)
        .then(dados => {res.render('pag-lista-prizes', {lista: dados.data})})
        .catch(erro => {res.render('error', {error:erro})})
  }

  else{
    axios.get('http://localhost:3012/api/prizes')
        .then(dados => {res.render('lista-prizes', {lista: dados.data})})
        .catch(erro => {res.render('error', {error:erro})})
  }
});

router.get('/categorias', function(req, res){
  axios.get('http://localhost:3012/api/categorias')
      .then(dados => {res.render('pag-categoria', {lista: dados.data})})
      .catch(erro => {res.render('error', {error:erro})})
});

router.get('/laureados', function(req, res){
  axios.get('http://localhost:3012/api/laureados')
      .then(dados => {res.render('pag-laureados', {lista: dados.data})})
      .catch(erro => {res.render('error', {error:erro})})
});

router.get('/:idPrize', function(req, res){
  axios.get('http://localhost:3012/api/prizes/'+req.params.idPrize)
    .then(dados => {res.render('pag-prize',{prize:dados.data })})
    .catch(erro => {res.render('error',{error:erro})})
})

module.exports = router;
