var mongoose = require('mongoose')

var obraSchema = new mongoose.Schema({
    _id: String,
    nome: String,
    descr: String,
    anoCriacao: String,
    periodo: String,
    compositor: String,
    duracao: String
})

module.exports =  mongoose.model('obra', obraSchema)