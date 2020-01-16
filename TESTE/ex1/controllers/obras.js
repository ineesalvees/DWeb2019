var Obra = require('../models/obra')

module.exports.listAll = () =>{
    return Obra
            .find({}, {_id:0, id:1, titulo:1, tipo:1, compositor:1})
            .exec()
}

module.exports.consultar = id =>{
    return Obra
            .find({id: id})
            .exec()
}

module.exports.listTypes = () => {
    return Obra
            .distinct('tipo')
            .exec()
}

module.exports.obrasCompositor = (compositor) =>{
    return Obra
            .find({compositor:compositor})
            .exec()
}

module.exports.obrasPartituras = (instrumento) =>{
    return Obra
            .find({instrumentos: {$elemMatch: {designacao: inst}}})
            .exec()
}

module.exports.obras = () => {
    return Obra
            .aggregate([{$project: {id:1, titulo:1, _id:0, numberOfPartituras:{$cond: {if: { $isArray:"$instrumentos"}, then: {$size: "$instrumentos"}, else: "0"}}}}])
            .exec()
}
