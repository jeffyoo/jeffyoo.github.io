var app = angular.module("MyApp", []);

app.controller("MyController", ($scope) => {
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
	};

	$scope.changeValue = (key) => {
		let change = prompt("What value would you like to change it to?");
		$scope.coins[key]["value"] = parseInt(change);
	};

	$scope.calculate = () => {
		let totalValue = $scope.totalValue;
		let coins = [];

		// Reset the count and grab all coin values into coins array
		for (let coin in $scope.coins) {
			coins.push($scope.coins[coin].value);
			$scope.coins[coin].count = 0;
		}

		// Sort the coins from smallest to largest
		coins = coins.sort((a,b) => {
			return a-b;
		});
		console.log(coins); //remove later

		// Iterate through the coins array starting with the largest coin value
		for (var i = coins.length-1; i >= 0; i--) {
			if (totalValue >= coins[i]) {
				var canFitInto = Math.floor(totalValue/coins[i]);
				totalValue = totalValue - (canFitInto * coins[i]);
				for (var coin in $scope.coins) {
					if ($scope.coins[coin].value === coins[i]) {
						$scope.coins[coin].count = canFitInto;
						break;
					}
				}
			}
		}
	}


});






