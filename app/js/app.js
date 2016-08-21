'use strict';
var app = angular.module('pokedexApp', ['ngRoute']);

app.config(function($routeProvider) {
            $routeProvider
                    .when('/main', {
                        templateUrl: 'app/templates/listadepokemonsroutes.html', controller: 'pokemonsCtrl'
                    })
                     .when('/caughtpokemons', {
                        templateUrl: 'app/templates/listadepokemonsroutes2.html', controller: 'pokemonsCtrl2'
                     })
                     .when('/battlebox', {
                        templateUrl: 'app/templates/listadepokemonsroutes3.html', controller: 'pokemonsCtrl3'
                     })
                    .otherwise({
                        redirectTo: '/'
                    });
            //$locationProvider.html5Mode(true);
        });

app.controller('pokemonsCtrl', function($scope, $http) {
    $http.get("http://pokeapi.co/api/v2/generation/1/").then(function(allPokemons) {
        $scope.pokemons = allPokemons;
    });
});

app.controller('pokemonsCtrl2', function($scope, $http) {
    $http.get("http://pokeapi.co/api/v2/pokemon/1").then(function(allPokemons2) {
        $scope.pokemons2 = allPokemons2;
        $scope.pokemons3 = {status: "Captured"};
    });
    
    $scope.CaughtingPokemon = function(pokemon3) {
        pokemon3.status = "Uncaught";
    };
});

/*
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
});*/

/*
var pokedexApp = angular.module('pokedexApp', ['ngRoute']);
pokedexApp
        .config(function ($routeProvider) {
            $routeProvider
            .when('/mainindex', {
                templateUrl: '../templates/listadepokemons_routes.html',
                controller: 'pokemonsCtrl'
            })
            .when('/notes2', {
                templateUrl: 'app/templates/#.html',
                controller: 'NotesIndexController',
                controllerAs: 'indexController'
            })
            .when('/notes3', {
                templateUrl: 'app/templates/#.html',
                controller: 'NotesIndexController',
                controllerAs: 'indexController'
            })
            .otherwise({
                templateUrl: "main_index_routes.html"
            });
});*/