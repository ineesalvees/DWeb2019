var express = require('express');
var router = express.Router();

var Obras = require('../controllers/obras')

/* GET obras listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});*/

/* GET lista de obras */
router.get('/', function(req, res, next) {
  var ano = req.query.ano
  var compositor = req.query.compositor
  var duracao = req.query.duracao
  var periodo = req.query.periodo

  if(compositor && duracao){
    //axios.get('http://localhost:3012/api/obras?compositor' + compositor + '&duracao' + duracao)
    Obras.consultarCompositorDuracao(compositor, duracao)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }

  else if(ano){
    //axios.get('http://localhost:3012/api/obras?ano' + ano)
    Obras.consultarAno(ano)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }

  else if(periodo){
    //axios.get('http://localhost:3012/api/obras?periodo' + periodo)
    Obras.consultarPeriodo(periodo)
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  }

  else{
    Obras.listar()
    .then(dados => res.jsonp(dados))
    .catch(erro => res.status(500).jsonp(erro))
  } 
});

/** GET: uma obra em especifico */

router.get('/:idObra', function(req, res){
  Obras.consultar(req.params.idObra)
  .then(dados => res.jsonp(dados))
  .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router;
