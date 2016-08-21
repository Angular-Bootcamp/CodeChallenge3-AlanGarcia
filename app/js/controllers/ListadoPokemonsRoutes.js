'use strict';
var app = angular.module('pokedexApp', ['ngRoute']);

app.controller('pokemonsCtrl', function($scope) {
    $scope.pokemons = [
        {
        id: "001",
        name: "Bulbasaur",
        imageUrl: "http://pokeapi.co//media//sprites//pokemon//1.png",
        type: "Grass",
        type2: "Poison"
        },
        {
        id: "004",
        name: "Charmander",
        imageUrl: "http://pokeapi.co//media//sprites//pokemon//4.png",
        type: "Fire",
        type2: "Flame"
        },
        {
        id: "007",
        name: "Squirtle",
        imageUrl: "http://pokeapi.co//media//sprites//pokemon//7.png",
        type: "Water",
        type2: "Waterr"
        }
    ];
});

/*
angular.module("pokedexApp", ['ngResource', 'ngRoute'])
        .controller('pokemonsCtrl', function($scope, $http, $route) {
    $http.get("http://pokeapi.co/api/v2/generation/1/").then(function(allPokemons) {
        $scope.pokemons = allPokemons;
    });
});*/