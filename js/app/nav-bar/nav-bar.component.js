'use strict';

angular.module('navBar').
    component('navBar', {
        templateUrl: 'templates/nav-bar.html' ,
        controller: function($scope, $firebaseAuth){
            $scope.user = "JP Test";
            console.log($scope.user);

            var auth = $firebaseAuth();
            var fireUser = auth.$getAuth();
            if (fireUser) {
            
            $scope.user = fireUser.displayName;
            $scope.userImg = fireUser.photoURL;
            $scope.userEmail = fireUser.email;
            
            } else {
            console.log("Signed out");
            }

        }
    })
    