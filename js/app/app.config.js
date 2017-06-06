'use strict';

angular.module('dateSite').
        config(function(
            $locationProvider,
            $routeProvider
                ){
                    $routeProvider.
                        when("/profile", {
                            templateUrl: 'templates/profile-user.html'
                        }).
                        when("/login",{
                            templateUrl: 'templates/login-page.html'
                        }).
                        otherwise({
                            template: "<h1>hello</h1"
                        })



        });

    
    angular.module('dateSite').service('sharedProperties', function() {
    //NEED TO CHANGE THIS TO WORK WITH OBJECTS INSTEAD OF SINGLE VALUES
    var selectedUser = 'Test';
    var selectedPicUser = '';
    var objectValue = {
        data: 'test object value'
    };
    
    return {
        getString: function() {
            return selectedUser;
        },
        getImg: function() {
            return selectedPicUser;
        },
        setUser: function(value, img) {
            selectedUser = value;
            selectedPicUser = img;
           
        },
        getObject: function() {
            return objectValue;
        }
    }
});