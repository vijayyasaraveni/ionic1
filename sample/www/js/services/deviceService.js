var app = angular.module('starter.services');

app.service("deviceService", function($http, $q){

    return({
        getDeviceList: getDeviceList
    });

    function getDeviceList() {
        var request = {
            method: 'POST',
            url: 'http://myplug.in/lex2/api.php?action=DevicesList',
            headers: {
            'Content-Type': 'application/json'
            },
            data: {  }
        }
        return( $http(request).then( handleSuccess, handleError ) );
    }

    function handleError( response ) {
        if (
            ! angular.isObject( response.data ) ||
            ! response.data.message
            ) {
            return( $q.reject( "An unknown error occurred." ) );
        }
        // Otherwise, use expected error message.
        return( $q.reject( response.data.message ) );
    }
    function handleSuccess( response ) {

        console.log("inside success :::::: "+JSON.stringify(response));

        var responseString = JSON.stringify(response);
        return( response.data );
    }

});

