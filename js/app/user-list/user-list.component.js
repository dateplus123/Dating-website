'use strict';

angular.module('userList').
    component('userList',{
        templateUrl: 'templates/user-list.html' ,
        controller: function($scope, sharedProperties){
            
            $scope.people = [
                    {
                    name: 'Bulma',
                    age: '25',
                    city:  'nj',
                    interest: 'gaming',
                    joined: new Date('1994', '10', '14'),
                    photos: ['http://img12.deviantart.net/764d/i/2016/144/9/6/bulma__budokai_3__by_rayzorblade189-da3mkzv.png'],
                    photoIndex: 0
                    },
                    {
                    name: 'Videl',
                    age: '20',
                    city:  'ny',
                    interest: 'fights',
                    joined: new Date('1994', '10', '14'),
                    photos: ['http://img15.deviantart.net/64f5/i/2016/118/7/d/videl__budokai_3__by_rayzorblade189-d88fxar.png'],
                    photoIndex: 0
                    },
                    {
                    name: 'trunks',
                    age: '20',
                    city:  'ny',
                    interest: 'fights',
                    joined: new Date('1994', '10', '14'),
                    photos: ['http://pre15.deviantart.net/fd47/th/pre/i/2016/118/c/0/super_saiyan_future_trunks__budokai_3__by_rayzorblade189-d86qaff.png'],
                    photoIndex: 0
                    },
                    {
                    name: 'Gohan',
                    age: '20',
                    city:  'ny',
                    interest: 'fights',
                    joined: new Date('1994', '10', '14'),
                    photos: ['http://pre01.deviantart.net/bf39/th/pre/i/2015/024/7/4/ultimate_gohan__xenoverse__alt_palette__2_by_rayzorblade189-d8f7cch.png'],
                    photoIndex: 0
                    },
                    {
                    name: 'Vegeta',
                    age: '20',
                    city:  'ny',
                    interest: 'fights',
                    joined: new Date('1994', '10', '14'),
                    photos: ['http://pre12.deviantart.net/d146/th/pre/i/2015/283/2/4/ssgss_vegeta_arms_crossed_by_eymsmiley-d9c2dob.png'],
                    photoIndex: 0
                    },
                    {
                    name: 'Naruto',
                    age: '20',
                    city:  'ny',
                    interest: 'fights',
                    joined: new Date('1994', '10', '14'),
                    photos: ['http://vignette4.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest?cb=20150817151803'],
                    photoIndex: 0
                    },
                    {
                    name: 'Kakashi',
                    age: '20',
                    city:  'ny',
                    interest: 'fights',
                    joined: new Date('1994', '10', '14'),
                    photos: ['http://images.techtimes.com/data/images/full/262265/kakashinarutounmasked.jpg'],
                    photoIndex: 0
                    },
                    {
                    name: 'Captain America',
                    age: '20',
                    city:  'ny',
                    interest: 'fights',
                    joined: new Date('1994', '10', '14'),
                    photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSItgWYkgy6rsawGZrNhZYRWNMsYJj9reZxubcPduA0OQGaqOyY_g'],
                    photoIndex: 0
                    },
                    {
                    name: 'Spiderman',
                    age: '20',
                    city:  'ny',
                    interest: 'fights',
                    joined: new Date('1994', '10', '14'),
                    photos: ['http://i.annihil.us/u/prod/marvel/i/mg/2/00/53710b14a320b.png'],
                    photoIndex: 0
                    },
                    {
                    name: 'Jean Grey',
                    age: '20',
                    city:  'ny',
                    interest: 'fights',
                    joined: new Date('1994', '10', '14'),
                    photos: ['https://vignette3.wikia.nocookie.net/marveldatabase/images/2/22/Jean_Grey_%28Earth-13729%29.jpg/revision/latest?cb=20140411025424'],
                    photoIndex: 0
                    }
                ];

                $scope.setUser = function(index){
                    console.log($scope.people[index].photos[$scope.people[index].photoIndex]);
                    $('#userModal').modal('show');
                    sharedProperties.setUser($scope.people[index].name, $scope.people[index].photos[$scope.people[index].photoIndex]);
                }
                    
        }

    })

    