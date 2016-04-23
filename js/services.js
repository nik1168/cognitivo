angular.module('cognitivo.services',[])
.factory('Users',['$resource', function ($resource) {
	 //Usar el service '$resource' para devolver un objeto '$resource' pill

	 return $resource('http://cognitive-sisinfo.rhcloud.com/usersmobile/:usermobileID', {usermobileID:'@_id'}, {update:{method:'PUT'}});
}])

.factory('Pfeiffer',['$resource', function ($resource) {
	 //Usar el service '$resource' para devolver un objeto '$resource' pill

	 return $resource('http://cognitive-sisinfo.rhcloud.com/pfeiffer/:pfeifferID', {pfeifferID:'@_id'}, {update:{method:'PUT'}});
}])

.factory('Pills',['$resource', function ($resource) {
	 //Usar el service '$resource' para devolver un objeto '$resource' pill

	 return $resource('http://cognitive-sisinfo.rhcloud.com/pills/:pillID', {pillID:'@_id'}, {update:{method:'PUT'}});
}]);