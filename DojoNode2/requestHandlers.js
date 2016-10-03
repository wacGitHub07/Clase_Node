//Simulacion para que el servidor reciva varias peticiones
var exec = require('child_process').exec

function start(response){
	console.log('Manipular start');
	//Encuentre todo lo que tenga raiz y ejecute rapido
	exec('find /',{timeout:10000,
		maxBuffer:20000*1024},
		function(error, stdout, stdeer){
			response.writeHead(200,{'content-Type':'text/html'})
			response.write(stdout);
			response.end();
		});
}
//funcion para localhost
function upload(response){
	console.log('Manipulador upload');
		response.writeHead(200,{'content-Type':'text/html'});
		response.write('hello upload')
		response.end();
}

//SE exportan las funciones
exports.start = start;
exports.upload = upload;