var http =require('http')
var fs = require('fs')

var myServer = http.createServer(function (req,res){
    var partes = req.url.split('/')
    var pag =partes[partes.length-1]

    switch(pag){
        case 'arq2html.xsl' :
            fs.readFile(pag, (error,data)=>{
                res.writeHead(200,{'Content-Type':'text/xsl;charset=utf-8'})
                res.write(data)
                res.end()
            })
            break;
        case '':
        case 'index.html':
            fs.readFile('dataset/index.html', (err,data)=>{
                res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'})
                res.write(data)
                res.end() 
            })
            break;  

        default:
            fs.readFile('dataset/arq'+ pag +'.xml', (error,data)=>{
                res.writeHead(200,{'Content-Type':'text/xml;charset=utf-8'})
                if(error){
                    res.write('File ' + pag + ' not found!')
                    res.end()
                }
                else{     
                    res.write(data)
                    res.end()
                }
            })
    
}})
myServer.listen(7777);
console.log('Servidor à escuta na porta 7777...')
