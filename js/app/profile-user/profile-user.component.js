'use-strict';

angular.module('profileUser')
    .component('profileUser',{
        templateURL: "templates/profile-user.html",
        controller: function( $scope ){

            
        }
    }).controller('UserProfileController', 
        
                function( $scope, $firebaseAuth, $firebaseObject, $firebaseStorage){

                    var auth = $firebaseAuth();
                    var fireUser = auth.$getAuth();
                    var ref = firebase.database().ref();
                    if(fireUser){
                        //downloading profile. 
                        $scope.logged = true;
                        $scope.profile = $firebaseObject(ref.child('users').child(fireUser.uid));
                        
                                            

                    } else {
                        $scope.logged = false;
                        console.log("No user signed in");
                    }
           
                    $scope.saveProfile= function(){
                        $scope.profile.$save().then(function(){
                            alert('Profile Saved');
                        }).catch(function(error){
                            alert('error');
                        })
                    }

                    $scope.file_changed = function(element){
                        $scope.$apply(function(scope){
                            var photofile = element.files[0];
                            var reader = new FileReader();
                            reader.onload = function(e){
                                    console.log(photofile);
                                    var storageRef = firebase.storage().ref("userProfiles/"+ fireUser.uid + "/profilepic.jpg");
                                    var storage = $firebaseStorage(storageRef);

                                    var uploadTask = storage.$put(photofile);
                            };
                            reader.readAsDataURL(photofile);
                        });
                    }

                }
        );