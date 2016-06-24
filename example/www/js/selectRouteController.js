var app = angular.module("starter");

app.controller('selectRouteController', function ($state, $scope) {
    alert("inside select Route controller");

    $scope.nextButtonClick = function () {
        alert("next button clicked");
    }

});