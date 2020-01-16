var express = require('express');
var router = express.Router();
var Obra = require('../controllers/obras')

/* GET home page. */
router.get('/obras', function(req, res) {
  var compositor = req.query.compositor
  var instrumento = req.query.instrumento
  if(compositor){
    Obra.obrasCompositor(compositor)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  }
  else if(instrumento){
    Obra.obrasPartituras(instrumento)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  }
  else{
    Obra.listAll()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  }
});

router.get('/obrasQuant', function(req, res){
  Obra.obras()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
})

router.get('/obras/:id', function(req, res) {
  Obra.consultar(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
});

router.get('/tipos', function(req, res, next) {
  Obra.listTypes()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
});

module.exports = router;
