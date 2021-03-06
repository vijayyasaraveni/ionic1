// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ui.router', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    templateUrl: 'templates/playlists.html',
    controller: 'PlaylistsCtrl'
  })
  
  .state('home', {
    url : '/home',
    templateUrl : 'templates/home.html',
    controller: 'homePageController'
  })
  
  .state('createTrip', {
    url : '/createTrip',
    templateUrl : 'templates/createTrip.html',
    controller: 'createTripController'
  })
  
  .state('selectVehicle', {
    url : '/selectVehicle',
    params : {'RouteId' : null},
    templateUrl : 'templates/vehicleList.html',
    controller : 'vehicleListController'
  })
  
  .state('deviceList', {
    url : '/deviceList',
    params : {'routeId': null, 'vehicleId': null},
    templateUrl: 'templates/deviceList.html',
    controller: 'deviceListController'
  })
  
  .state('tripDetails', {
    url : '/tripDetails',
    templateUrl : 'templates/tripDetails.html',
    controller : 'tripDetailsController' 
  })
  
  .state('recieveDevices', {
    url : '/recieveDevices',
    templateUrl : 'templates/recieveDevices.html',
    controller : 'recieveDevicesController'
    
  })
  
  .state('liveTrips', {
    url : '/liveTrips',
    templateUrl : 'templates/liveTrips.html',
    controller : 'liveTripsController'
  })
  
  
  .state('browseDevices', {
    url : '/browseDevices',
    templateUrl : 'templates/browseDevices.html',
    controller : 'browseDevicesController'
  })
  
  .state('browseRoutes', {
    url : '/browseRoutes',
    templateUrl : 'templates/browseRoutes.html',
    controller : 'browseRoutesController'
  })
  
  .state('browseVehicles', {
    url : '/browseVehicles',
    templateUrl : 'templates/browseVehicles.html',
    controller : 'browseVehiclesController'
  })
  
  .state('addVehicle', {
    url : '/addVehicle',
    templateUrl: 'templates/addVehicle.html',
    controller : 'addVehicleController'
  });
 
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/home');
});
