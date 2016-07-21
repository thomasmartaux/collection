'use strict';

var collectionApp = angular
    .module("collectionApp", ['ngResource', 'CollectionService', 'CollectionDirective', 'CollectionController', 'ui.router', 'ngCookies'])
    .config(function ($stateProvider, $urlRouterProvider) {
        //
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise("/");
        //
        // Now set up the states
        $stateProvider
            .state('accueil', {
                url: "/",
                templateUrl: "partials/accueil.html",
                controller: "AccueilController"
            })
            .state('liste', {
                url: "/liste",
                templateUrl: "partials/liste.html",
                controller: "ListeController"
            })
            .state('edit', {
                url: "/edit/:itemId",
                templateUrl: "partials/edit.html",
                controller: "EditController"
            });
    });