var promise = require('bluebird');

var options ={
	promiseLib: promise

};

var pgp = require('pg-promise')(options);
var connectionString = 'postgres://czrovakj:5j6yDI82YMGyEeCcS3qy-pDLk7OS2Wvd@elmer.db.elephantsql.com:5432/czrovakj'
var db = pgp(connectionString);

//metodos y funciones para consultar

//METODOS PARA LA TABLA RESTAURANTES

//Metdo para recuperar todos los restaurantes
function getAllRestaurants(req, res, next){
	db.any('select * from restaurant')
	.then(function(data){
		res.status(200)
		.json({
			status: 'Exitoso',
			data: data,
			message: 'Recuperados todos los restaurantes'
		});
	})
	.catch(function(err){
		return next(err);
	});
};

//Obtener restaurante por nombre
function getRestaurantByName(req, res, next){
	var name = req.params.name;
	db.any('select * from restaurant where name = $1', name)
	.then(function(data){
		res.status(200)
		.json({
			status : 'Exitoso',
			data : data,
			message : 'Recuperado restaurante por nombre'
		});
	})
	.catch(function(err){
		return next(err);
	});
};

function createRestaurant(req, res, next){
	//none NO retorna nada
	db.none('insert into restaurant(name, city, address, phone)'+ 
		'values($1, $2, $3, $4)',
		[req.body.name, req.body.city, req.body.address, parseInt(req.body.phone)])
	.then(function(data){
		res.status(200)
		.json({
			status : 'Exitoso',
			message : 'Insertado restaurante'
		});
	})
	.catch(function(err){
		return next(err);
	});
};

function removeRestaurant(req, res, next){
	var restaurantID = parseInt(req.params.id);
	db.result('delete from restaurant where id = $1',restaurantID)
	.then(function(data){
		res.status(200)
		.json({
			status : 'Exitoso',
			message : 'Eliminado restaurante'
		});
	})
	.catch(function(err){
		return next(err);
	});
};

function updateRestaurant(req, res, next){
	//none NO retorna nada
	db.none('update restaurant set name=$1, city=$2, address=$3, phone=$4 where id = $5',
		[req.body.name, req.body.city, req.body.address, parseInt(req.body.phone), parseInt(req.params.id)])
	.then(function(data){
		res.status(200)
		.json({
			status : 'Exitoso',
			message : 'Actualizado restaurante'
		});
	})
	.catch(function(err){
		return next(err);
	});
};

//METODOS PARA LOS MENUS

//Metdo para recuperar todos los restaurantes
function getAllMenus(req, res, next){
	db.any('select * from menu')
	.then(function(data){
		res.status(200)
		.json({
			status: 'Exitoso',
			data: data,
			message: 'Recuperados todos los menus'
		});
	})
	.catch(function(err){
		return next(err);
	});
};

//Obtener restaurante por nombre
function getMenuByName(req, res, next){
	var name = req.params.name;
	db.any('select * from menu where name = $1', name)
	.then(function(data){
		res.status(200)
		.json({
			status : 'Exitoso',
			data : data,
			message : 'Recuperado menu por nombre'
		});
	})
	.catch(function(err){
		return next(err);
	});
};

function createMenu(req, res, next){
	//none NO retorna nada
	db.none('insert into menu(name, description, price, restaurant)'+ 
		'values($1, $2, $3, $4)',
		[req.body.name, req.body.description, parseInt(req.body.price), req.body.restaurant])
	.then(function(data){restaurant
		res.status(200)
		.json({
			status : 'Exitoso',
			message : 'Insertado menu'
		});
	})
	.catch(function(err){
		return next(err);
	});
};

function removeMenu(req, res, next){
	var menuID = parseInt(req.params.id);
	db.result('delete from menu where id = $1',menuID)
	.then(function(data){
		res.status(200)
		.json({
			status : 'Exitoso',
			message : 'Eliminado Menu'
		});
	})
	.catch(function(err){
		return next(err);
	});
};

function updateMenu(req, res, next){
	//none NO retorna nada
	db.none('update menu set name=$1, description=$2, price=$3, restaurant=$4 where id = $5',
		[req.body.name, req.body.description, parseInt(req.body.price), req.body.restaurant, parseInt(req.params.id)])
	.then(function(data){
		res.status(200)
		.json({
			status : 'Exitoso',
			message : 'Actualizado menu'
		});
	})
	.catch(function(err){
		return next(err);
	});
};

//Obtener restaurante por nombre
function getMenuByRestaurant(req, res, next){
	var id = parseInt(req.params.id);
	db.any('select menu.name, menu.description from menu,restaurant where menu.restaurant = $1 and menu.restaurant = restaurant.id', id)
	.then(function(data){
		res.status(200)
		.json({
			status : 'Exitoso',
			data : data,
			message : 'Recuperado menus por restaurante'
		});
	})
	.catch(function(err){
		return next(err);
	});
};

module.exports = {
	//Exportar clave valor --> variable : metodo
	getAllRestaurants : getAllRestaurants,
	getRestaurantByName : getRestaurantByName,
	createRestaurant : createRestaurant,
	removeRestaurant : removeRestaurant,
	updateRestaurant : updateRestaurant,
	getAllMenus : getAllMenus,
	getMenuByName : getMenuByName,
	createMenu : createMenu,
	removeMenu : removeMenu,
	updateMenu : updateMenu,
	getMenuByRestaurant : getMenuByRestaurant
};

///DESPLEGAR LOS MENUS AOSCIADOS A UN RESTAURANTE 
//POSTMAN
//ELEPHANTSQL.COM
