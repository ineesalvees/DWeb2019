var Compositor = require('../models/compositores')

//lista de todos os compositores
module.exports.listar = () =>{
    return Compositor
            .find()
            .exec()
}

//devolve info de um compositor com um determinado ano
module.exports.consultarAno = ano =>{
    return Compositor
            .find(dataNasc < ano && dataObito > ano)
            .exec()
}

//devolve info de um compositor com um determinado periodo
module.exports.consultarPeriodo = periodo =>{
    return Compositor
            .find({periodo:periodo})
            .exec()
}

//devolve info de um compositor com um determinado ano e um determinado periodo
module.exports.consultarAnoPeriodo = (ano, periodo) =>{
    return Compositor
            .find({ano: ano, periodo:periodo})
            .exec()
}

//devolve indo de um compositor com um determinado id
module.exports.consultar = id =>{
    return Compositor
            .findOne({_id: id})
            .exec()
}