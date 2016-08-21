'use strict';

angular.module('pokedexApp', [])
        .controller('pokemonsCtrl', function($scope, $http) {
    $http.get("http://pokeapi.co/api/v2/generation/1/").then(function(allPokemons) {
        $scope.pokemons = allPokemons;
    });
});