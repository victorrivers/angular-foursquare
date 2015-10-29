angular.module('FoursquareApp').service('sharedPropertiesService', function () {
        
		var selectedItemId = '';

        return {
            getSelectedItemId: function () {
                return selectedItemId;
            },
            setSelectedItemId: function(value) {
                selectedItemId = value;
            }
        };
    });