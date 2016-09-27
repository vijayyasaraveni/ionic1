var app = angular.module('starter.controllers');

app.controller('createTripController', function($scope, $state, $location, $ionicLoading, routeListService){
  
  console.log("i am here");

  $scope.routes = [];
  $scope.routesCount = 0;
  $scope.data = {
    selectedRoute: ''
  };
  loadRemoteData();


  function loadRemoteData() {
                    // The friendService returns a promise.
                    $ionicLoading.show();
                    routeListService.getRouteList().then(
                            function( response ) {
                              console.log("response from >>> "+response);
                                applyRemoteData( response );
                                $ionicLoading.hide();
                            });
                }

  function applyRemoteData( response ) {

      $scope.routesCount = response.RoutesCount;
      $scope.routes = response.Routes;
}
  
  $scope.nextButtonClick = function(){

    alert("i am here");

    console.log("selected value :::::::: "+$scope.data.selectedRoute.RouteId);

    $state.go('selectVehicle', {'RouteId': $scope.data.selectedRoute.RouteId});
  }
  
})

.controller('liveTripsController', function($scope, $state, $location){
  $scope.tripDetails = function(){
    $state.go('tripDetails');
  }
})

.controller('tripDetailsController', function($state, $location, $scope){
  $scope.createTrip = function(){
    $state.go('home');
  }
});