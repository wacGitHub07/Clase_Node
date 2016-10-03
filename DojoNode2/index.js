//Cargar las dependencias, llenar el arreglo y iniciar el servidor
var server = require('./server');
var route = require('./router');
var requestHandlers = require('./requestHandlers');

var handle = {};
//SE pasa la referencia a los metodos, no invocacion
handle['/'] = requestHandlers.start;
handle['/start'] = requestHandlers.start;
handle['/upload'] = requestHandlers.upload;

//invocar el servidor
server.start(route.route,handle);