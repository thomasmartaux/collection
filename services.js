'use strict';

angular
    .module('CollectionService', ['ngResource'])
    .factory(
        'Collection',
        [
            '$resource',
            '_',
            function ($resource, _) {
                return $resource('datas/collection.json', {}, {
                    items: {
                        method: 'GET',
                        isArray: true
                    }
                });
            }
        ]
    )
    .factory(
        'CollectionMongo',
        [
            '$resource',
            '_',
            '$cookies',
            function ($resource, _, $cookies) {
                return $resource('https://api.mlab.com/api/1/databases/oldies/collections/items/:itemId?apiKey=' + $cookies.get('api-key'), {}, {
                    createItem: {
                        method: 'POST'
                    },
                    saveItem: {
                        method: 'PUT'
                    },
                    getItems: {
                        method: 'GET',
                        isArray: true
                    },
                    getItem: {
                        method: 'GET'
                    }
                });
            }
        ]
    )
    .factory(
        '_',
        [
            '$window',
            function ($window) {
                return $window._;
            }
        ]
    );