angular.module('starter.services', [])

.service('routeListService', function ($http, $q) {
    return({
                    getRouteList: getRouteList
                    // getFriends: getFriends,
                    // removeFriend: removeFriend
                });

                function getRouteList() {
                    var request = {
                        method: 'POST',
                        url: 'http://myplug.in/lex2/api.php?action=RoutesList',
                        headers: {
                        'Content-Type': 'application/json'
                        },
                        data: {  }
                    }
                    return( $http(request).then( handleSuccess, handleError ) );
                }
                // I remove the friend with the given ID from the remote collection.
                function removeFriend( id ) {
                    var request = $http({
                        method: "delete",
                        url: "api/index.cfm",
                        params: {
                            action: "delete"
                        },
                        data: {
                            id: id
                        }
                    });
                    return( request.then( handleSuccess, handleError ) );
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


})

.service("vehicleService", function($http, $q){

    return({
        getVehicleList: getVehicleList
    });

    function getVehicleList() {
        var request = {
            method: 'POST',
            url: 'http://myplug.in/lex2/api.php?action=VehiclesList',
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

})

.service("deviceService", function($http, $q){

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

;

