'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProjectSchema = Schema({
    name: String,
    descripcion: String,
    category: String, 
    langs: String,
    year: Number,
    image: String
    
});

module.exports = mongoose.model('Project',ProjectSchema);

//projects ===>  Guarda los documents en la coleccion