var app = angular.module("MyApp", []);

app.controller("MyController", function($scope){
	$scope.totalValue = null;
	$scope.coins = {
		"a": {
			"value": 25,
			"count": 0
		},
		"b": {
			"value": 10,
			"count": 0
		},
		"c": {
			"value": 5,
			"count": 0
		},
		"penny": {
			"value": 1,
			"count": 0
		}
	}

	$scope.changeValue = function(key) {
		var change = prompt("What value would you like to change it to?");
		$scope.coins[key]["value"] = change;
	}

	$scope.calculate = function() {
		var totalValue = $scope.totalValue;
		var coins = [];
		for (var coin in $scope.coins) {
			coins.push($scope.coins[coin].value);
			$scope.coins[coin].count = 0;
		}

		// Sort the coins from smallest to largest
		coins = coins.sort(function(a,b) {
			return a-b;
		});
		console.log(coins);

		// Iterate through the
		for (var i = coins.length-1; i >= 0; i--) {
			// console.log(coins[i])
			if (totalValue >= coins[i]) {

				var canFitInto = Math.floor(totalValue/coins[i]);
				totalValue = totalValue - (canFitInto * coins[i]);
				for (var coin in $scope.coins) {
					if ($scope.coins[coin].value === coins[i]) {
						$scope.coins[coin].count = canFitInto;
					}
				}

			}
		}

		console.log($scope.coins)








	}
});






