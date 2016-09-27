var app = angular.module('starter.controllers');

app.controller('browseRoutesController', function($state, $location, $scope, $http){
  
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
  
});