weatherApp.controller('locationCtrl', function ($scope, $q, weatherService) {

	// Holds the list of all locations available
	$scope.locations = weatherService.locations;

	// Holds the current weather to show
	$scope.weather = {};

	// The current location being shown
	$scope.currentLocation = {};

	// Flag to show if the data is loading or an error occured
	$scope.isLoading = false;
	$scope.isError = false;

	// Initialise the controller by loading the first location
	$scope.init = function(){
		console.log('Init');
		$scope.currentLocation = $scope.locations[0];
		$scope.loadWeather($scope.locations[0]);
	};

	// Load weather data and save in the model.
	$scope.loadWeather = function(location){
		console.log('Load Weather', location);

		// Flag the data is loading
		$scope.isLoading = true;	
		$scope.isError = false;

		// Get the promise of data from the service	
		weatherService.getWeather(location).then(
		function(event){
			// Success. Display data
			console.log('Success - Weather loaded');
			$scope.weather = event;
			$scope.isLoading = false;				
		},
		function(response){
			// An error occured while trying to load the data
			console.log('Fail - Weather could not be found');
			$scope.weather = {};
			$scope.isLoading = false;
			$scope.isError = true;
		});
	};

	// The user has changed their location, reload the data
	$scope.changeLocation = function(){
		console.log('Change location', $scope.currentLocation);
		$scope.loadWeather($scope.currentLocation);
	};
});