var Obra = require('../models/obras')

//devolve info de uma obra com um determinado ano
module.exports.consultarCompositorDuracao = (compositor, duracao) =>{
    return Obra
            .find({compositor: compositor, duracao:{$gte: duracao}})
            .exec()
}

//devolve a lista de obras
module.exports.listar = () =>{
    return Obra
            .find()
            .exec()
}

//devolve info de uma obra com um determinado ano
module.exports.consultarAno = ano =>{
    return Obra
            .find({anoCriacao: ano})
            .exec()
}

module.exports.consultarPeriodo = periodo =>{
    return Obra
            .find({periodo:periodo})
            .exec()
}

//devolve info de uma obra com um determinado id
module.exports.consultar = id =>{
    return Obra
            .findOne({_id: id})
            .exec()
}


