'use strict';

angular.module('loginPage')
    .controller('LoginPageController', function($scope, $firebaseAuth){
            
            console.log("hello");
            $scope.name = "Testing";

            $scope.test = function(){
                console.log("hello there");
            }

            var auth = $firebaseAuth();
            

            $scope.signIn = function(){
                $scope.firebaseUser = null;
                $scope.error = null;

                auth.$signInAnonymously().then(function(firebaseUser){
                    $scope.firebaseUser = firebaseUser;
                }).catch(function(error){
                    $scope.error = error;
                });
            };

            $scope.googleSign = function(){
                
                auth.$signInWithPopup("google").then(function(result) {
                console.log("Signed in as:", result.user.uid);
                $scope.firebaseUser = result.user.uid;
                
                $("#loginModal").modal('hide');

                }).catch(function(error) {
                console.error("Authentication failed:", error);
                });

            };
            

            

        
    });