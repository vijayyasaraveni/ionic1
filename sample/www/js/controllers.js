angular.module('starter.controllers', [])


.controller('homePageController', function($scope, $state,  $location){
  
  $scope.create = function(){
    $state.go('createTrip');
  }
  
  $scope.recieveDevices = function(){
    $state.go('recieveDevices');
  }
  
  $scope.liveTrips = function(){
    $state.go('liveTrips');
  }
  
  $scope.manageDevices = function(){
    $state.go('browseDevices');
  }
  
  $scope.browseRoutes = function(){
    $state.go('browseRoutes');
  }
  
  $scope.browseVehicles = function(){
    $state.go('browseVehicles');
  }
  
  
})

.controller('createTripController', function($scope, $state, $location, $ionicLoading, routeListService){
  
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

.controller('vehicleListController', function($scope, $state, $location,$http, $ionicLoading, $stateParams, vehicleService){
  
  console.log("selected routeid ::::: "+$stateParams.RouteId);

  $scope.vehicles = [];
  $scope.vehiclesCount = 0;
  $scope.vehicleListEmpty = false;

  $scope.data = {
    selectedVehicle: null
  }

  getVehicleList();

  function getVehicleList() {
    $ionicLoading.show();
    vehicleService.getVehicleList().then(
      function( response ) {
          console.log("response from >>> "+response);
          applyRemoteVehicleList(response);
          $ionicLoading.hide();
      });
  }
  
  function applyRemoteVehicleList(response){
      $scope.vehicles = response.Vechicles;

      if($scope.vehicles.length > 0){
        $scope.vehicleListEmpty = true;
      }else{
        $scope.vehicleListEmpty = false;
      }

      // $scope.vehiclesCount = $scope.vehicles.length;
  }
  
  $scope.addVehicle = function(){

    console.log("selected Vehicle :::::::: "+$scope.data.selectedVehicle.VehicleId);

    $state.go('deviceList', {'routeId': $stateParams.RouteId, 'vehicleId': $scope.data.selectedVehicle.VehicleId});

    //$state.go('addVehicle');
  }
  
})

.controller('addVehicleController', function($scope, $state, $location){
  $scope.addVehicle = function(){
      $state.go('deviceList');
  }
})

.controller('deviceListController', function($state, $stateParams, $http, $ionicLoading, $location, $scope, deviceService){
  
  console.log("routeId :"+$stateParams.routeId);
  console.log("vehicleId :"+$stateParams.vehicleId);


  $scope.devices = [];
  $scope.deviceCount = 0;
  $scope.deviceListEmpty = false;

  $scope.data = {
    selectedDevice: null
  }

  getDeviceList();

  function getDeviceList() {
    $ionicLoading.show();
    deviceService.getDeviceList().then(
      function( response ) {
          console.log("response from >>> "+response);
          applyRemoteDeviceList(response);
          $ionicLoading.hide();
      });
  }

function applyRemoteDeviceList(response){
      $scope.devices = response.Devices;

      // if($scope.devices.length > 0){
      //   $scope.deviceListEmpty = true;
      // }else{
      //   $scope.deviceListEmpty = false;
      // }
  }


  
  $scope.nextButtonClick = function(){
    $state.go('tripDetails');
  }
})

.controller('tripDetailsController', function($state, $location, $scope){
  $scope.createTrip = function(){
    $state.go('home');
  }
})

.controller('recieveDevicesController', function($scope, $state, $location){
  $scope.recieveDevices = function(){
    $state.go('home');
  }
})


.controller('liveTripsController', function($scope, $state, $location){
  $scope.tripDetails = function(){
    $state.go('tripDetails');
  }
})

.controller('browseDevicesController', function($state, $location, $scope){
  
})

.controller('browseRoutesController', function($state, $location, $scope, $http){
  
   var req = {
    method: 'POST',
    url: 'http://myplug.in/lex2/api.php?action=RoutesList',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {  }
}

$http(req).then(function(response){
  // success func
  
    console.log(JSON.stringify(response));
    alert('success');
  
}
, function(response){
  alert('failed');
  
});
  
})

.controller('browseVehiclesController', function($state, $scope, $location){
  
})


.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
