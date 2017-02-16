var app = angular.module("MyApp", []);

app.controller("MyController", function($scope){
	$scope.totalValue = null;
	$scope.coins = {
		"a": "25",
		"b": "10",
		"c": "5",
		"penny": "1"
	}

	$scope.test = function(g) {
		var change = prompt("What value would you like to change it to?");
		$scope.coins[g] = change;
	}
	
	$scope.test2 = function() {
		console.log($scope.totalValue)
	}

});






