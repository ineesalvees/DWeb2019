var express = require('express');
var router = express.Router();

//primeiro tem que carregar o controlador
var Obras = require('../controllers/obras')

/* GET: lista de obras */
router.get('/obras', function(req, res) { //isto significa que o pedido foi feito para a rota /api/alunos
    Obras.listar()
          .then(dados => res.jsonp(dados))
          .catch(erro => res.status(500).jsonp(erro))
  });

/* GET: recupera a info de uma obra */
router.get('/obras/:idObra', function(req, res){
    Obras.consultar(req.params.idObra)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/obras/ano', function(req, res){
    Obras.consultarAno(req.params.ano)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/obras/compositorAno', function(req, res){
    Obras.consultarCompositorDuracao(req.params.compositorAno)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

router.get('/obras/periodo', function(req, res){
    Obras.consultarPeriodo(req.params.periodo)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})