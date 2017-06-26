'use strict';

angular.module('userList').
    component('userList',{
        templateUrl: 'templates/user-list.html' ,
        controller: function($scope, sharedProperties, $firebaseArray){
            
            
                // Store users list into an array for ng-repeat use
                var ref = firebase.database().ref();
                var list = $firebaseArray(ref.child('users'));
                //store array list in the scope for DOM access
                $scope.users = list;
               // getting index from DOM and sending it to the service 
               //TODO: CHANGE IT TO SEND THE ARRAY TO THE SERVICE
                $scope.setUser = function(index){
                    console.log(list[index].name);
                    $('#userModal').modal('show');
                    sharedProperties.setUser(list[index].name, list[index].photo);
                }

                
                    
        }

    })

    