// Manages all interations with the weather service
weatherApp.factory('weatherService', function ($resource, $q) {
    return {

    	// Get the possible locations. This could be a call to the service if needed.
        locations: [
			{'name': 'London', 'locationName': 'London,uk'},
			{'name': 'Manchester', 'locationName': 'Manchester,uk'},
			{'name': 'Luton', 'locationName': 'Luton,uk'},
			{'name': 'Birmingham', 'locationName': 'Birmingham,uk'}
		],

		// Get the weather information from the service
		getWeather: function(location){
			console.log('Get Weather', location);

			// This calls the weather api service and uses a promise to get the result
			var deferred = $q.defer();

			// Make the call to the service
			$resource('http://api.openweathermap.org/data/2.5/weather?q=:location', {location:'@locationName'}).get({location: location.locationName}, function(event){
				// Success
				deferred.resolve(event);
			}, function(response){
				// Failure
				deferred.reject(response);
			});

			// Return the promise
			return deferred.promise;
		}
    };
});