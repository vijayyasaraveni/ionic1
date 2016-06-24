var app = angular.module("starter");

app.controller('loginController', function ($scope, $state) {

    $scope.doLogin = function () {
        alert("inside login screen");
        $state.go("dashBoard");
    }

});