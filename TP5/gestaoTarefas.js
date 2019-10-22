var http = require('http')
var pug = require('pug') //para templates 
var  fs = require('fs')
var jsonfile = require('jsonfile')

var {parse} = require('querystring') //querystring exporta várias coisas, mas só quero o módulo de parsing, por isso faço {parse}

var myBD = "tasks.json" //declaração da minha BD

var myServer = http.createServer((req, res) =>{

    console.log(req.method + ' ' + req.url) //tou a testar que tipo de pedido me chegou

    if(req.method == 'GET'){
        if((req.url == '/') || (req.url == '/gestaoTarefas')){
            jsonfile.readFile(myBD, (erro, tasks)=>{
                res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
                if(!erro){
                    res.write(pug.renderFile('index.pug', {lista: tasks}))
                }
                else{
                    res.write(pug.renderFile('erro.pug', {e:"Erro na leitura da BD... :( "}))
                }
                res.end()
            })
        }
        else if(req.url == '/w3.css'){
            res.writeHead(200, {'Content-Type': 'text/css'})
            fs.readFile('stylesheets/w3.css', (erro, dados) =>{ 
                if(!erro){ //se não acontecer nenhum erro
                    res.write(dados) //enviar dados
                }
                else{
                    res.write("<p>Erro: " + erro + "</p>")
                }
                res.end() //temos q pôr aqui porque, como o readFile é assíncrono, se o pusermos fora, vai ler o end() antes de acabar o readFile(). Outra solução: usar readFileSync()
            })
            
        }
        else if(req.url== '/apagar.js'){
            res.writeHead(200, {'Content-Type': 'text/javascript'})
            fs.readFile('apagar.js', (erro, dados)=>{
                if(!erro){ //se não acontecer nenhum erro
                    res.write(dados) //enviar dados
                }
                else{
                    res.write("<p>Erro: " + erro + "</p>")
                }
                res.end()
            })
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
            console.log()
            res.write(pug.renderFile('erro.pug', {e: "Erro: " + req.url + " não está implementado!"}))
            res.end()
        }
    }
    else if(req.method=='POST'){
        if(req.url == '/'){
            recuperaInfo(req, resultado =>{
                jsonfile.readFile(myBD, (erro, tasks)=>{
                    if(!erro){
                        tasks.push(resultado)
                        jsonfile.writeFile(myBD, tasks, erro =>{ //guardar os alunos na myBD e tratar erro, se existir
                            if(erro){
                                console.log(erro)
                            }
                            else{
                                console.log("Registo guardado com sucesso... yay")
                            }
                            res.end(pug.renderFile('index.pug', {lista: tasks}))
                        }) 
                    }
                    else{
                        res.end(pug.renderFile('index.pug', {lista: tasks}))
                    }
                })
            })
        }
    }
    else if(req.method=='DELETE'){
        if(req.url.startsWith('/')){
            var t = req.url.split('/')[1]
            jsonfile.readFile(myBD, (erro, tasks)=>{
                if(!erro){
                    var index = tasks.findIndex(a => a.tarefa == t)
                    if(index > -1){
                        tasks.splice(index, 1)
                        jsonfile.writeFile(myBD, tasks, erro =>{
                            if(erro) console.log(erro)
                            else console.log("BD atualizada com sucesso eheh")
                        })
                        res.end('0')
                    }
                    else{
                        console.log("Erro: não consegui encontrar o elemento a remover... :(")
                        res.end('1')
                    }
                }
                else{
                    console.log("Erro na leitura da BD... :(")
                    res.end('1')
                }
            })
        }
    }
    else{
        console.log("ERRO: " + req.url + " não suportado...") //obtenho a mensagem de erro na consola tbm
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'}) //responder com página de erro, uma vez que o pedido não é POST nem GET
        res.write(pug.renderFile('erro.pug', {e:"ERRO: " + req.url + " não suportado..."})) //mensagem de erro que quero enviar (o pedido que recebi não é suportado pelo meu sistema)
        res.end()
    }
})

myServer.listen(5005, () =>{
    console.log("Servidor à escuta na porta 5005...")
})

function recuperaInfo(request, callback){ //escrevo no ficheiro depois de ter conseguido recuperar a informação; este callback é a função resultado
    if(request.headers['content-type'] == 'application/x-www-form-urlencoded'){
        let body = ''
        request.on('data', bloco =>{ //enquanto conseguires ler dados do 'data', escreve no callback
            body += bloco.toString()
        })
        request.on('end', () =>{
            callback(parse(body)) //a minha função "resultado" está à espera de um argumento
        }) //quando chega ao fim; a callback não tem argumentos
    }
}
