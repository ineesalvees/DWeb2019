var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')
var nanoid = require('nanoid')

var myBD = __dirname + "/../cancoes.json"
console.log(myBD)

/* GET home page. */
router.get('/', function(req, res, next) {
  jsonfile.readFile(myBD, (erro, cancoes) => {
    if(!erro){
      res.render('index', {lista: cancoes})
    }
    else{
      res.render('error', {error: erro})
    }
  })
})

/* Get pagina cancao individual */
router.get('/cancao:id',function(req,res,next){
  var id = req.params.id
  jsonfile.readFile(myBD, (erro, cancoes) => {
    if(!erro){
      var index = cancoes.findIndex(a => a.id==id )
      if(index > -1){
       var musica = cancoes[index] 
       res.render('cancao',{c : musica})
       console.log('Musica encontrada')
        
       }
       else
       console.log('Música não encontrada')     
    }
    else
    console.log('Erro a ler a base de dados')
  })
})

/* Get pagina cancao individual, com campos editaveis */
router.get('/update:id', function(req, res, next) {
  var id = req.params.id
  console.log(id)
  jsonfile.readFile(myBD, (erro, cancoes) => {
    if(!erro){
      var index = cancoes.findIndex(a => a.id==id )
      if(index > -1){
       var musica = cancoes[index] 
       res.render('update',{c : musica})
        
       }
       else
       console.log('Musica nao encontrada')     
    }
    else
    console.log('Erro a ler a base de dados')
  })
})


router.post('/', function(req, res) {
  jsonfile.readFile(myBD, (erro, cancoes)=>{
    if(!erro){
      req.body.id = nanoid()
      cancoes.push(req.body)
      jsonfile.writeFile(myBD, cancoes, erro => {
        if(erro) console.log(erro)
        else console.log('Registo gravado com sucesso.')
      })
    }
  })
  res.redirect('/')
})

/* Atualizar campos de musica existente */
router.post('/update:id', function(req, res) {
  var id = req.params.id
  console.log(id)
  jsonfile.readFile(myBD, (erro, cancoes) => {
    if(!erro){
      var index = cancoes.findIndex(a => a.id==id )
      if(index > -1){
      cancoes[index].prov=req.body.prov
      cancoes[index].local=req.body.local
      cancoes[index].tit=req.body.tit
      cancoes[index].musico=req.body.musico
      cancoes[index].duracao=req.body.duracao
      jsonfile.writeFile(myBD, cancoes, erro => {
        if(erro) console.log(erro)
        else console.log('Registo gravado com sucesso.')
      })
    }
  }
  })
  res.redirect('/cancao'+id)
})

/* Apagar musica existente */
router.delete('/:id',function(req,res){
  var id = req.params.id
  jsonfile.readFile(myBD, (erro, cancoes)=>{
      if(!erro){
          var index = cancoes.findIndex(a => a.id==id )
          if(index > -1){
              cancoes.splice(index, 1)
              jsonfile.writeFile(myBD, cancoes, erro =>{
                  if(erro) console.log(erro)
                  else console.log("BD atualizada com sucesso")
              })
              res.end('0')
          }
          else{
              console.log('Elemento a remover não encontrado')
              res.end('1')
          }
      }
      else{
          console.log("Erro na leitura da BD")
          res.end('1')
      }
  })
  })

module.exports = router
