angular.module('chirper', ['ngRoute', 'ngResource', 'chirper.controllers', 'chirper.factories'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider
    .when('/', {
        templateUrl: 'welcome.html'
    })
    .when('/chirps', {
        templateUrl: 'list.html',
        controller: 'ChirpListController'
    })
    .when('/chirps/:someId/update', {
        templateUrl: 'single_update.html',
        controller: 'UpdateChirpController'
    })
    .when('/chirps/:someId', {
        templateUrl: 'single_view.html',
        controller: 'SingleChirpController'
    })
    .otherwise({
        redirectTo: '/'
    });
}]);