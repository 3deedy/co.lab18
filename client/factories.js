var app = angular.module('chirper.factories', []);

app.factory('Chirp', ['$resource', function($resource) {
    return $resource('/api/chirps/:id', {id: '@id'}, {
        update: {
            method: 'PUT'
        }
    });
}]);

app.factory('User', ['$resource', function($resource) {
    return $resource('/api/users/:id');
}]);