//se importan los módulos

var express = require("express");
var bodyParser= require("body-parser");
var routes = require('./routes');

//Llama una instancia de express
//Configura la dirección del servidor y config inicial
var app = express();

//Le asignamos el puerto

app.listen(4242, function(){
console.log("Puerto 4242 escuchando");
});

//Toma las peticiones de la url codificadas del body-parser
app.use(bodyParser.urlencoded({extend:true}));
//Todas las dir que inician se abra el 
app.use('/', routes)