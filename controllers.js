'use strict';

angular
.module('CollectionController', [])
.controller(
	    'MainController',
	    [
	        '$scope',
	        '_',
			'CollectionMongo',
			'$cookies',
	        function ($scope, _, CollectionMongo, $cookies) {
				CollectionMongo.getItems().$promise.then(function (result) {
					$scope.items = result;
	            	$scope.collectionValue = Math.round(_.sum(_.pluck(result, 'value')));
	            	$scope.brandCount = _.size(_.uniq(result, 'brand'));
	            	$scope.itemCount = _.size(result, 'brand');
					var itemsWithPurchasePrice = _.filter(result, function(item){
						return item.purchasePrice > 0;
					});
					$scope.gain = Math.floor(((_.sum(_.pluck(itemsWithPurchasePrice, 'value'))/_.sum(_.pluck(itemsWithPurchasePrice, 'purchasePrice')))-1)*100);
				});
	            $scope.title = 'Collection';

				$scope.APIkey = $cookies.get('api-key');

				$scope.$watch(
					() => $scope.APIkey,
					(newAPIkey) => {
						$cookies.put('api-key', newAPIkey);
					},
					true
				);
	        }
	    ]
	)
	.controller(
	    'AccueilController',
	    [
	        '$scope',
	        'Collection',
	        '_',
	        function ($scope, Collection, _) {

	        }
	    ]
	)
	.controller(
		'EditController',
		[
			'$scope',
			'$state',
			'CollectionMongo',
			'_',
			function ($scope, $state, CollectionMongo, _) {
                let saveItem = (item) => {
                    CollectionMongo.saveItem({'itemId' : $state.params['itemId']}, item);
                };

				if(!$state.params['itemId']) {
					CollectionMongo.createItem({}).$promise.then(function (item) {
						console.log(item);
						$state.go('edit', { itemId: item._id.$oid });
					});
				} else {
					CollectionMongo.getItem({'itemId' : $state.params['itemId']}).$promise.then(function (item) {
						$scope.item = item;
						$scope.$watch(
							() => $scope.item,
							(modifiedItem) => {
								saveItem(modifiedItem);
							},
							true
						);
					});
				}
			}
		]
	)
	.controller(
	    'ListeController',
	    [
	        '$scope',
	        'CollectionMongo',
	        '_',
	        function ($scope, CollectionMongo, _) {
				$("#hide-show-photos").bootstrapSwitch();

	        	$scope.getItemImagePath = function(item) {
					return 'photos/' + item.brand + '/' + item.platform + '/' + item.type + '/' + item.reference + '.JPG';
				}
				$scope.hideShowPhotos = false;
				$scope.getEBaySearchTerms = function(item) {
					var terms = item.platform + ' ' + item.name;
					return terms.replace(/\W+/g, "+");
				}
				$scope.hasItemGainedClasses = function(item){
					if(item.purchasePrice > 0) {
						if(item.purchasePrice < item.value) {
							return "glyphicon glyphicon-arrow-up green";
						} else {
							return "glyphicon glyphicon-arrow-down red";
						}
					} else {
						return "glyphicon glyphicon-question-sign black";
					}
				}
				$scope.itemsGain = function(item){
					return Math.floor(((item.value/item.purchasePrice)-1)*100);
				}
				$scope.rowClass = function(item){
					var rowClass;
					if(!item.value || item.value == 0) {
						rowClass = 'red';
					} else if(!item.purchasePrice || item.purchasePrice == 0) {
						rowClass = 'red-soft';
					} 
					return rowClass;
				}
	        }
	    ]
	);