angular.module('apiApp').service('apiSrvc', function($http) {

    this.getPokemon = function(pokemon) {
        return $http({
            method: "Get",
            url: "http://pokeapi.co/api/v2/pokemon/" + pokemon.toLowerCase()
        })
    }

});