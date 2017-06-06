'use strict';

angular.module('userModal', []).
    controller('UserModalController', function($scope, sharedProperties){
        console.log('here');
        //$scope.selectedUser = "Bulma Test";

        $scope.selectedUser = sharedProperties.getString;
        $scope.userImage = sharedProperties.getImg;
        

        
    });