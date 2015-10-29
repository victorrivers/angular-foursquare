(function() {
	angular.module('result-directives', []);
	
	angular.module('result-directives').directive('venueDetails', function(){
		return {
			restrict: 'E',
			templateUrl: 'venue-details.html',
			controller: function($scope, venuesPhotosService){
				
				var controller = this;
				this.Photos = [];
				
				$scope.$on('selectedItemChanged', function(event, itemId) {
					
					venuesPhotosService.async(itemId).then(function (photos) {
						
						controller.Photos = photos;
					});
					
					
					
				});
				
				this.buildPhotoUrl = function (item) {
					var url = '';
					if (item != null)
					{						
						url = item.prefix + '300x300' + item.suffix;
					}
					return url;
				};
				
			},
			controllerAs: 'venueDetailsCtrl'
		};
	});
	
})();