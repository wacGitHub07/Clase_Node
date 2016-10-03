function route(handle, pathname, response){
	console.log('va a invocar la funcion para' + pathname);
	if(typeof handle[pathname] == 'function'){
		//ejecuta la funcion
		return handle[pathname](response);
	}else{
		//NO soporta la funcion
		console.log('no se encontro manipulador para ' + pathname);
		response.writeHead(404,{'Content-Type':'text/html'});
		response.write('Direccion no disponible');
		response.end();
	}
}
exports.route = route;