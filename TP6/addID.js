var jsonfile = require('jsonfile')
var nanoid = require('nanoid')

var myBD ="cancoes.json"


function adicionarNanoID(){
    jsonfile.readFile(myBD,(erro,cancoes)=>{
        if(!erro){
            cancoes.forEach(c=>c.id=nanoid())
            jsonfile.writeFile(myBD,cancoes,erro => {
                if(erro){
                    console.log(erro)
                }
                else
                    console.log("Registo gravado com sucesso")
                

            })
        }
        else
        console.log("ERRO DE LEITURA")
    
    })
}

adicionarNanoID()