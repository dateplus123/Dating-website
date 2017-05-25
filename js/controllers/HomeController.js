app.controller('HomeController', ['$scope', function($scope) {
	
	
	/* THESE ARE YOUR LIST OF MOVIES AND ACCOMPANYING METADATA
	//	
	// 	They are in the following format:
	// 	title (String): the name of the movie
	// 	iscore (Number): the IMDB score
	// 	rating (String): the movie's MPAA rating 
	// 	released (Date): the release date
	// 	country (String): the country of production
	// 	posters (Array): an array of String values with the URL to movie posters
	// 	imdb (String): the URL to the corresponding IMDB website
	// 	website (String): the URL to the corresponding official website
	// 	likes (Number): a fictitious number of user likes
	// 	dislikes (Number): a fictitious number of user dislikes
	// 	posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
	//
	// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THIS LIST
	*/

  $scope.people = [
    {
      name: 'Bulma',
      age: '25',
      city:  'nj',
      interest: 'gaming',
      joined: new Date('1994', '10', '14'),
      photos: ['http://img12.deviantart.net/764d/i/2016/144/9/6/bulma__budokai_3__by_rayzorblade189-da3mkzv.png'],
      photoindex: 0
    },
    {
      name: 'Videl',
      age: '20',
      city:  'ny',
      interest: 'fights',
      joined: new Date('1994', '10', '14'),
      photos: ['http://img15.deviantart.net/64f5/i/2016/118/7/d/videl__budokai_3__by_rayzorblade189-d88fxar.png'],
      photoindex: 0
    },
    {
      name: 'trunks',
      age: '20',
      city:  'ny',
      interest: 'fights',
      joined: new Date('1994', '10', '14'),
      photos: ['http://pre15.deviantart.net/fd47/th/pre/i/2016/118/c/0/super_saiyan_future_trunks__budokai_3__by_rayzorblade189-d86qaff.png'],
      photoindex: 0
    },
    {
      name: 'Gohan',
      age: '20',
      city:  'ny',
      interest: 'fights',
      joined: new Date('1994', '10', '14'),
      photos: ['http://pre01.deviantart.net/bf39/th/pre/i/2015/024/7/4/ultimate_gohan__xenoverse__alt_palette__2_by_rayzorblade189-d8f7cch.png'],
      photoindex: 0
    },
    {
      name: 'Vegeta',
      age: '20',
      city:  'ny',
      interest: 'fights',
      joined: new Date('1994', '10', '14'),
      photos: ['http://pre12.deviantart.net/d146/th/pre/i/2015/283/2/4/ssgss_vegeta_arms_crossed_by_eymsmiley-d9c2dob.png'],
      photoindex: 0
    },
    {
      name: 'Naruto',
      age: '20',
      city:  'ny',
      interest: 'fights',
      joined: new Date('1994', '10', '14'),
      photos: ['http://vignette4.wikia.nocookie.net/naruto/images/0/09/Naruto_newshot.png/revision/latest?cb=20150817151803'],
      photoindex: 0
    },
    {
      name: 'Kakashi',
      age: '20',
      city:  'ny',
      interest: 'fights',
      joined: new Date('1994', '10', '14'),
      photos: ['http://images.techtimes.com/data/images/full/262265/kakashinarutounmasked.jpg'],
      photoindex: 0
    },
    {
      name: 'Captain America',
      age: '20',
      city:  'ny',
      interest: 'fights',
      joined: new Date('1994', '10', '14'),
      photos: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSItgWYkgy6rsawGZrNhZYRWNMsYJj9reZxubcPduA0OQGaqOyY_g'],
      photoindex: 0
    },
    {
      name: 'Spiderman',
      age: '20',
      city:  'ny',
      interest: 'fights',
      joined: new Date('1994', '10', '14'),
      photos: ['http://i.annihil.us/u/prod/marvel/i/mg/2/00/53710b14a320b.png'],
      photoindex: 0
    },
    {
      name: 'Jean Grey',
      age: '20',
      city:  'ny',
      interest: 'fights',
      joined: new Date('1994', '10', '14'),
      photos: ['https://vignette3.wikia.nocookie.net/marveldatabase/images/2/22/Jean_Grey_%28Earth-13729%29.jpg/revision/latest?cb=20140411025424'],
      photoindex: 0
    }
  ];
	
	
	

	
	/* ADD VARIABLES FOR STEP 3 HERE */
	
	$scope.title="IMDB + Jean Paul's  Top 8 Movies";
  $scope.owner="Jean Paul Gomez Galdos";
  $scope.github="https://github.com/jean2040/s219s17GomezGaldos-P3"
	
	
	
	
	
	
	/* ADD FUNCTIONS FOR STEP 7 HERE */
		
	$scope.like = function(index){
    
    $scope.movies[index].likes += 1 ;
  }

  $scope.dislike = function(index){
    $scope.movies[index].dislikes += 1 ;
  }

  $scope.posterClick = function(index){
    var totalLength = $scope.movies[index].posters.length ;
    var currentIndex = $scope.movies[index].posterindex
    if ( currentIndex == totalLength - 1){
      $scope.movies[index].posterindex = 0;
      //console.log(currentIndex);
    }else{
    $scope.movies[index].posterindex += 1;
     //console.log(currentIndex);
    }
    
  }
  $scope.timeText = function(minutes){
    var hour = minutes / 60 ;
    var minutes = minutes % 60 ;

    $scope.stringTime = parseInt(hour) + "h" + " " + minutes + "min";


  }
	
	
	
	
	
	
	
}]);
