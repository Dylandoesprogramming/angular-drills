angular.module('apiApp').controller('apiCtrl', function($scope, apiSrvc) {
    $scope.getPokemon = function(pokemon) {
        apiSrvc.getPokemon(pokemon).then(function(response) {
            $scope.pokemon = response.data;
            console.log($scope.pokemon)
        });
    }
});