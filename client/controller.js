angular.module('chirper.controllers', [])
.controller('ChirpListController', ['$scope', 'Chirp', 'User', function($scope, Chirp, User) {
    function getChirps() {
        $scope.chirps = Chirp.query();
    }
    getChirps();

    $scope.users = User.query();

    $scope.createChirp = function() {
        var payload = {
            message: $scope.newMessage,
            userid: $scope.newUserId
        };
        var c = new Chirp(payload);
        c.$save(function(success) {
            $scope.newMessage = '';
            $scope.newUserId = '';
            getChirps();
        }, function(err) {
            console.log(err);
        });
    }
}])
.controller('SingleChirpController', ['$scope', 'Chirp', '$location', '$routeParams', function($scope, Chirp, $location, $routeParams) {
	
    $scope.chirp = Chirp.get({ id: $routeParams.someId });

    $scope.editChirp = function() {
        $location.path('/chirps/' + $routeParams.someId + '/update');
    }

    $scope.deleteChirp = function() {
        if (confirm('Are you sure you want to delete this chirp?')) {
            $scope.chirp.$delete(function() {
                $location.replace().path('/chirps');
            }, function(err) {
                console.log(err);
            });
        }
    }
}])
.controller('UpdateChirpController', ['$scope', 'Chirp', '$location', '$routeParams', function($scope, Chirp, $location, $routeParams) {
    $scope.chirp = Chirp.get({ id: $routeParams.someId });

    $scope.updateChirp = function() {
        $scope.chirp.$update(function() {
            window.history.back();
        }, function(err) {
            console.log(err);
        });
    }
}]);