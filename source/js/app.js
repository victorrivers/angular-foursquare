(function () {
    angular.module('FoursquareApp', ['result-directives']);

    angular.module('FoursquareApp').controller('MainController', function ($scope, venuesSearchService) {
        var controller = this;

        controller.items = [];

        this.category = '';
        this.place = 'Los Angeles';

        this.doExplore = function () {

            // Call the async method and then do stuff with what is returned inside our own then function
            venuesSearchService.async(this.category, this.place).then(function (items) {
                controller.items = items;
            });
        };

        this.doExplore();

        this.getCategory = function (venue) {
            var category = '';
            if (venue.categories.length > 0)
                category = venue.categories[0].name;
            return category;
        };

        this.buildIconUrl = function (venue) {
            var url = '';
            if (venue.categories.length > 0) {
                var icon = venue.categories[0].icon;
                url = icon.prefix + '32' + icon.suffix;
            }
            return url;
        };

        this.buildPhotoUrl = function (venue) {
            var url = '';
            if (venue.photos != null &&
                venue.photos.groups.length > 0 &&
                venue.photos.groups[0].items.length > 0) {
                var item = venue.photos.groups[0].items[0];
                url = item.prefix + '300x300' + item.suffix;
            }
            return url;
        };

        this.showUrl = function (url) {
            if (!url || 0 === url.length)
                return false;
            return true;
        }

        this.buildWebSiteUrl = function (url) {
            if (!url || 0 === url.length)
                return '';
            return url;
        }

		this.getRatingColor = function(ratingColor) {
			var color = '#' + ratingColor;
			return color;
		}
		
		this.setSelectedItem = function(item)
		{
			var itemId = item.venue.id;
			if (itemId != null)
			{
				$scope.$emit('selectedItemChanged', itemId);
			}
		}
		
    });
})();