var app = angular.module('starter.controllers');

app.controller('deviceListController', function($state, $stateParams, $http, $ionicLoading, $location, $scope, deviceService){
  
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

.controller('recieveDevicesController', function($scope, $state, $location){
  $scope.recieveDevices = function(){
    $state.go('home');
  }
})

.controller('browseDevicesController', function($state, $location, $scope){
  
});