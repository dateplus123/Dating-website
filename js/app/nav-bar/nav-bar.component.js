'use strict';

angular.module('navBar').
    component('navBar', {
        templateUrl: 'templates/nav-bar.html' ,
        controller: function($scope, $firebaseAuth){
            
            var auth = $firebaseAuth();
            var fireUser = auth.$getAuth();
          
            auth.$onAuthStateChanged(function(fireUser){
                if (fireUser) {
                    
                //WHEN USER SIGNS IN
                $scope.user = fireUser.displayName;
                $scope.userImg = fireUser.photoURL;
                $scope.userEmail = fireUser.email;
            
            } else {
                //WHEN USER SIGNS OUT
                console.log($scope.user);

                $scope.user = null;
                $scope.userImg = "";
                $scope.userEmail = "";

                }
            })
           
           $scope.signout = function(){
               auth.$signOut();
               
           }

        }

        
    })
    