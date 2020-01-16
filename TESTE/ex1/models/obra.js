var mongoose = require('mongoose')

var partituraSchema = new mongoose.Schema({
    path: String,
    voz: String
})

instrumentoSchema = mongoose.Schema({
    designacao: String,
    partitura: partituraSchema
})

obraSchema = mongoose.Schema({
    id: String,
    titulo: String,
    tipo: String,
    compositor: String,
    instrumentos: [instrumentoSchema],
})

module.exports = mongoose.model('obra', obraSchema);