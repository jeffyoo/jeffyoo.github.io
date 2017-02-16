var app = angular.module("MyApp", []);

app.controller("MyController", function($scope){
	$scope.coinA = "25";
	$scope.coinB = "10";
	$scope.coinC = "5";
	$scope.coinPenny = "1";



	$scope.test = function() {
		alert('Works');
	}

});






