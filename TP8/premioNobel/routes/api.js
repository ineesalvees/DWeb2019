var express = require('express')
var router = express.Router()

var Prizes = require('../controllers/prizes')

router.get('/prizes', function(req, res){
    var categoria = req.query.categoria
    var ano = req.query.data

    if(categoria && ano){
        Prizes.listaPremiosCategoriaAno(categoria, ano)
              .then(dados => res.jsonp(dados))
              .catch(erro => res.status(500).jsonp(erro))
    }

    else if(categoria){
        Prizes.listaPremiosCategoria(categoria)
              .then(dados => res.jsonp(dados))
              .catch(erro => res.status(500).jsonp(erro))
    }

    else{
        Prizes.listar()
              .then(dados => res.jsonp(dados))
              .catch(erro => res.status(500).jsonp(erro))
    }
});

router.get('/prizes/:id', function(req, res){
    Prizes.consultar(req.params.id)
          .then(dados => res.jsonp(dados))
          .catch(erro => res.status(500).jsonp(erro))
});

router.get('/categorias', function(req, res){
    Prizes.listaCategorias()
          .then(dados => res.jsonp(dados))
          .catch(erro => res.status(500).jsonp(erro))
});

router.get('/laureados', function(req, res){
    Prizes.listaLaureados()
          .then(dados => res.jsonp(dados))
          .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;