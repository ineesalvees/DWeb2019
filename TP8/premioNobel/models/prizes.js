var mongoose = require('mongoose')

var laureateSchema = new mongoose.Schema({
    id:String,
    firstname:String,
    surname:String,
    motivation:String,
    share:String
})

var prizeSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    year: String,
    category: String,
    overallMotivation: String,
    laureates:[laureateSchema]
})

module.exports = mongoose.model('prize', prizeSchema)