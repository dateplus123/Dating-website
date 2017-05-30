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
                        otherwise({
                            template: "<h1>hello</h1"
                        })



        });