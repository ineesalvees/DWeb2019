var Prize = require('../models/prizes')

//Devolve a lista de prémios apenas com os campos "year" e "category";
module.exports.listar = () =>{
    return Prize
            .find({}, {year:1, category:1, _id:0})
            .exec()
}

//Devolve a informação completa de um prémio;
module.exports.consultar = id =>{
    return Prize
            .findOne({_id:id})
            .exec()
}

//Devolve a lista de categorias, sem repetições;
module.exports.listaCategorias = () =>{
    return Prize
            .distinct('category')
            .exec()
}

//Devolve a lista de prémios que tenham o campo "category" com o valor "YYY";
module.exports.listaPremiosCategoria = cat =>{
    return Prize
            .find({category: cat})
            .exec()
}

//Devolve a lista de prémios que tenham o campo "category" com o valor "YYY" e o campo "year" com um valor superior a "AAAA";
module.exports.listaPremiosCategoriaAno = (cat, ano) =>{
    return Prize
            .find({category: cat, year:{$gt:ano}})
            .exec()
}

//Devolve uma lista ordenada alfabeticamente por nome dos laureados com os campos correspondentes ao nome, ano do prémio e categoria.
module.exports.listaLaureados = () =>{
    return Prize
            .aggregate([{$unwind: "$laureates"},
                    {$group:{
                        _id:"$laureates.id",
                        firstname:{$first:"$laureates.firstname"},
                        surname: {$first: "$laureates.surname"},
                        "premio":
                                {"$push": {
                                "ano" : "$year",
                                "categoria" : "$category",
                                "motivacao": "$overallMotivation"}}}},
                    {$sort : 
                        {firstname :1,
                        surname:1}}])
                    .exec()
                    
}

