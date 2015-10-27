(function() {
	angular.module('result-directives', []);
	
	angular.module('result-directives').directive('venueDetails', function(){
		return {
			restrict: 'E',
			templateUrl: 'venue-details.html',
			controller: function(){
				this.Name = 'SELECTED ITEM';
			},
			controllerAs: 'venueDetailsCtrl'
		};
	});
	
})();