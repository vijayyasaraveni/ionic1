var app = angular.module("starter");

app.controller('dashBoardController', function ($scope, $state) {
    alert("inside dashBoardController");

    $scope.doLogin = function () {
        $state.go("dashBoard");
    }

    $scope.createTripAction = function () {
        $state.go("selectRoute");
    }

});