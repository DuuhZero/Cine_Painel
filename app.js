const express = require('express')
const path = require('path')
const app = express()

app.use('/dist', express.static(path.join(__dirname, 'src/dist')))
app.use('/css', express.static(path.join(__dirname, 'src/static/css')));
app.use('/img', express.static(path.join(__dirname, 'src/static/img')));
app.use('/fonts', express.static(path.join(__dirname, 'src/static/fonts')));
app.get('/', function(requisicao,resposta){
    resposta.sendFile(path.join(__dirname, 'src', 'templates', 'index.html'))
})

app.listen(3000,function(erro){
    if(erro){
        console.log("Ocorreu um erro")
    } else{
        console.log('Servidor Iniciado com sucesso')
    }
})