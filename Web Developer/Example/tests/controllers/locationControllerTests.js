'use strict'

describe('Location Controller', function(){

	// // Scope to test for the controller
	var scope;
	var mockLocationService;
	var $controllerConstructor;

	// Make sure the angular app is loaded
	beforeEach(module("weatherApp"));

	// Setup the controller before each test
	beforeEach(inject(function($controller, $rootScope){
		// Create the scope
		scope = $rootScope.$new();		

		// Hold onto the controller constructor
		$controllerConstructor = $controller;

		// Mock out the weather service
		mockLocationService = sinon.stub({ locations: function(){}, getWeather: function(){} });
	}));

	it('should get all the locations from the weather service', function(){
		// Configure the mock object to return the correct data
		var mockLocations =  {name:'Test1', locationName:'Test Location Name 1'};
		mockLocationService.locations.returns(mockLocations);

		// Setup the controller
		var ctrl = $controllerConstructor("locationCtrl", {$scope: scope, $q: {}, weatherService: mockLocationService});

		// Assert
		expect(scope.locations()).toBe(mockLocations);
	});

	// Needs more tests to actually test the load locations call
	

});