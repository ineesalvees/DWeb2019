var express = require('express');
var router = express.Router();
var axios = require('axios')


/* GET home page. lista de entidades*/
router.get('/', function(req, res) {
  axios.get('http://clav-api.dglab.gov.pt/api/entidades?apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
       .then(dados => {
    res.render('index', { lista: dados.data })
  })
  .catch(erro => {
    res.render('error',{error: erro})
  })
});

router.get('/entidades/:id', function(req, res) {

  axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+ req.params.id +'?info=completa&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
    .then(dados => {
      axios.get('http://clav-api.dglab.gov.pt/api/entidades/'+ req.params.id +'/tipologias?info=completa&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
        .then(tipologias => {
          res.render('info-entidade', { lista: dados.data, tips: tipologias.data })
        })
        .catch(erro => {
          res.render('error',{error: erro})
        })
    })
    .catch(erro => {
      res.render('error',{error: erro})
    })
  
});

router.get('/tipologias/:id', function(req, res) {
  axios.get('http://clav-api.dglab.gov.pt/api/tipologias/' + req.params.id + '?info=completa&apikey=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1Nzg4NjAwNTQsImV4cCI6MTU4MTQ1MjA1NH0.HIlH4_Ao6504qaLhhbZ2_OtDzaZaG5FeYy-Yc2d9lwQ')
      .then(dados => {
        res.render('info-tipologia', { tipologia: dados.data });
      })
      .catch(erro =>{
        res.render('error', {error: erro})
      })
})


module.exports = router;
