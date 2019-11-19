var express = require('express');
var router = express.Router();

var Compositores = require('../controllers/compositores')

/** GET lista de compositores */
router.get('/compositores', function(req, res){
    Compositores.listar()
                .then(dados => res.jsonp(dados))
                .catch(erro => res.status(500).jsonp(erro))
});

/**GET info de um compositor com um determinado ano */
router.get('/compositores/ano', function(req, res){
    Compositores.consultarAno(req.params.ano)
                .then(dados => res.jsonp(dados))
                .catch(erro => res.status(500).jsonp(erro))
})

/**GET info de um compositor com um determinado periodo */
router.get('/compositores/periodo', function(req, res){
    Compositores.consultarPeriodo(req.params.periodo)
                .then(dados => res.jsonp(dados))
                .catch(erro => res.status(500).jsonp(erro))
})

/**GET info de um compositor com um determinado ano e periodo */
router.get('/compositores/anoPeriodo', function(req, res){
    Compositores.consultarAnoPeriodo(req.params.anoPeriodo)
                .then(dados => res.jsonp(dados))
                .catch(erro => res.status(500).jsonp(erro))
})

/** GET informação de um compositor */
router.get('/compositores/:idCompositor', function(req, res){
    Compositores.consultar(req.params.idCompositor)
                .then(dados => res.jsonp(dados))
                .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router;