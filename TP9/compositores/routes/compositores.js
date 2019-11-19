var express = require('express');
var router = express.Router();

var Compositores = require('../controllers/compositores')

/** GET lista de compositores */
router.get('/', function(req, res){
  var ano = req.query.ano
  var periodo = req.query.periodo

  if(ano && periodo){
    Compositores.consultarAnoPeriodo(ano, periodo)
                .then(dados => res.jsonp(dados))
                .catch(erro => res.status(500).jsonp(erro))
  }

  else if(ano){
    Compositores.consultarAno(ano)
                .then(dados => res.jsonp(dados))
                .catch(erro => res.status(500).jsonp(erro))
  }

  else if(periodo){
    Compositores.consultarPeriodo(periodo)
                .then(dados => res.json(dados))
                .catch(erro => res.status(500).jsonp(erro))
  }

  else{
    Compositores.listar()
                .then(dados => res.jsonp(dados))
                .catch(erro => res.status(500).jsonp(erro))
  }
})

/** GET um compositor específico */
router.get('/:idCompositor', function(req, res){
  Compositores.consultar(req.params.idCompositor)
              .then(dados => res.jsonp(dados))
              .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router;
