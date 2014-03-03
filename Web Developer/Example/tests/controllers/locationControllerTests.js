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
		scope = $rootScope.$new();		
		mockLocationService = sinon.stub({locations: function(){}});
	 	$controllerConstructor = $controller;
	}));

	it('should get all the locations from the weather service', function(){
		var mockLocations =  {name:'Test1', locationName:'Test Location Name 1'};
		mockLocationService.locations.returns(mockLocations);

		var ctrl = $controllerConstructor("locationCtrl", 
			{$scope: scope, $q: {}, weatherService: mockLocationService});

		console.log('Test', scope.locations());
		console.log('Mock', mockLocationService.locations());
		expect(scope.locations()).toBe(mockLocations);
	});

});